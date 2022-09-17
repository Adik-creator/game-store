import React from 'react';
// import {useParams} from "react-router";
import {useSelector} from "react-redux";
import './GamePage.css'
import {GameCover} from "../../components/game-cover";
import {GameGenre} from "../../components/game-genre";
import {GameBuy} from "../../components/game-buy";

const GamePage = () => {

    // const {title} = useParams()
    const game = useSelector(state => state.games.currentGame)

    if (!game) return null
    return (
        <div className="game-page">
            <h1 className="game-page-title">{game.title}</h1>
            <div className="game-page-content">
                <div className="game-page-left">
                    <iframe
                        width="90%"
                        height="400px"
                        src={game.video}
                        title="Youtube video player"
                        frameBorder="0"
                    >
                    </iframe>
                </div>
                <div className="game-page-right">
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text">Популиарные метки этого продукта:</p>
                    {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
                    <div className="game-page-buy-game">
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {GamePage};