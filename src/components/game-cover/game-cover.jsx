import React from 'react';
import './game-cover.css'

const GameCover = ({image = ''}) => (
    <div className="game_cover" style={{backgroundImage: `url(${image})`}}/>
);

export { GameCover };