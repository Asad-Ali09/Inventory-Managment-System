import { configureStore } from "@reduxjs/toolkit";
import exchangesReducer from "./markets/exchangesSlice";
import marketReducer from "./markets/marketSlice";

const store = configureStore({
  reducer: {
    exchanges: exchangesReducer,
    markets: marketReducer,
  },
});

export default store;
