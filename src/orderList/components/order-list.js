import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../listItem/components/list-item';
import './list-item.css';

const OrderList = (props) => {
	
	// const numbers = props.numbers;
	// const listItems = numbers.map((number) => 
	// 	<ListItem key={number.toString()} value={number}/>
	// );
	return (
		<ol>
			{
				props.myPlaylist.list.map((item) => {
					return (
						<ListItem 	
							key={item.id}
							title={item.title}
						/>
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