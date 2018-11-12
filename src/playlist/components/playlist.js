import React from 'react';
import './playlist.css';
import Media from './media.js';

function Playlist(props) {
	return (
		<div className="Playlist">
			{
				props.playlist.map((item) => {
					return <Media key={item.id} {...item} handleClick={props.handleOpenModal}/>
				})
			}
		</div>
	)
}

export default Playlist;