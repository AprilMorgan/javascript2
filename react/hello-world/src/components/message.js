import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        })
    }

  render() {
    return (
      <div>
      <h1>{this.state.message}</h1>
      <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

// class Welcome2 extends Component {
//   render() {
//     const { name, nickname } = this.props;
//     return (
//       <h1>
//         Welcome {name} aka {nickname} again
//       </h1>
//     );
//   }
// }

export default Message