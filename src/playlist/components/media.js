import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.handleClick = this.handleClick.bind(this);
	// }

	handleClick = (e) => {
		e.preventDefault();
		console.log(this.props.title);
	}

	render() {
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image" src={this.props.image} alt="" width="260" height="160"/>
				</div>
				<h3 className="Media-title">{this.props.title}</h3>
				<p className="Media-author">{this.props.author}</p>
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