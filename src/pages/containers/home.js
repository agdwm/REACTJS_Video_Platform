import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Related from '../components/related.js';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import * as Sentry from '@sentry/browser';

Sentry.init({
	dsn: process.env.SENTRY_DSN
});

class Home extends Component {

	state = {
		modalVisible: false,
		handleError: false
	}

	handleOpenModal = () => {
		this.setState({
			modalVisible: true
		})
	}

	handleCloseModal = (e) => {
		e.preventDefault();
		this.setState({
			modalVisible: false
		})
	}

	componentDidCatch(error, errorInfo) {
		//send to 'sentry' in order to monitorize it
		this.setState({
			handleError: true
		});
		Sentry.withScope(scope => {
			Object.keys(errorInfo).forEach(key => {
			  scope.setExtra(key, errorInfo[key]);
			});
			Sentry.captureException(error);
		});
	}

	render() {
		if (this.state.handleError) {
			return (
				<p>
					<a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
				</p>
			)
		}
		return (
			<HomeLayout>
				<Related />
				<Categories 
					categories={this.props.data.categories}
					handleOpenModal={this.handleOpenModal}
				/>
				{
					this.state.modalVisible &&
					<ModalContainer>
						<Modal handleClick={this.handleCloseModal}>
							<h1>Esto es un portal</h1>
						</Modal>
					</ModalContainer>
				}
			</HomeLayout>
		)
	}
}

export default Home;