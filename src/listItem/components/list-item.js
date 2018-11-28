import React from 'react';
import PropTypes from 'prop-types';
import './list-item.css';

const ListItem = (props) => {
	return (
		<li className="ListItem">
			{props.children}
		</li>
	)
}

ListItem.propTypes = {
	children: PropTypes.node.isRequired
}

export default ListItem;