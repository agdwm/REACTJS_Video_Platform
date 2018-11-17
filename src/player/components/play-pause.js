import React from 'react';
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
						<Play size={25} color="white" />
					</button>
				:
					<button onClick={handleClick}>
						<Pause size={25} color="white" />
					</button>
			}
		</div>
	)
}

export default PlayPause;