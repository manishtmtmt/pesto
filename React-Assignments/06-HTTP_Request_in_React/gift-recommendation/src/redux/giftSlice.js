import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getGiftRecommendation } from "./api";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export const fetchGiftRecommendation = createAsyncThunk(
  "gift/getRecommendation",
  async (payload) => {
    console.log("fetchGiftRecommendation triggered");
    try {
      const response = getGiftRecommendation(payload);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const giftSlice = createSlice({
  name: "gift",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchGiftRecommendation.pending,
        (state) => (state.loading = true)
      )
      .addCase(fetchGiftRecommendation.fulfilled, (state, action) => {
        console.log("action:", JSON.stringify(action));
        state.loading = false;
        state.data = action;
        state.error = null;
      })
      .addCase(fetchGiftRecommendation.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action;
      });
  },
});

export const giftReducer = giftSlice.reducer;
