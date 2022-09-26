import { useSelector } from "react-redux";

import classes from "./CartItems.module.css";
import CartItem from "./CartItem";

const CartItems = () => {
  const { cartItems, total } = useSelector((state) => state.cart);

  return (
    <div className={classes.box}>
      <h1>Shopping Cart</h1>

      {[...cartItems].length !== 0 ? (
        <div className={classes["cart-table"]}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {[...cartItems].map((item) => {
                return <CartItem item={{ ...item }} key={item.id} />;
              })}
            </tbody>
          </table>

          <p className={classes.total}>
            Total: <span>{`$${total.toFixed(2)}`}</span>
          </p>
        </div>
      ) : (
        <div className={classes["empty-cart-msg"]}>
          <p>Cart is empty!</p>
        </div>
      )}
    </div>
  );
};

export default CartItems;
