import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCartCount: 0,
  itemsAddedToCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.itemsInCartCount++;
      state.itemsAddedToCart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      if (state.itemsInCartCount > 0) {
        state.itemsInCartCount--;
        state.itemsAddedToCart = state.itemsAddedToCart.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
