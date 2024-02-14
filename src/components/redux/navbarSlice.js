import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    currentRoute: "./" + window.location.href.split("/").pop(),
  },
  reducers: {
    getCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
      console.log(action.payload);
    },
  },
});

export const { getCurrentRoute } = navbarSlice.actions;
export default navbarSlice.reducer;
