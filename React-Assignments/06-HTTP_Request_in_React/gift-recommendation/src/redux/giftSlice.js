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
    try {
      const response = await getGiftRecommendation(payload);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const giftSlice = createSlice({
  name: "gift",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGiftRecommendation.pending]: (state) => {
      state.loading = true;
    },
    [fetchGiftRecommendation.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload?.data?.choices[0];
      state.error = null;
    },
    [fetchGiftRecommendation.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    },
  },
});

export const giftReducer = giftSlice.reducer;
