import React from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux';
import { clearItemInCart, removeItem, addItem } from '../../redux/cart/cart.action';


const CheckoutItem = ({ cartItem, clearItem, decreaseQuantity, increaseQuantity }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item' />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increaseQuantity(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemInCart(item)),
    decreaseQuantity: item => dispatch(removeItem(item)),
    increaseQuantity: item => dispatch(addItem(item))

});

export default connect(null, mapDispatchToProps)(CheckoutItem);