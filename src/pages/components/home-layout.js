import React from 'react';
import PropTypes from 'prop-types';
import './normalize.css';
import './general.css';
import './home-layout.css';

const HomeLayout = (props) => {
	return (
		<section className="HomeLayout">
			{props.children}
		</section>
	)
}

HomeLayout.propTypes = {
	children: PropTypes.node
}

export default HomeLayout;