import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../app/features/cart/cartSlice";
import { useNavigate, Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import styles from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(
    (store) => store.authentication.isUserLoggedIn
  );

  const itemsAddedToCart = useSelector((store) => store.cart.itemsAddedToCart);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  if (itemsAddedToCart.length === 0) {
    return (
        <section className={styles.empty_cart}>
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">0</span> items in
            shopping cart
          </p>
          <Link to="../dashboard">
            <IconButton className={styles.go_back_empty}>
              <ArrowBackOutlinedIcon />
              Continue shopping
            </IconButton>
          </Link>
        </section>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.cart_header}>
          <h1>Shopping Cart</h1>
          <h4>
            Total items in cart <strong>{itemsAddedToCart.length}</strong>
          </h4>
        </div>
        <Link to="../dashboard" className={styles.go_back}>
          <IconButton className={styles.go_back}>
            <ArrowBackOutlinedIcon />
            Continue shopping
          </IconButton>
        </Link>
      </header>
      <section className={styles.cart_section}>
        <div className={styles.cart_items}>
          <Scrollbars>
            <div>
              {itemsAddedToCart.map((item) => {
                return (
                  <>
                    <div className={styles.items_info}>
                      <div className={styles.items_img}>
                        <img
                          className={styles.product_img}
                          src={item.image}
                          alt={item.name}
                        />
                      </div>

                      <div className={styles.name}>
                        <h2>{item.name}</h2>
                      </div>

                      <div className={styles.price}>
                        <h3>{item.price}₹</h3>
                      </div>
                      <div className={styles.remove_button}>
                        <Button
                          aria-label="add to cart"
                          onClick={() => dispatch(removeFromCart(item))}
                          className={styles.remove_button}
                        >
                          <RemoveShoppingCartOutlinedIcon
                            className={styles.cart_icon}
                          />{" "}
                          Remove
                        </Button>
                      </div>
                    </div>

                    <hr />
                  </>
                );
              })}
            </div>
          </Scrollbars>
        </div>
      </section>
    </>
  );
};

export default Cart;
