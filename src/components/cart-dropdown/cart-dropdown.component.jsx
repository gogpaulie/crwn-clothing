import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButtom from '../custom-button/custom-button.component';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

export default CartDropdown;
