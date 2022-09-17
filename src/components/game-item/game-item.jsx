import React from 'react';
import './game-item.css'
import {GameCover} from "../game-cover";
import {GameBuy} from "../game-buy";
import {GameGenre} from "../game-genre";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../redux/games/reducer";

const GameItem = ({game}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`)

    }
    return (
        <div className="game-item" onClick={handleClick}>
            <GameCover image={game.image}/>
            <div className="game_item_details">
                <span className="game_item_title">{game.title}</span>
                <div className="game_item_genre">
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
                    }
                </div>
                <div className="game_item_buy">
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
};

export {GameItem};