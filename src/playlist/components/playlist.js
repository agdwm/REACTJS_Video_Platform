import React from 'react';
import PropTypes from 'prop-types';
import Media from '../../media/components/media';
import './playlist.css';

function Playlist(props) {
	return (
		<div className="Playlist">
			{
				props.playlist.map((item) => {
					return <Media key={item.id} {...item} openModal={props.handleOpenModal}
							/>
				})
			}
		</div>
	)
}

Playlist.propTypes = {
	playlist: PropTypes.array,
}

export default Playlist;