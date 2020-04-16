import React from 'react';
import './checkout.style.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { selectCartTotal } from '../../redux/cart/cart.selector'


const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>product</span>
                </div>
                <div className="header-block">
                    <span>description</span>
                </div>
                <div className="header-block">
                    <span>quantity</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className="total">
                TOTAL: ${total}
            </div>
            <CustomButton>pay</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,

});

export default connect(mapStateToProps)(CheckoutPage);

