import {configureStore} from "@reduxjs/toolkit";
import cardSlice from './card/reducer'

export const store = configureStore({
    reducer: {card: cardSlice}
})