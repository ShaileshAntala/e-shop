import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isUserLoggedIn = true;
      localStorage.setItem("token", "user is logged in");
    },
    logOut: (state) => {
      state.isUserLoggedIn = false;
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
