import { createSlice } from "@reduxjs/toolkit";

const topTapSlice = createSlice({
  name: "topTap",
  initialState: { value: ["소개", "프로젝트", "커리어", "연락처"] },
  reducers: {
    changeTopTap: (state, action) => {
      console.log("topTitleSlice-changeLang");
      if (action.payload === "changeLang") {
        state.value[0] === "소개"
          ? (state.value = ["AboutMe", "Career", "Project", "Contact"])
          : (state.value = ["소개", "프로젝트", "커리어", "연락처"]);
      }
    },
  },
});

export default topTapSlice;
export const { changeTopTap } = topTapSlice.actions;
