import React from 'react';
import './checkout.style.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { selectCartTotal } from '../../redux/cart/cart.selector'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


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

            <div className="test-warning">
                *Please use the following test credit card payments*
                <br />
                4242 4242 4242 4242 - EXP: 01/20 -CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,

});

export default connect(mapStateToProps)(CheckoutPage);

