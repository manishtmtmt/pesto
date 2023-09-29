import { configureStore } from "@reduxjs/toolkit";

import { giftReducer } from "./giftSlice";

export const store = configureStore({
  reducer: {
    gift: giftReducer,
  },
});
