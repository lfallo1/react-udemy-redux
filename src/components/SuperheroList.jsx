var React = require('react');
var Superhero = require('./Superhero');

var SuperheroList = React.createClass({

      render : function(){
        var { superheroes, selectSuperhero } = this.props;

        var superheroList = superheroes.map(function(superhero){
            return (
                <Superhero key={superhero.id} superhero={superhero} handleSelectSuperhero={selectSuperhero}/>
            );
          });

        return (
          <ul className="list-group">
            {superheroList}
          </ul>
        );
      }
    });

module.exports = SuperheroList;
