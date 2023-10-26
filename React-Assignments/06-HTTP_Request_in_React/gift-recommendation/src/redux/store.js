import { configureStore } from "@reduxjs/toolkit";

import { giftReducer } from "./giftSlice";

const store = configureStore({
  reducer: {
    gift: giftReducer,
  },
});

export default store;

// [{text: "↵↵1. Cricket Bat: A", index: 0, logprobs: null, finish_reason: "length"}]