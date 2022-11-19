import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../app/features/auth/authSlice";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsInCart = useSelector((store) => store.cart.itemsInCartCount);

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/dashboard/cart");
  };

  return (
    <Box component="nav">
      <AppBar position="static" className={styles.appbar}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
            onClick={() => navigate("/dashboard")}
            className={styles.brand_name}
          >
            E-Shop
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box display="flex" className={styles.navbar_left}>
            {localStorage.getItem("token") && (
              <IconButton
                className={styles.cart}
                size="large"
                color="inherit"
                onClick={handleCartClick}
              >
                <Badge badgeContent={itemsInCart} color="error">
                  <ShoppingCartCheckoutIcon size={24} />
                </Badge>
              </IconButton>
            )}
            {localStorage.getItem("token") && (
              <Button
                className={styles.logout_button}
                color="inherit"
                onClick={handleLogOut}
                size="large"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
