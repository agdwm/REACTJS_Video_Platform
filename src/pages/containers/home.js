import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Related from '../../related/components/related';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {

	state = {
		modalVisible: false,
	}
	//receive the Media props
	handleOpenModal = (media) => {
		this.setState({
			modalVisible: true,
			media
		})
	}

	handleCloseModal = (e) => {
		e.preventDefault();
		this.setState({
			modalVisible: false
		})
	}

	render() {
		return (
			<HandleError>
				<HomeLayout>
					<Related
						myPlaylist={this.props.data.myPlaylist}
						friendsPlaylist={this.props.data.friendsPlaylist}
						/>
					<Categories
						categories={this.props.data.categories}
						handleOpenModal={this.handleOpenModal}
					/>
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal}>
								<VideoPlayer 
									autoplay
									src={this.state.media.src}
									title={this.state.media.title}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
}

export default Home;