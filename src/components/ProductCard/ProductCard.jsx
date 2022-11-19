import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../app/features/cart/cartSlice";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import styles from "./ProductCard.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product, isCart }) {
  const dispatch = useDispatch();
  const itemsAddedToCart = useSelector((store) => store.cart.itemsAddedToCart);

  const itemExistsinCart = itemsAddedToCart.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt="green iguana"
        className={styles.card_image}
      />
      <CardContent className={styles.card_content}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {product.price} Rs
        </Typography>
      </CardContent>

      {!isCart && (
        <CardActions className={styles.card_actions}>
          {!itemExistsinCart ? (
            <Button aria-label="add to cart" onClick={handleAddToCart}>
              <AddShoppingCartIcon className={styles.cart_icon} /> Add To Cart
            </Button>
          ) : (
            <Button aria-label="add to cart" disabled>
              <AddShoppingCartIcon className={styles.cart_icon} /> Added To Cart
            </Button>
          )}
        </CardActions>
      )}

      {isCart && (
        <CardActions className={styles.card_actions}>
          <Button aria-label="add to cart" onClick={handleRemoveFromCart}>
            <RemoveShoppingCartOutlinedIcon className={styles.cart_icon} />{" "}
            Remove
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
