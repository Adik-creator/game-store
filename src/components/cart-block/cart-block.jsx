import React from 'react';

import './cart-block.css'
import {BiCartAlt} from 'react-icons/bi'

const CartBlock = () => {
    return (
        <div className="cart-block">
            <BiCartAlt size={25} className="cart_block_icon"/>
            <span className="cart_block_total_price">price $</span>
        </div>
    );
};

export {CartBlock};