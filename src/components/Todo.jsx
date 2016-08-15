import React from 'react';

export default class Todo extends React.Component{

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
      </div>
    );
  };

};
