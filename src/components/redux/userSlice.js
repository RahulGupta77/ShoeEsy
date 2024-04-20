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
    cartItemsSize : 0,
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

    updateCartItemsSize: (state, actions)=>{
      state.cartItemsSize = actions.payload;
    }
  },
});

export const { toggleLoginStatus, updateUserDetails, updateCartItemsSize } =
  userSlice.actions;
export default userSlice.reducer;
