import React from 'react';
import './normalize.css';
import './general.css';

function HomeLayout(props) {
	return (
		<section>
			{props.children}
		</section>
	)
}

export default HomeLayout;