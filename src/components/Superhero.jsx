var React = require('react');

var Superhero = React.createClass({

      handleClick : function(){
        this.props.handleSelectSuperhero(this.props.superhero);
      },

      render : function(){
        var {name, level, id} = this.props.superhero;

        return (
          <li className="list-group-item superhero-container" onClick={this.handleClick}>
            <div className="superhero-name">{name} - {level}</div>
          </li>
        );
      }
    });

module.exports = Superhero;
