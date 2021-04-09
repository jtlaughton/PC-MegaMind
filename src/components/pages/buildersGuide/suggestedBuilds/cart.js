import React from 'react'
import * as AiIcons from 'react-icons/ai';
import './cart.css';

function cart() {
    return (
        <div class = 'cart_container'>
            <div class='cart_wrapper'>
                <div class='cart_label'>
                    My Cart
                </div>
                <div class='cart_image'>
                    <AiIcons.AiOutlineShoppingCart/>;
                </div>
                <div class="cart_total">
                    Total: $1000
                </div>
            </div>
        </div>
    )
}

export default cart
