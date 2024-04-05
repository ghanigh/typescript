import { RootState } from "../interfaces/sneakers"

export const allSneakers = (state: RootState) => {
return state.sneakers.data

}