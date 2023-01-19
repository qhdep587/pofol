import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ad } from "./../reduxItem/store";
import { changeTopTitle } from "../reduxItem/topTitleSlice";

const langSlice = createSlice({
  name: "lang",
  initialState: { value: "Ko" },
  reducers: {
    changeLang: (state, action) => {
      console.log("langSlice-changeLang");
      if (action.payload === "changeLang") {
        state.value === "Ko" ? (state.value = "En") : (state.value = "Ko");
      }
    },
  },
});

export default langSlice;
export const { changeLang } = langSlice.actions;
