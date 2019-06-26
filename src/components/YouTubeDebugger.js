// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" name="bitrate" onClick={this.handleBitrate}>
          Bitrate
        </button>
        <button
          className="resolution"
          name="resolution"
          onClick={this.handleResolution}
        >
          Resolution
        </button>
      </div>
    );
  }
}
