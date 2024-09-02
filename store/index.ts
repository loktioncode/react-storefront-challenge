import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchProductsReducer from "@/slices/products";
import cartReducer from "@/slices/cartSlice";
import favoritesReducer from "@/slices/favoritesSlice"; 

const rootReducer = combineReducers({
  products: fetchProductsReducer,
  cart: cartReducer,
  favorites: favoritesReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


