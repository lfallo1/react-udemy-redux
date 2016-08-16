var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var concat = require('gulp-concat');
var notifier = require('node-notifier');

var port = process.env.PORT || 9005;

var config = {
    port: port,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        jsx: './src/**/*.jsx',
        js: './src/**/*.js',
        images: './src/images/*',
        css: './src/css/*.css',
        public: './public',
        mainJsx: './src/main.jsx',
        'entry':'public/index.html'
    }
}

//show a desktop message on build errors
var notify = function(error) {

  console.log(error);

  var message = 'In: ';
  var title = 'Error: ';

  if (error.message) {
    title += error.message;
  } else {
    title += ' description not available';
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.loc && error.loc.line) {
    message += '\nOn Line: ' + error.loc.line;
  }

  notifier.notify({title: title, message: message, time: 10000});
};

//Start a local development server
gulp.task('connect', function() {
    connect.server({
        root: [config.paths.public],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function() {
    gulp.src(config.paths.entry)
        .pipe(open({ uri: config.devBaseUrl = ':' + config.port + '/'}));
});

// Babel - converts ES6 code to ES5 - does NOT handle imports / dependencies
// Browserify - packages dependencies into one file, in right order. can have plugins.
// Babelify - a babel plugin for browserify, to make browserify handle es6 including imports & convert jsx
//IMPORTANT babel note - babelify plugins are declared in .babelrc file --- includes an es6 and react plugin
gulp.task('jsx', function(){

  gulp.task('jsx', function(){
    var bundler = browserify({
      entries : [config.paths.mainJsx],
      extensions: ['.jsx', 'js'],
      paths: ['./node_modules', './src',
        './src/components', './src/redux/reducers', './src/redux/stores', './src/redux/actions', './src/constants'],
      transform : [babelify]
    });

    bundler.bundle()
    .on('error', notify)
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.paths.public + '/js'))
    .pipe(connect.reload());
  });
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.public))
        .pipe(connect.reload())
});

gulp.task('css', function(){
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.public + '/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch([config.paths.html], ['html']);
  gulp.watch([config.paths.jsx, config.paths.js], ['jsx']);
  gulp.watch([config.paths.css], ['css']);
});

gulp.task('default', ['jsx', 'html', 'css', 'open', 'watch']);
