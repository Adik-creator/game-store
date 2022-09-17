import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import './cart-block.css'
import {BiCartAlt} from 'react-icons/bi'
import {CartMenu} from "../cart-menu";
import {calcTotalPrice} from "../utils";
import {ItemsInCart} from "../items-in-cart";

const CartBlock = () => {
    const items = useSelector(state => state.card.itemsInCard)
    const totalPrice = calcTotalPrice(items)
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt
                size={25}
                className="cart_block_icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? <span className="cart_block_total_price">{totalPrice} $</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
        </div>
    );
};

export {CartBlock};