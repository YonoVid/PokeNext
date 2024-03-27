"user client";

import { Pokemon } from "@/model/api/pokemon";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
    value: Partial<Pokemon>;
}

const initialState: PokemonState = { value: {} };

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        updatePokemon(state, action: PayloadAction<Partial<Pokemon>>) {
            state.value = action.payload;
        },
    },
});

export const { updatePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
