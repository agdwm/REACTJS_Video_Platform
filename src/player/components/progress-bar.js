import React from 'react';
import PropTypes from 'prop-types';
import './progress-bar.css';

const ProgressBar = (props) => {

	return (
		<div className="ProgressBar">
			<input 
				type="range"
				min={0}
				max={props.duration}
				value={props.value}
				onChange={props.handleProgressChange}
			/>
		</div>
	)
}

ProgressBar.propTypes = {
	duration: PropTypes.number,
	value: PropTypes.number,
	handleProgressChange: PropTypes.func,
}

export default ProgressBar;