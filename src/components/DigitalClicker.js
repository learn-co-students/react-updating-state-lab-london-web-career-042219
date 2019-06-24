import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  incrementClicks = () => {
    this.setState(oldState => ({
      timesClicked: oldState.timesClicked + 1
    }));
  };

  render() {
    return (
      <button onClick={this.incrementClicks}>{this.state.timesClicked}</button>
    );
  }
}
