import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./CartItem.module.css";
import {
  removeItemFromCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../app/features/cart/cart-slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const decreaseQtyHandler = () => {
    dispatch(decreaseItemQuantity(item.id));
  };

  const increaseQtyHandler = () => {
    dispatch(increaseItemQuantity(item.id));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <tr>
      <td>
        <div className={classes["product-info"]}>
          <button className={classes["btn-remove"]} onClick={removeItemHandler}>
            Remove
          </button>
          <Link to={`/product/${item.id}`}>
            <img
              alt={item.title}
              src={item.image}
              className={classes["product-img"]}
            />
          </Link>
          <Link to={`/product/${item.id}`}>
            <p>{item.title}</p>
          </Link>
        </div>
      </td>
      <td>{`$${item.price.toFixed(2)}`}</td>
      <td>
        <div className="qty-updown">
          <button
            className="btn-qty"
            disabled={item.qty === 1}
            onClick={decreaseQtyHandler}
          >
            -
          </button>
          <input
            className="qty-input"
            type="number"
            value={item.qty}
            onChange={() => {}}
            min="1"
          />
          <button className="btn-qty" onClick={increaseQtyHandler}>
            +
          </button>
        </div>
      </td>
      <td>{`$${(item.price * item.qty).toFixed(2)}`}</td>
    </tr>
  );
};

export default CartItem;
