import React from 'react';

export default class DialogMessage extends React.Component{
  render(){
    if(!this.props.show){ return null; }

    return  (
      <div id="dialog-message" className={this.props.type}><span className={this.props.glyphicon}></span>{this.props.text}</div>
    );
  };
};
