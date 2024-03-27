"user client";

import { NamedAPIResource } from "@/model/api/resource";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DexState {
    value: Array<NamedAPIResource>;
}

const initialState: DexState = { value: [] };

const dexSlice = createSlice({
    name: "dex",
    initialState,
    reducers: {
        addPokemon(state, action: PayloadAction<Array<NamedAPIResource>>) {
            state.value = state.value.concat(action.payload);
        },
    },
});

export const { addPokemon } = dexSlice.actions;
export default dexSlice.reducer;
