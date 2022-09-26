import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  orders: [],
};

const orderListSlice = createSlice({
  name: "orderListSlice",
  initialState,
  reducers: {
    orderListRequest(state) {
      state.isLoading = true;
    },

    orderListSuccess(state, action) {
      state.isLoading = false;
      state.orders = action.payload;
      state.error = null;
    },

    orderListFail(state, action) {
      state.isLoading = false;
      state.orders = [];
      state.error = action.payload;
    },
  },
});

export const { orderListRequest, orderListSuccess, orderListFail } =
  orderListSlice.actions;

export default orderListSlice.reducer;
