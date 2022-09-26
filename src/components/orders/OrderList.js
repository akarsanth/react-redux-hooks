import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./OrdersList.module.css";
import Order from "./Order";
import { listOrders } from "../../app/features/orderList/orderList-actions";

const OrderList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, orders } = useSelector((state) => state.orderList);

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !error) {
    content = (
      <div className={classes["orders-table"]}>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Is Paid?</th>
              <th>Is Delivered?</th>
              <th>Status</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return <Order order={{ ...order }} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={classes.box}>
      <h1>Orders List</h1>
      {content}
    </div>
  );
};

export default OrderList;
