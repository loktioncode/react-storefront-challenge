// store.ts

import { configureStore } from "@reduxjs/toolkit";
import fetchProductsReducer  from "../slices/products";

export const store = configureStore({
  reducer: {
    products: fetchProductsReducer, 
  },
});

// Exporting types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
