import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const LinkButton = ({ to, label }) => (
  <Nav.Link>
    <NavLink to={to}>{label}</NavLink>
  </Nav.Link>
);

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">Paratailor</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkButton to="/downloads" label={"Downloads"} />
          <LinkButton to="/about" label={"About Me"} />
        </Nav>
      </Navbar>
    );
  }
}
