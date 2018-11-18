import React, {Component} from 'react'
import './video.css';

class Video extends Component {
	
	togglePlay() {
		//'play' and 'pause' are native methods of the browser for the video tag
		if (this.props.pause) {
			this.video.play()
		} else {
			this.video.pause();
		}
	}
	componentWillReceiveProps = (nextProps) => {
		//nextProps.pause !== this.props.pause && this.togglePlay()
		if (nextProps.pause !== this.props.pause) {
			this.togglePlay();
		}
	}
	setRef = el => {
		this.video = el;
	}

	render() {
		const {
			muted, 
			autoplay, 
			src,
			handleLoadedMetadata,
			handleTimeUpdate,
			handleSeeking,
			handleSeeked
		} = this.props;

		return (
			<div className="Video">
				<video
					muted={muted}
					autoPlay={autoplay}
					src={src}
					ref={this.setRef}
					//Media Events (react)
					onLoadedMetadata={handleLoadedMetadata}
					onTimeUpdate={handleTimeUpdate}
					onSeeking={handleSeeking}
					onSeeked={handleSeeked}
				>
				</video>
			</div>
		)
	}
}

export default Video;