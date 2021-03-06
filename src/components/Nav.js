import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar expand="lg" collapseOnSelect fixed="top" className="">
      <Navbar.Brand>
        <Link to="/">
          <i className="fas fa-head-side-mask mr-5"></i>
          Covid 19 Medical Diagnosis / {window.location.pathname.split("/")}
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
