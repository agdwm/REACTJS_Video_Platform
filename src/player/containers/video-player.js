import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout';
import Title from '../components/title';
import Video from '../components/video';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {

	state = {
		pause: true,
	}

	togglePlay = e => {
		this.setState({
			pause: !this.state.pause
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
				<Video
					autoplay={false}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;