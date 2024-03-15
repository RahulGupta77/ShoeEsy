import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "productFilter",
  initialState: {
    categoryAndBrandFilter: [],
    finalPrice: [500, 7000],
    currentRating: null,
    brandAccordianState: [true, true],
    sortBy: "recommended",
  },
  reducers: {
    clearAll: (state) => {
      const {
        categoryAndBrandFilter,
        finalPrice,
        currentRating,
        sortBy,
      } = state;

      if (
        categoryAndBrandFilter.length === 0 &&
        currentRating === null &&
        sortBy === "recommended" &&
        finalPrice[0] === 500 &&
        finalPrice[1] === 7000
      ) {
        return;
      }

      state.categoryAndBrandFilter = [];
      state.finalPrice = [500, 7000];
      state.currentRating = null;
      state.brandAccordianState = [true, true];
      state.sortBy = "recommended";
    },

    updateCategoryBrandFilter: (state, action) => {
      const updatedCategory = [...state.categoryAndBrandFilter];

      const newFilter = action.payload;
      if (updatedCategory.indexOf(newFilter) !== -1) {
        updatedCategory.splice(updatedCategory.indexOf(newFilter), 1);
      } else {
        updatedCategory.push(newFilter);
      }
      state.categoryAndBrandFilter = updatedCategory;
    },

    updatePriceFilter: (state, action) => {
      state.finalPrice = [...action.payload];
    },

    updateCurrentRating: (state, action) => {
      state.currentRating = action.payload;
    },

    updateBrandAccordianState: (state, action) => {
      const updatedAccordianState = [...state.brandAccordianState];
      updatedAccordianState[action.payload[0]] = action.payload[1];
      state.brandAccordianState = updatedAccordianState;
    },

    updateSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  clearAll,
  updatePriceFilter,
  updateCurrentRating,
  updateCategoryBrandFilter,
  updateBrandAccordianState,
  updateSortBy,
} = filterSlice.actions;
export default filterSlice.reducer;
