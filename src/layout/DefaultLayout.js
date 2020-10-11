import React from "react";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header";
import Subscribe from "../components/Shared/Subscribe/Subscribe";
import "./DefaultLayout.css";

function DefaultLayout(props) {
  return (
    <div >
      <Header />

      <main>
        <div id="back-to-top-anchor"></div>
        {props.children}
      </main>
<Subscribe />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
