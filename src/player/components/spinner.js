import React from "react";
import PropTypes from 'prop-types';
import "./spinner.css";

const Spinner = (props) => {
	if (!props.active) return null
	return (
		<div className="Spinner">
			<span>Cargando...</span>
		</div>
	);
}

Spinner.propTypes = {
	active: PropTypes.bool
}

export default Spinner;
