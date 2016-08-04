var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var concat = require('gulp-concat');

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

// ----- This also works placing a require instead of entries property ------
// gulp.task('jsx', function(){
//   browserify({
//     debug:true,
//     extensions: ['.jsx', 'js'],
//     paths: ['./node_modules', './src/components', './src/api']
//   })
//   .transform(babelify)
//   .require("./src/main.jsx", { entry: true })
//   .bundle()
//   .pipe(source('main.js'))
//   .pipe(gulp.dest(config.paths.public + '/js'))
//   .pipe(connect.reload());
// });

//***using reactify instead of babel***
// gulp.task('jsx', function(){
//   browserify({
//     entries : [config.paths.mainJsx],
//     extensions: ['.jsx', 'js'],
//     paths: ['./node_modules', './src/components', './src/api']
//   })
//   .transform(reactify)
//   .bundle()
//   .pipe(source('main.js'))
//   .pipe(gulp.dest(config.paths.public + '/js'))
//   .pipe(connect.reload());
// });

// Babel - converts ES6 code to ES5 - does NOT handle imports / dependencies
// Browserify - packages dependencies into one file, in right order. can have plugins.
// Babelify - a babel plugin for browserify, to make browserify handle es6 including imports & convert jsx
//IMPORTANT babel note - babelify plugins are declared in .babelrc file --- includes an es6 and react plugin
gulp.task('jsx', function(){

  gulp.task('jsx', function(){
    var bundler = browserify({
      entries : [config.paths.mainJsx],
      extensions: ['.jsx', 'js'],
      paths: ['./node_modules', './src/components', './src/api'],
      transform : [babelify]
    });

    bundler.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.paths.public + '/js'))
    .pipe(connect.reload());
  });

  //***** does the same thing ******
  // browserify({
  //   entries : [config.paths.mainJsx],
  //   extensions: ['.jsx', 'js'],
  //   paths: ['./node_modules', './src/components', './src/api']
  // })
  // .transform(babelify)
  // .bundle()
  // .pipe(source('main.js'))
  // .pipe(gulp.dest(config.paths.public + '/js'))
  // .pipe(connect.reload());
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
