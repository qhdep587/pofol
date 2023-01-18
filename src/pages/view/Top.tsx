import st from "./../../app/page.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rs, ad } from "./../reduxItem/store";
import { batch } from "react-redux";
import { changeLang } from "./../reduxItem/langSlice";
import { changeTopTitle } from "../reduxItem/topTitleSlice";

const Top = () => {
  const lang = useSelector((state: rs) => {
    return state.lang.value;
  });
  const title = useSelector((state: rs) => {
    return state.topTitle.value;
  });

  const dispatch: ad = useDispatch();

  return (
    <div className={st.header}>
      {title}
      <button
        className={st.headerBtn}
        onClick={() => {
          batch(() => {
            dispatch(changeLang("changeLang"));
            dispatch(changeTopTitle("changeLang"));
          });
        }}
      >
        {lang}
      </button>
    </div>
  );
};

export default Top;
