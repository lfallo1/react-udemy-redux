import React from 'react';
import Todos from 'Todos';
import {connect} from 'react-redux';
import {fetchUser} from 'UserActions';

@connect((store) => {
  return {
    user: store.user.user
  }
})

export default class VideoApp extends React.Component{

  componentWillMount(){
    this.props.dispatch(fetchUser);
  };

  render(){
    const {user} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <Todos name={user.name} />
          </div>
        </div>
      </div>
    );
  };
};
