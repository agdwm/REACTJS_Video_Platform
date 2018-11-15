import React from 'react';
import './search.css';

// function Search(props) {
// 	return (
// 		<form className=""></form>
// 	)
// }

const Search = (props) => (
	<form className="Search">
		<input 
			type="text"
			placeholder="Busca tu video favorito"
			className="Search-input"
		/>
	</form>
)

export default Search;