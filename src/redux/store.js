import { configureStore } from "@reduxjs/toolkit";
import exchangesReducer from "./markets/exchangesSlice";

const store = configureStore({
  reducer: {
    exchanges: exchangesReducer,
  },
});

export default store;
