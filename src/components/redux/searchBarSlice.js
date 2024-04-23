import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchbar",
  initialState: {},
  reducers: {
   
    cacheResults: (state, action) => {
     
      state = {
        ...state,
        ...action.payload,
      };

      return state;
    },
  },
});

export const { cacheResults } = searchBarSlice.actions;
export default searchBarSlice.reducer;
