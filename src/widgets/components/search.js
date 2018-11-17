import React from 'react';
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

export default Search;