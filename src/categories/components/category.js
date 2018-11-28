import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../../playlist/components/playlist';

function Category(props) {
	return (
		<div className="Category">
			<p className="Category-description">{props.description}</p>
			<h2 className="Category-title">{props.title}</h2>
			<Playlist 
				playlist={props.playlist} 
				handleOpenModal={props.handleOpenModal}
			/>
		</div>
	)
}

Category.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
	playlist: PropTypes.array.isRequired,
	handleOpenModal: PropTypes.func.isRequired,
}

export default Category;