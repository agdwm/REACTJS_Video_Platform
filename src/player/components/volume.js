import React from 'react';
import PropTypes from 'prop-types';
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

	return (
		<button className="Volume">
			<div onClick={handleVolumeClick}>
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
			</div>
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

Volume.propTypes = {
	muted: PropTypes.bool,
	handleVolumeClick: PropTypes.func,
	value:  PropTypes.number,
	handleVolumeChange:  PropTypes.func,
}

export default Volume