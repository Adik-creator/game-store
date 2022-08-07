import React from 'react';
import './game-genre.css'

function GameGenre({genre}) {
    return (
        <span className="game_genre">
            {genre}
        </span>
    );
}

export { GameGenre };