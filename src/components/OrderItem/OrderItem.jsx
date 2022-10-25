import React from 'react';
import {GameCover} from "../game-cover";
import {AiOutlineCloseCircle} from "react-icons/ai";

import './OrderItem.css'
import {useDispatch} from "react-redux";
import {deleteItemFromCard} from "../../redux/card/reducer";


const OrderItem = ({game}) => {

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteItemFromCard(game.id))
    }
    return (
        <div>
            <div className="order-item">
                <div className="order-item-cover">
                    <GameCover image={game.image}/>
                </div>
                <div className="order-page-title">
                    <span>{game.title}</span>
                    <div className="order-item-price">
                        <span>{game.price}$</span>
                        <AiOutlineCloseCircle
                            size={25}
                            className="cart-item-delete-icon"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export {OrderItem};