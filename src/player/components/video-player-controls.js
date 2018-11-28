import React from 'react';
import PropTypes from 'prop-types';
import './video-player-controls.css';

const VideoPlayerControls = (props) => {
	return (
		<div className="VideoPlayerControls">
			{props.children}
		</div>
	)
}

VideoPlayerControls.propTypes = {
	children: PropTypes.node
}

export default VideoPlayerControls;