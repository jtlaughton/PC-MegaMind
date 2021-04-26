import React from 'react'
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import './cart.css';

function cart() {
    return (
        <Link to= '/cart' class='cart-link'>
            <div class = 'cart_container'>
                <div class='cart_wrapper'>
                    <div class='cart_label'>
                        My Cart
                    </div>
                    <div class='cart_image'>
                        <AiIcons.AiOutlineShoppingCart size = {28}/>
                    </div>
                    <div class="cart_total">
                        Total: $1000
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default cart