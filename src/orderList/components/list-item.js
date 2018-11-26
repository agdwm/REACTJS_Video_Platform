import React from 'react';

const ListItem = (props) => {
	return (
		<li className="ListItem">
			<a href="#">{props.title}</a>
		</li>
	)
}

export default ListItem;