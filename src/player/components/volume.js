import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import VolumeMuted from '../../icons/components/volume-muted';
import './volume.css';

const Volume = (props) => {
	const {
		muted,
		handleVolumeClick, 
		value, 
		handleVolumeChange
	} = props;

	console.log('MUTED', muted);
	return (
		<button className="Volume" onClick={handleVolumeClick}>
			{
				muted ? 
					<VolumeMuted
						color="white"
						size={25}
					/>
				: 
					<VolumeIcon
						color="white"
						size={25}
					/>
			}
			<div className="Volume-range">
				<input
					type="range"
					min={0}
					max={1}
					value={value}
					step={.05}
					onChange={handleVolumeChange}
				/>
			</div>
		</button>
	)
}

export default Volume