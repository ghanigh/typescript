import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
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
    
}

})