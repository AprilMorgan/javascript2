import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: "hello",
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({ 
            message: "goodbye",
        });
        console.log(this);
    }
    render() {
        return (
            <div>
              <h1>{this.state.message}</h1>
              <button onClick={this.clickHandler}></button>
            </div>

        );
    }
}

export default EventBind;