import React from 'react';
import PropTypes from 'prop-types';
import './timer.css';

const Timer = (props) => {
	const {currentTime, duration} = props;

	return (
		<div className="Timer">
			<p>
				<span>{currentTime} / {duration}</span>
			</p>
		</div>
	)
}

Timer.propTypes = {
	currentTime: PropTypes.string,
	duration: PropTypes.string
}

export default Timer;