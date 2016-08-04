var React = require('react');

var SuperheroDetails = React.createClass({
      render : function(){
        var {superhero} = this.props;
        var renderDetails = function(){
          if(superhero.name){
            var description = superhero.level > 9000 ? superhero.name + ' is strong as shit' : superhero.level > 7000 ? superhero.name + ' is quite a powerful superhero' : superhero.name + ' is just okay';
            return (
              <div className="thumbnail">
                <img width="350px" src="http://placehold.it/350x150" alt="superhero.jpg" />
                <div className="caption">
                  <div>
                    <h3>{superhero.name} - {superhero.level}</h3>
                    <p>{description}</p>
                  </div>
                  <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                </div>
              </div>
            );
          } else{
            return <small>Select a superhero from the list to view their details</small>;
          }
        }

        return (
          <div className="row">
            <div className="col-sm-6 col-md-4">
                {renderDetails()}
            </div>
          </div>
        );
      }
});

module.exports = SuperheroDetails;
