import "./App.css";
import LeftMenu from "./layout/LeftMenu";
import MainComp from "./layout/MainComp";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  function cursor(e) {
    if (document.querySelector(".cursor").style.left === "0px") {
      document.querySelector(".cursor").style.opacity = 0;
    } else if (document.querySelector(".cursor").style.top === "0px") {
      document.querySelector(".cursor").style.opacity = 0;
    } else {
      document.querySelector(".cursor").style.opacity = 0.7;
    }
    document.querySelector(".cursor").style.left = e.pageX + "px";
    document.querySelector(".cursor").style.top =
      e.pageY - window.scrollY + "px";
  }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="mainBackground">
        {/* <div className="widthView">
          <div className="widthView-sub">모바일 가로모드는 지원하지 않습니다.</div>
        </div> */}
        <div className="mainBackgroundBlur container">
          <div className="cursor"></div>
          <LeftMenu />
          <MainComp />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
