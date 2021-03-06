import React from 'react';
import Logo from '../../logo/components/logo';
import OrderList from '../../lists/components/order-list';
import PictureList from '../../lists/components/picture-list';
import './related.css';

function Related(props) {
	return (
		<div className="Related">
			<Logo/>
			
			<header className="header">{props.myPlaylist.title}</header>
			<OrderList {...props} />
			
			<header className="header">{props.friendsPlaylist.title}</header>
			<PictureList {...props} />
		</div>
	)
}

export default Related;