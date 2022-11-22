import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: cartSlice,
  },
});
export default store;
