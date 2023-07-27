import { configureStore } from "@reduxjs/toolkit";
import exchangesReducer from "./markets/exchangesSlice";
import marketReducer from "./markets/marketSlice";
import coinReducer from "./markets/coinSlice";

const store = configureStore({
  reducer: {
    exchanges: exchangesReducer,
    markets: marketReducer,
    coin: coinReducer,
  },
});

export default store;
