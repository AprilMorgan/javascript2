import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state={
        isLoggedIn: true
    };
  }

  render() {
    if(this.state.isLoggedIn) {
          return <h1>Welcome April! Logged in</h1>
        }else{
          return <h1>Welcome Guest! Logged in</h1>
        };
  
        // let message;
        // if(this.state.isLoggedIn) {
        // message = <div>Welcome April</div>
        // }else{
        // message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

  }

}

export default UserGreeting;