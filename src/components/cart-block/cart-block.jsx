import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './cart-block.css'
import {BiCartAlt} from 'react-icons/bi'
import {CartMenu} from "../cart-menu";
import {calcTotalPrice} from "../utils";
import {ItemsInCart} from "../items-in-cart";

const CartBlock = () => {
    const items = useSelector(state => state.card.itemsInCard)
    const totalPrice = calcTotalPrice(items)

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt
                size={25}
                className="cart_block_icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? <span className="cart_block_total_price">{totalPrice} $</span> : null}
            {isCartMenuVisible ? <CartMenu items={items} onClick={() => null}/> : null}
        </div>
    );
};

export {CartBlock};