import React from "react";

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
