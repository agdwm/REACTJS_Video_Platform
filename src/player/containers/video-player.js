import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout';
import Title from '../components/title';
import Video from '../components/video';

class VideoPlayer extends Component {
	render() {
		return (
			<VideoPlayerLayout>
				<Title
					title="Esto es un video"
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