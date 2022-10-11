import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import wishlistsclice from "./redux/wishlistSclice";
import { pokemonApi } from "./services/pokemonApi";


 export const store = configureStore({
    reducer: {
       wishlistReducers:wishlistsclice,
        [pokemonApi.reducerPath]:pokemonApi.reducer
     },
     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(pokemonApi.middleware)
})