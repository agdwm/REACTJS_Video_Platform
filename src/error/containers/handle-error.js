import * as Sentry from '@sentry/browser';
import React, { Component } from 'react';
import RegularError from '../components/regular-error';

const DSN = process.env.REACT_APP_SENTRY

Sentry.init({
	dsn: DSN
	//dsn: 'https://756a3ed9966c44f6a927e5d2fdc875bf@sentry.io/1322286'
});

class HandleError extends Component {
	
	state = {
		handleError: false,
	}

	componentDidCatch(err, errInfo) {
		//send to 'sentry' in order to monitorize an error in the App
		this.setState({
			handleError: true,
		});

		Sentry.withScope(scope => {
			Object.keys(errInfo).forEach(key => {
			  scope.setExtra(key, errInfo[key]);
			});
			Sentry.captureException(err);
		});
	}

	render() {
		if (this.state.handleError) {
			return (

				<RegularError/>
			)
		}
		return this.props.children
	}
}

export default HandleError;