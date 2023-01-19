import st from "./../../app/page.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { rs } from "../reduxItem/store";

const TopTap = () => {
  const cateArray = useSelector((state: rs) => {
    return state.topTap.value;
  });

  const navRender = cateArray.map((item, idx) => {
    let navItem = "navItem" + idx;
    return (
      <div key={navItem} className={st.nav_item}>
        {item}&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    );
  });

  return <div className={st.nav}>{navRender}</div>;
};

export default TopTap;
