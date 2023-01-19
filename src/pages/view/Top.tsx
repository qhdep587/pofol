import st from "./../../app/page.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rs, ad } from "./../reduxItem/store";
import { batch } from "react-redux";
import { changeLang } from "./../reduxItem/langSlice";
import { changeTopTitle } from "../reduxItem/topTitleSlice";
import { changeTopTap } from "../reduxItem/topTapSilice";

const Top = () => {
  const lang = useSelector((state: rs) => {
    return state.lang.value;
  });
  const title = useSelector((state: rs) => {
    return state.topTitle.value;
  });

  const titleMap = title.map((item, idx) => {
    let textKey = "headerTitle" + idx;

    if (idx === 0) {
      return <text key={textKey}>{item}&nbsp;&nbsp;</text>;
    } else if (idx === 1) {
      return lang !== "Ko" ? (
        <text className={st.headerText} key={textKey}>
          {item}
        </text>
      ) : (
        <text key={textKey}>{item}</text>
      );
    } else {
      return lang !== "En" ? (
        <text key={textKey} className={st.headerText}>
          {item}&nbsp;
        </text>
      ) : (
        <text key={textKey}>{item}</text>
      );
    }
  });

  const dispatch: ad = useDispatch();

  return (
    <div className={st.header}>
      {titleMap}
      <button
        className={st.headerBtn}
        onClick={() => {
          batch(() => {
            dispatch(changeLang("changeLang"));
            dispatch(changeTopTitle("changeLang"));
            dispatch(changeTopTap("changeLang"));
          });
        }}
      >
        {lang}
      </button>
    </div>
  );
};

export default Top;
