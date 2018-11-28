import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

const Title = (props) => {
	return (
		<div className="Title">
			<h2>{props.title}</h2>
		</div>
	)
}

Title.propTypes = {
	title: PropTypes.string
}

export default Title;