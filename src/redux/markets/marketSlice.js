import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../App";
import axios from "axios";

const initialState = {
  coins: [],
  status: "idle",
  error: null,
};

const fetchMarkets = createAsyncThunk("marketSlice/fetchMarkets", async () => {
  const response = await axios.get(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
  );
  return response.data;
});

const marketSlice = createSlice({
  name: "markets",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMarkets.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMarkets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins = action.payload;
      })
      .addCase(fetchMarkets.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const selectAllCoins = (state) => state.markets.coins;
export const selectStatus = (state) => state.markets.status;
export const selectError = (state) => state.markets.error;

export default marketSlice.reducer;
export { fetchMarkets };
