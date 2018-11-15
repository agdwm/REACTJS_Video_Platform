import React, { Component } from 'react';
import RegularError from '../components/regular-error';
import * as Sentry from '@sentry/browser';

Sentry.init({
	dsn: process.env.SENTRY_DSN
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