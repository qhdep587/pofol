"use client"; // this is a client component

import React from "react";
import Content from "../pages/view/Content";
import { Provider } from "react-redux";
import store from "../pages/reduxItem/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}
