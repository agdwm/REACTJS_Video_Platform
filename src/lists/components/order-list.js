import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../listItem/components/list-item';

const OrderList = (props) => {
	return (
		<ol>
			{
				props.myPlaylist.list.map((item) => {
					return (
						<ListItem key={item.id}	>
							{item.title}
						</ListItem>
					)
				})
			}
		</ol>
	)
}

OrderList.propTypes = {
	myPlaylist: PropTypes.object
}

export default OrderList;