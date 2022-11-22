import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      const deleted = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cart = deleted;
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
