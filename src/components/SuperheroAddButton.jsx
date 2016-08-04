var React = require('react');

var SuperheroAddButton = React.createClass({
  handleClick : function(){
    this.props.handleClick(this.refs.name.value, this.refs.level.value);
    this.refs.name.value = '';
    this.refs.level.value = '';
  },
  render : function(){
    return (
      <div className="form-group">
        <input className="form-control" ref="name" type="text" placeholder="change name here..." />
        <input className="form-control" ref="level" type="number" placeholder="level..." />
        <button className="btn btn-primary" onClick={this.handleClick}>Add Superhero</button>
      </div>
    );
  }
});

module.exports = SuperheroAddButton;
