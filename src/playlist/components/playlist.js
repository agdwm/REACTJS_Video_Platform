import React from 'react';
import './playlist.css';
import Media from './media.js';

function Playlist(props) {
	return (
		<div className="Playlist">
			{
				props.playlist.map((item) => {
					// item = {
					// 	"title": "¿Qué es responsive Design?",
					// 	"author": "LeonidasEsteban",
					// 	"type": "video",
					// 	"cover": "./images/covers/responsive.jpg",
					// 	"src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
					// 	"id": 1
					// },
					return <Media key={item.id} {...item} openModal={props.handleOpenModal}
							/>
				})
			}
		</div>
	)
}

export default Playlist;