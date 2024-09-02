import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  items: number[];
}

const initialState: FavoritesState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter(id => id !== action.payload);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

