import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import fetchProductsReducer from "@/slices/products";
import cartReducer from "@/slices/cartSlice";
import { PersistPartial } from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products: fetchProductsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Adjust RootState to include PersistPartial
export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
export type AppDispatch = typeof store.dispatch;

