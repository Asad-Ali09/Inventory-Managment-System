import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../App";
import axios from "axios";

const initialState = {
  coin: {},
  status: "idle",
  error: null,
};

const fetchSingleCoin = createAsyncThunk(
  "coinSlice/fetchCoin",
  async (coinID) => {
    const URL = `${BASE_URL}/coins/${coinID}`;
    const response = await axios.get(URL);
    return response.data;
  }
);

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSingleCoin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleCoin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coin = action.payload;
      })
      .addCase(fetchSingleCoin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default coinSlice.reducer;
export const selectCoin = (state) => state.coin.coin;
export const selectStatus = (state) => state.coin.status;
export const selectError = (state) => state.coin.error;

export { fetchSingleCoin };
