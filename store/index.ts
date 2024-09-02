import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import productsReducer from "@/slices/products";
import cartReducer from "@/slices/cartSlice";
import favoritesReducer from "@/slices/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
