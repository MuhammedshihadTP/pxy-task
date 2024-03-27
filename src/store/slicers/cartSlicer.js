import { createSlice } from "@reduxjs/toolkit";
// Create a slice for the cart
const cart = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    // Handle adding a product to the cart
    handleSelected: (state, action) => {
      state.cart.push({
        ...action.payload,
        count: 1,
        total: action.payload.price,
      });
    },

    // Handle incrementing the quantity of a product in the cart
    increment: (state, action) => {
      const prodcutId = action.payload;
      state.cart.forEach((item) => {
        if (item.id === prodcutId) {
          item.count++;
          item.total = item.count * item.price;
        }
      });
    },
    // Handle decrementing the quantity of a product in the cart
    decrement: (state, action) => {
      const prodcutId = action.payload;
      state.cart.forEach((item) => {
        if (item.id === prodcutId) {
          item.count--;
          item.total = item.count * item.price;
        }
      });
    },

    // Handle deleting a product from the cart
    deleteCartItem: (state, action) => {
      const prodcutId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== prodcutId);
    },
  },
});

export const { handleSelected, increment, decrement, deleteCartItem } =
  cart.actions;
export default cart.reducer;
