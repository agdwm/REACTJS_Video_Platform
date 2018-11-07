import React from 'react';
import './playlist.css';
import Media from './media.js';
import Play from '../../icons/components/play';

function Playlist(props) {
	const playlist = props.data.categories[0].playlist;
	return (
		<div className="Playlist">
			<Play
				color="red"
				size={50}/>
			{
				playlist.map((item) => {
					return <Media {...item} key={item.id}/>
				})
			}
		</div>
	)
}

export default Playlist;