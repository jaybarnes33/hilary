import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="app">{children}</div>

      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
};

export default Layout;
