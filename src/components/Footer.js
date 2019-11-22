import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const LinkButton = ({ to, label }) => (
  <Nav.Link>
    <NavLink to={to}>{label}</NavLink>
  </Nav.Link>
);

export default class Footer extends Component {
  render() {
    return (
      <Navbar fixed="bottom" className="footer">
        <p>
          Author - France Giacomelli, email me @
          <a href="mailto:giacomelli.france0@gmail.com">
            giacomelli.france0@gmail.com
          </a>
        </p>
      </Navbar>
    );
  }
}
