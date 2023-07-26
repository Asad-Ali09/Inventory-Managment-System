import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../App";
import axios from "axios";

const initialState = {
  exchanges: [],
  status: "idle",
  error: null,
};

const fetchExchanges = createAsyncThunk(
  "exchanges/fetchExchanges",
  async () => {
    const response = await axios.get(
      `${BASE_URL}/exchanges?per_page=20&page=1`
    );
    return response.data;
  }
);

const exchangeSlice = createSlice({
  name: "exchanges",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchExchanges.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchExchanges.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.exchanges = action.payload;
      })
      .addCase(fetchExchanges.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllExcahnges = (state) => state.exchanges.exchanges;
export const selectStatus = (state) => state.exchanges.status;
export const selectError = (state) => state.exchanges.error;

export default exchangeSlice.reducer;
export { fetchExchanges };

// const export {} = exchangeSlice.actions;
