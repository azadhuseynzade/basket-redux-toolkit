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
      console.log(action.payload, "action.payload");
      state.cart.push(action.payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
