import { createSlice } from "@reduxjs/toolkit";

const topTitleSlice = createSlice({
  name: "TopTitle",
  initialState: { value: "이대윤 포트폴리오" },
  reducers: {
    changeTopTitle: (state, action) => {
      console.log("topTitleSlice-changeLang");
      if (action.payload === "changeLang") {
        state.value === "이대윤 포트폴리오"
          ? (state.value = "DAEYUN'S PORTFOLIO")
          : (state.value = "이대윤 포트폴리오");
      }
    },
  },
});

export default topTitleSlice;
export const { changeTopTitle } = topTitleSlice.actions;
