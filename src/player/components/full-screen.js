import React from 'react';
import PropTypes from 'prop-types';
import FullScreenIcon from '../../icons/components/full-screen';
import './full-screen.css';

const FullScreen = (props) => {
	return (
		<div 
			className="FullScreen"
			onClick={props.handleToggleFullScreen}
		>
			<FullScreenIcon 
				size={25}
				color="white"
			/>
		</div>
	)
}

FullScreen.propTypes = {
	handleToggleFullScreen: PropTypes.func,
}


export default FullScreen;