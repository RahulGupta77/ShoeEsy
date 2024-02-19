import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import navigationSlice from "./navigationSlice";
import userSlice from "./userSlice";

const persistConfig = {
  key: "root",
  varsion: 1,
  storage,
};

const reducer = combineReducers({
  navigation: navigationSlice,
  userDetails: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
