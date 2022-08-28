import React from 'react';
import './GameTitle.css'

const GameTitle = ({game}) => {
    return (
        <div className="game-title">
            <span>{game.title}</span>
            <div className="game-title-price">
                <span>{game.price} $</span>
            </div>
        </div>
    );
};

export { GameTitle };