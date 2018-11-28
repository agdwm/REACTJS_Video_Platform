import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../listItem/components/list-item';

const PictureList = (props) => {

	return (
		<ul>
			{
				props.friendsPlaylist.list.map((item) => {
					return (
						<ListItem key={item.id}>
							<img src={item.src} alt={`Profile image of ${item.name}`}/>
							{item.name}
						</ListItem>
					)
				})
			}
		</ul>
	)
}

PictureList.propTypes = {
	friendsPlaylist: PropTypes.object
}

export default PictureList;