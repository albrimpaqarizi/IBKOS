import React from "react";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header";
import "./DefaultLayout.css";

function DefaultLayout(props) {
  return (
    <div className="">
      <Header />

      <main className="">
        <div id="back-to-top-anchor"></div>
        {props.children}
      </main>

      <Footer />
    </div>
  );
}

export default DefaultLayout;
