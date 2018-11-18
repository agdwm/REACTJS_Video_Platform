import React, {Component} from 'react'
import {formattedTime} from '../../utils/utils';
import VideoPlayerLayout from '../components/video-player-layout';
import Title from '../components/title';
import Video from '../components/video';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';

class VideoPlayer extends Component {

	state = {
		pause: true,
		duration: 0,
		currentTime: 0
	}
	togglePlay = e => {
		this.setState({
			pause: !this.state.pause
		})
	}
	componentDidMount() {
		this.setState({
			pause: (!this.props.autoplay)
		})
	}
	handleLoadedMetadata = e => {
		//duration: property from html5 Media API
		this.video = e.target;
		this.setState({
			duration: this.video.duration
		})
	}
	handleTimeUpdate = e => {
		//currentTime: property from html5 Media API
		this.setState({
			currentTime: this.video.currentTime
		})
	}

	render() {
		return (
			<VideoPlayerLayout>
				<Title
					title="Esto es un video"
				/>
				<Controls>
					<PlayPause 
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<Timer 
						duration={formattedTime(this.state.duration)}
						currentTime={formattedTime(this.state.currentTime)}
					/>
				</Controls>
				<Video
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;