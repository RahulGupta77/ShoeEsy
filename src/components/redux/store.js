import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    userDetails: userSlice,
  },
});

export default store;
