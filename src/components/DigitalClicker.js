// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
 
    constructor(props) {
        super(props);
        this.state = { timesClicked: 0 };
  }

  clickButton= () => {
    let clicks = this.state.timesClicked+1;
    this.setState( { timesClicked : clicks }  );
  }

  render() {
    return <button
      onClick = {this.clickButton}
      label = {this.state.timesClicked}
    >{this.state.timesClicked}</button>;
  }
}
