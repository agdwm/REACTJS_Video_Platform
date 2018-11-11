import React from 'react';
import './normalize.css';
import './general.css';
import './home-layout.css';

function HomeLayout(props) {
	return (
		<section className="HomeLayout">
			{props.children}
		</section>
	)
}

export default HomeLayout;