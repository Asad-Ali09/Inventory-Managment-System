import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../App";
import axios from "axios";

const initialState = {
  coins: [],
  status: "idle",
  error: null,
  fetchRequest: false,
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
  reducers: {
    setFetchRequest: (state, action) => {
      state.fetchRequest = action.payload;
    },
    setStatusIdle: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMarkets.pending, (state, action) => {
        state.status = "loading";
        state.fetchRequest = true;
      })
      .addCase(fetchMarkets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins = action.payload;
      })
      .addCase(fetchMarkets.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
        state.fetchRequest = false;
      });
  },
});

export const selectAllCoins = (state) => state.markets.coins;
export const selectStatus = (state) => state.markets.status;
export const selectError = (state) => state.markets.error;
export const fetchReqSelector = (state) => state.markets.fetchRequest;

export default marketSlice.reducer;
export const { setFetchRequest, setStatusIdle } = marketSlice.actions;
export { fetchMarkets };
