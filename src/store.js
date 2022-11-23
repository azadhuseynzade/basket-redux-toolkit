import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const reducer = combineReducers({
  cart: cartSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
