import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import {
	CollectionItemContainer,
	ImageContainer,
	CollectionFooter,
	Button,
} from './collection-item.styles';

//import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<ImageContainer
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></ImageContainer>
			<CollectionFooter>
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</CollectionFooter>
			<Button className="custom-button" onClick={() => addItem(item)} inverted>
				Add to Cart
			</Button>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
