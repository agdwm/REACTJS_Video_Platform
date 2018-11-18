import React from 'react'
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

export default Timer;