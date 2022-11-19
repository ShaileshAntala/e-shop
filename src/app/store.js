import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    authentication: authReducer,
    cart: cartReducer,
  },
});

export default store;
