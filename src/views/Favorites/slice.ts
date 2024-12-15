import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FavoriteState {
  ids: string[]
}

const initialState: FavoriteState = {
    ids: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<string>) => {
      const foundValue = state.ids.find((el) => el === action.payload)
      if(!foundValue)
      {
        state.ids = [...state.ids, action.payload] 
      }
    },
    deleteFavorites: (state, action: PayloadAction<string>) => {
        const filtered = state.ids.filter((el) => el !== action.payload) 
        state.ids = [...filtered] 
    },
  },
})
