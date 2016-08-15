import React from 'react';
import Todo from 'Todo';

export default class Todos extends React.Component{

  render(){

    <div className="panel panel-default">
      <div className="panel-heading">
        <h2 className="text-primary">{`${this.props.name}'s Todo List`}</h2>
      </div>
    </div>

    // var {name, todos} = this.props.todos;
    // var todoList = todos.map((todo) => {
    //   return <Todo key={todo.id} todo={todo} />;
    // });
    // return (
    //   <div className="panel panel-default">
    //     <div className="panel-heading">
    //       <h2 className="text-primary">{`${name}'s Todo List`}</h2>
    //     </div>
    //     <div className="panel-body">
    //       {todoList}
    //     </div>
    //   </div>
    // );
  }

};
