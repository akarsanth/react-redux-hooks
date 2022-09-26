import { configureStore } from "@reduxjs/toolkit";

// reducers
import cartReducer from "./features/cart/cart-slice";
import orderListReducer from "./features/orderList/orderList-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orderList: orderListReducer,
  },
});

export default store;
