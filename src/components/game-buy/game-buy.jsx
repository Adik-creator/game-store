import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './game-buy.css'
import {Button} from "../button";
import {deleteItemFromCard, setItemInCard} from "../../redux/card/reducer";


const GameBuy = ({game}) => {
    const dispatch = useDispatch()

    const items = useSelector(state => state.card.itemsInCard)
    const itemInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        itemInCart ? dispatch(deleteItemFromCard(game.id)) : dispatch(setItemInCard(game))
    }

    return (
        <div className="game-buy">
            <span className="game-buy_price">
                {game.price} $
            </span>
            <Button
                onClick={handleClick}
                type={itemInCart ? "secondary" : "primary"}
            >
                { itemInCart ? "Убрать из корзины" : "В корзину" }
            </Button>
        </div>
    );
};

export {GameBuy};