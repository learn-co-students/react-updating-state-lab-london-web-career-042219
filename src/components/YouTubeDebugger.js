// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: [],
			user: null,
			settings: {
				bitrate: 8,
				video: {
					resolution: '1080p'
				}
			}
		}
	}

	changeBitrate = () => {
		let {settings} = this.state;
		settings.bitrate = 12;
		this.setState({settings: settings})
	}

	changeResolution = () => {
		let {settings} = this.state;
		settings.video.resolution = "720p";
		this.setState({settings: settings})
	}
	
	render() {
		return (
			<div>
				<button className="bitrate" onClick={this.changeBitrate}/>
				<button className="resolution" onClick={this.changeResolution}/>
			</div>
		)
	}
}

export default YouTubeDebugger;
