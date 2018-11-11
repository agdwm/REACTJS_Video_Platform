import React from 'react';
import './normalize.css';
import './general.css';

function HomeLayout(props) {
	console.log('children', props.children);
	return (
		<section>
			Layout
			{props.children}
		</section>
	)
}

export default HomeLayout;