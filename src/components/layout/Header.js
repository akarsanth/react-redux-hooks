import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import Container from "./Container";
import classes from "./Header.module.css";

const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <div className={classes.header}>
      <Container>
        <nav className={classes.nav}>
          <Link to="/home">
            <h1>Shop</h1>
          </Link>

          <ul className={classes["nav-links"]}>
            <li>
              <NavLink
                to="home"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="orders"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="cart"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Cart <span className={classes.qty}>{totalQuantity}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
