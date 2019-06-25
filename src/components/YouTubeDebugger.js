// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
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

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    });
  };

  //   this.setState(oldState => ({
  //     settings: {
  //       ...this.state.settings,
  //       bitrate: 12
  //     }
  //   }));

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>
          .birate
        </button>
        <button className="resolution" onClick={this.handleResolution}>
          .resolution
        </button>
      </div>
    );
  }
}
export default YouTubeDebugger;
