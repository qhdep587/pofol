import st from "./../../app/page.module.css";
import Top from "./Top";
import React from "react";
import TopTap from "./TopTap";
import Image from "next/image";

const Content = () => {
  return (
    <div className={st.background_box}>
      <Image
        width={100}
        height={100}
        className={st.background_img}
        src="/images/gray.jpg"
        alt="background"
      />
      <div className={st.background_blur}>
        <Top />
        <TopTap />
      </div>
    </div>
  );
};

export default Content;
