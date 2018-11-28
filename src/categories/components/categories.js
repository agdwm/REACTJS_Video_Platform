import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';

const Categories = (props) => {
	return (
		<div className="Categories">
		<Search />
			{
				props.categories.map((item) => {
					return (
						<Category 
							key={item.id} 
							{...item}
							handleOpenModal={props.handleOpenModal}
						/>
					)
				})
			}
		</div>
	)
}

Categories.propTypes = {
	handleOpenModal: PropTypes.func.isRequired,
}

export default Categories;