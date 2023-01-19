import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./langSlice";
import topTitleSlice from "./topTitleSlice";
import topTapSlice from "./topTapSilice";

const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
    topTitle: topTitleSlice.reducer,
    topTap: topTapSlice.reducer,
  },
});

export type ad = typeof store.dispatch;
export type rs = ReturnType<typeof store.getState>;
export default store;
