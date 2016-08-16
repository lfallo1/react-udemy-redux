import React from 'react';
import Todos from 'Todos';
import store from 'Store';
import {connect} from 'react-redux';
import UserActions from 'UserActions';
import TodoActions from 'TodoActions';

class VideoApp extends React.Component{

  componentWillMount(){
    this.props.dispatch(UserActions.FetchUser());
    this.props.dispatch(TodoActions.FetchTodos())
  };

  render(){
    const {user} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <Todos name={user.name} todos={this.props.todos} />
          </div>
        </div>
      </div>
    );
  };
};

export default connect((store) => {
  return {
    user: store.User.user,
    todos: store.Todos
  }
})(VideoApp);
