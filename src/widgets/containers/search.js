import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
	
	state = {
		value: 'Luis Fonsi'
	}

	setInputRef = el => { //el = the input element
		this.input = el;
	}

	handleSubmit = e => {
		e.preventDefault();
	}

	handleInputChange = e => {
		e.preventDefault();
		this.setState({
			value: this.input.value
			//value: event.target.value.replace(' ', '-')
		})
	}

	render() {
		return (
			<Search 
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleInputChange}
				value={this.state.value}
			/>
		)
	}
}

export default SearchContainer;