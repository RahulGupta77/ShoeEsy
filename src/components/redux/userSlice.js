import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    isLoggedIn: false,
    userInfo: {
      username: "",
      token: "",
      balance: 0,
    },
    cartItemsSize: 0,
    searchQueryText: "",
  },
  reducers: {
    toggleLoginStatus: (state, actions) => {
      state.isLoggedIn = actions.payload;
    },
    updateUserDetails: (state, actions) => {
      state.userInfo.username = actions.payload.username;
      state.userInfo.token = actions.payload.token;
      state.userInfo.balance = actions.payload.balance;
    },

    updateCartItemsSize: (state, actions) => {
      state.cartItemsSize = actions.payload;
    },

    updateSearchQueryText: (state, action) => {
      state.searchQueryText = action.payload;
    },

    clearUserDetails: (state) => {
      state.isLoggedIn = false;
      state.userInfo = {
        username: "",
        token: "",
        balance: 0,
      };
      state.cartItemsSize = 0;
      state.searchQueryText = "";
    },
  },
});

export const {
  toggleLoginStatus,
  updateUserDetails,
  updateCartItemsSize,
  updateSearchQueryText,
  clearUserDetails,
} = userSlice.actions;
export default userSlice.reducer;
