import React, { Component } from 'react'

export default class DigitalClicker extends Component {
   
        state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    
    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        const { changeBitrate,changeResolution } = this
        return (
            <div>
                <button className={'bitrate'} onClick={changeBitrate}>change bitrate</button>
                <button className={'resolution'} onClick={changeResolution}>change resolution</button>
            </div>
           
        )
    }
}