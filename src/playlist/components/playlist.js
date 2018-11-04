import React, { Component } from 'react';
import './playlist.css';
import Media from './media.js';

class Playlist extends Component {

	render() {
		const playlist = this.props.data.categories[0].playlist;
		return (
			<div className="Playlist">
				{
					playlist.map((item) => {
						return <Media {...item} key={item.id}/>
					})
				}
			</div>
		)
	}
}

export default Playlist;