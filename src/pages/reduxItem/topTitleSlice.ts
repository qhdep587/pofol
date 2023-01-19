import { createSlice } from "@reduxjs/toolkit";

const topTitleSlice = createSlice({
  name: "topTitle",
  initialState: { value: ["이대윤", "포트", "폴리오"] },
  reducers: {
    changeTopTitle: (state, action) => {
      console.log("topTitleSlice-changeLang");
      if (action.payload === "changeLang") {
        state.value[0] === "이대윤"
          ? (state.value = ["DAEYUN", "PORT", "FOLIO"])
          : (state.value = ["이대윤", "포트", "폴리오"]);
      }
    },
  },
});

export default topTitleSlice;
export const { changeTopTitle } = topTitleSlice.actions;
