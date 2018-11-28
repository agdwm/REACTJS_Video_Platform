import React from 'react';
import PropTypes from 'prop-types';
import './search.css';

// function Search(props) {
// 	return (
// 		<form className=""></form>
// 	)
// }

const Search = (props) => (
	<form 
		className="Search"
		onSubmit={props.handleSubmit}
	>
		<input
			ref={props.setRef} //ref: store in react this html tag (input)
			type="text"
			placeholder="Busca tu video favorito"
			className="Search-input"
			name="search"
			//defaultValue='Luis Fonsi'
			value={props.value}
			onChange={props.handleChange}
		/>
	</form>
)


Search.propTypes = {
	handleSubmit: PropTypes.func,
	setRef: PropTypes.func,
	value: PropTypes.string,
	handleChange: PropTypes.func 
}

export default Search;