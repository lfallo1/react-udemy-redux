import React from 'react';
import store from 'Store';
import {connect} from 'react-redux';
import TodoActions from 'TodoActions';

class Todo extends React.Component{

  deleteTodo = () => {
    this.props.dispatch(TodoActions.DeleteTodo(this.props.index));
  };

  toggleComplete = () =>{
    this.props.dispatch(TodoActions.ToggleCompleted(this.props.index));
  };

  render(){
    var checkmark, todoClass = '';
    if(this.props.todo.completed){
      todoClass = 'todo todo-completed';
      checkmark = <span className="glyphicon glyphicon-ok-circle"></span>;
    } else{
      todoClass = 'todo todo-pending';
      checkmark = <span className="glyphicon glyphicon-info-sign"></span>;
    }

    return (
      <div className={todoClass}>
        {this.props.todo.name}
        &nbsp;{checkmark}
        <button className="btn btn-danger btn-sm" onClick={this.deleteTodo}>Delete</button>
        <button className="btn btn-success btn-sm" onClick={this.toggleComplete}>Toggle</button>
      </div>
    );
  };

};

export default connect((store)=>{return{}})(Todo);
