import {
  orderListRequest,
  orderListSuccess,
  orderListFail,
} from "./orderList-slice";

import { getOrders } from "../../../lib/api";

export const listOrders = () => {
  return async (dispatch) => {
    try {
      dispatch(orderListRequest());

      const orders = await getOrders();

      dispatch(orderListSuccess(orders));
    } catch (error) {
      dispatch(orderListFail("Orders could not be loaded. Try Again!"));
    }
  };
};
