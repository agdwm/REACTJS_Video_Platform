import React from 'react';
import '../../src/general.css';
import '../../src/normalize.css';

function HomeLayout(props) {
	return (
		<section>
			{props.children}
		</section>
	)
}

export default HomeLayout;