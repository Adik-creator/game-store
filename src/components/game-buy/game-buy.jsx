import React from 'react';
import './game-buy.css'
import {Button} from "../button";

const GameBuy = ({game}) => {
    return (
        <div className="game-buy">
            <span className="game-buy_price">
                {Math.round(game.price / 80)} $
            </span>
            <Button
                onClick={() => null}
                type="primary"
            >
                В корзину
            </Button>
        </div>
    );
};

export {GameBuy};