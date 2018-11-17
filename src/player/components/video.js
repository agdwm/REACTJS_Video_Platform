import React, {Component} from 'react'
import './video.css';

class Video extends Component {
	
	togglePlay() {
		//'play()' and 'pause()' are native methods of the browser for the tag 'video'
		this.props.pause ? this.video.play() : this.video.pause()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.pause !== this.props.pause) {
			this.togglePlay();
		}
	}

	setRef = el => {
		this.video = el;
	}

	render() {
		const {autoplay, src} = this.props;

		return (
			<div className="Video">
				<video
					ref={this.setRef}
					autoPlay={autoplay}
					src={src}>
				</video>
			</div>
		)
	}
}

export default Video;