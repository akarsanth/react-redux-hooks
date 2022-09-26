import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    total: 0,
  },

  reducers: {
    calculateQtyAndTotal(state) {
      state.totalQuantity = state.cartItems.reduce(
        (acc, item) => acc + item.qty,
        0
      );

      state.total = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
    },

    addItemToCart(state, action) {
      const addedItem = action.payload;

      // checking if item already exists
      // set in the console if necessary
      const existsItem = state.cartItems.find(
        (item) => item.id === addedItem.id
      );

      if (existsItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === existsItem.id ? addedItem : item
        );
      } else {
        state.cartItems = [...state.cartItems, addedItem];
      }

      cartSlice.caseReducers.calculateQtyAndTotal(state);
    },

    removeItemFromCart(state, action) {
      const id = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      cartSlice.caseReducers.calculateQtyAndTotal(state);
    },

    decreaseItemQuantity(state, action) {
      const id = action.payload;

      state.cartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          item.qty -= 1;
        }
        return item;
      });

      cartSlice.caseReducers.calculateQtyAndTotal(state);
    },

    increaseItemQuantity(state, action) {
      const id = action.payload;

      state.cartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
        return item;
      });

      cartSlice.caseReducers.calculateQtyAndTotal(state);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
