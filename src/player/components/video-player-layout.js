import React from 'react';
import PropTypes from 'prop-types';
import './video-player-layout.css';

const VideoPlayerLayout = (props) => {
	return (
		<div 
			className="VideoPlayer"
			ref={props.setRef}
		>
			{props.children}
		</div>
	)
}

VideoPlayerLayout.propTypes = {
	setRef: PropTypes.func,
	children: PropTypes.node
}

export default VideoPlayerLayout;