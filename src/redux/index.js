import {configureStore} from "@reduxjs/toolkit";
import cardSlice from './card/reducer'
import gamesSlice from './games/reducer'

export const store = configureStore({
    reducer: {
        card: cardSlice,
        games: gamesSlice,
    },

})