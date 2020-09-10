import React from "react";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header";

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div id="back-to-top-anchor"></div>
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
