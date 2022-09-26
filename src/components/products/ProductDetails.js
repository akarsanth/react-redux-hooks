import React, { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./ProductDetails.module.css";
import { addItemToCart } from "../../app/features/cart/cart-slice";

const ProductDetails = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQty((prevQty) => prevQty - 1);
  };

  const addToCartHandler = () => {
    dispatch(addItemToCart({ ...product, qty }));
  };

  return (
    <div className={classes["product-details"]}>
      <img src={product.image} alt={product.title} />

      <div className={classes.details}>
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>
        <p>$ {product.price}</p>

        <div className="add-to-cart-box">
          <p className="qty-label">Quantity:</p>
          <div className="qty-updown">
            <button
              className="btn-qty"
              disabled={qty === 1}
              onClick={decreaseQty}
            >
              -
            </button>
            <input
              className="qty-input"
              type="number"
              value={qty}
              onChange={() => {}}
              min="1"
            />
            <button className="btn-qty" onClick={increaseQty}>
              +
            </button>
          </div>
          <button className="btn" onClick={addToCartHandler}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
