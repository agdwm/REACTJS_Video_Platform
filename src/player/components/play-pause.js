import React from 'react';
import PropTypes from 'prop-types';
import './play-pause.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

const PlayPause = (props) => {
	const {handleClick, pause} = props;

	return (
		<div className="PlayPause">
			{
				pause ?
					<button onClick={handleClick}>
						<Play size={22} color="white" />
					</button>
				:
					<button onClick={handleClick}>
						<Pause size={22} color="white" />
					</button>
			}
		</div>
	)
}

PlayPause.propTypes = {
	handleClick: PropTypes.func,
	pause: PropTypes.bool,
}

export default PlayPause;