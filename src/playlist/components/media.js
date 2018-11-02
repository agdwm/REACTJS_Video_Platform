import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
	
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		author: props.author,
	// 	}
	// 	// this.handleClick = this.handleClick.bind(this); //-> Se puede sustitir por una Arrow function
	// }

	state = {
		author: this.props.author //Declarar el estado de un componente en ES7. Sin usar 'constructor'
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState({
			author: 'Ricardo Celis'
		})
	}

	render() {
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image" src={this.props.image} alt="" width="260" height="160"/>
				</div>
				<h3 className="Media-title">{this.props.title}</h3>
				<p className="Media-author">{this.state.author}</p>
			</div>
		)
	}
}

Media.propTypes = {
	// boolean, number, object, func, array, symbol...
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;