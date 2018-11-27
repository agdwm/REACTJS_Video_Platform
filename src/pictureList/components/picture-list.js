import React from 'react';
import ListItem from '../../listItem/components/list-item';

const PictureList = (props) => {

	return (
		<ul>
			{
				props.friendsPlaylist.list.map((item) => {
					return (
						<li	key={item.id}>
							<img src={item.src} alt={`Profile image of ${item.name}`}/>
							<p>{item.name}</p>
						</li>
					)
				})
			}
		</ul>
	)
}


export default PictureList;