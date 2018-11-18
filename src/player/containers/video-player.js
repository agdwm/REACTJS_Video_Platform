import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout';
import Title from '../components/title';
import Video from '../components/video';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';

class VideoPlayer extends Component {

	state = {
		pause: true,
		duration: 0
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
		this.video = e.target;
		this.setState({
			duration: this.video.duration
		})
	}

	render() {
		return (
			<VideoPlayerLayout>
				<Title
					title="Esto es un video"
				/>
				<PlayPause 
					pause={this.state.pause}
					handleClick={this.togglePlay}
				/>
				<Timer 
					duration={this.state.duration}
				/>
				<Video
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;