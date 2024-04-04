import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: null,
    error: false
}

export const Sneakers = createSlice({
    name: "sneakers",
    initialState,
    /*
    C'est ici que le "reducers" sont définis
    "Les reducers" sont des fonctions qui decrivent comment l'état de l'application change à des actions.
    Dans ce cas, trois "reducers" sont définis:
    FETCH_START, FETCH_SUCCES et FETCH_FAILURE
    */
    reducers: {
        FETCH_START: (draft) => {
            draft.loading = true
        },
        FETCH_SUCCES: (draft, actions) => {
            draft.loading = false
            draft.data = action.playload
        },
        FETCH_FAILURE: (draft) => {
            draft.loading = false
            draft.error = true
        }
    }

})
export const {
    FETCH_START,
    FETCH_SUCCES,
    FETCH_FAILURE
} = Sneakers.actions

export default Sneakers.reducer