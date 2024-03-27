import { configureStore } from "@reduxjs/toolkit";
import dexReducer from "@/lib/redux/features/pokedex";
import pokemonReducer from "@/lib/redux/features/pokemon";

export const makeStore = () => {
    return configureStore({
        reducer: { dex: dexReducer, pokemon: pokemonReducer },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
