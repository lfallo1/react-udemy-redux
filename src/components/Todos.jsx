import React from 'react';
import Todo from 'Todo';
import AddButton from 'AddButton';
import store from 'Store';
import {connect} from 'react-redux';
import TodoActions from 'TodoActions';

class Todos extends React.Component{

  render(){
    var name = this.props.name;
    var todos = this.props.todos;
    var todoList = todos.map((todo, idx) => {
      return <Todo key={idx} index={idx} todo={todo} />;
    });
    return (
      <div className="panel panel-default">
        <AddButton />
        <div className="panel-heading">
          <h2 className="text-primary">{`${name}'s Todo List`}</h2>
        </div>
        <div className="panel-body">
          {todoList}
        </div>
      </div>
    );
  }
};

export default connect((store)=>{return {} })(Todos);
