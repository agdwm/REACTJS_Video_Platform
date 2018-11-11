import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
	
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		author: props.author,
	// 	}
	// 	// this.handleClick = this.handleClick.bind(this); //-> Se puede sustitir por una Arrow function
	// }

	state = {
		author: this.props.author //this.state in ES7
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState({
			//author: 'Ricardo Celis'
		})
	}

	componentWillMount() {
		if (this.props.author === '') {
			this.setState({
				author: 'Anonymous author'
			})
		}
	}

	render() {
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
				</div>
				<h3 className="Media-title">{this.props.title}</h3>
				<p className="Media-author">{this.props.author}</p>
			</div>
		)
	}
}

Media.propTypes = {
	// boolean, number, object, func, array, symbol...
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;