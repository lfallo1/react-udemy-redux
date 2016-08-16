import React from 'react';
import store from 'Store';
import {connect} from 'react-redux';
import TodoActions from 'TodoActions';

class AddButton extends React.Component{

  addTodo = ()=>{
    if(this.refs.addTodo.value.trim()){
      this.props.dispatch(TodoActions.AddTodo(this.refs.addTodo.value));
      this.refs.addTodo.value = '';
    }
  };

  render(){
    return (
      <div className="form-group-horizontal">
        <input ref="addTodo" className="form-control" type="text" placeholder="Add todo" />
        <button className="btn btn-default" onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  };

};

export default connect((store)=>{return{}})(AddButton);
