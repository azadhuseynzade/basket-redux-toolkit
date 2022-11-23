import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    cart: cartSlice,
  },
});

export default store;
