import React from 'react';
import './playlist.css';
import Media from './media.js';

function Playlist(props) {
	return (
		<div className="Playlist">
			{
				props.playlist.map((item) => {
					return <Media {...item} key={item.id}/>
				})
			}
		</div>
	)
}

export default Playlist;