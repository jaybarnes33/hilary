import React from "react";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      fixed="top"
      className="d-inline-flex justify-content-center"
    >
      <Navbar.Brand>
        {" "}
        <i className="bi bi-heart-half">
          Covid 19 Medical Diagnosis / {window.location.pathname.split("/")}
        </i>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
