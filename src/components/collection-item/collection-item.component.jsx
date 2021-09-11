import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

import CustomButtom from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButtom onClick={() => addCartItem(item)} inverted>
        ADD TO CART
      </CustomButtom>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
