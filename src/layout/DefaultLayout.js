import React from "react";
import Footer from "../components/Navigation/Footer/Footer";
import Header from "../components/Navigation/Header";

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
