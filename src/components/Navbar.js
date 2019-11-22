import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import bgImage from "../assets/logo.png";

const LinkButton = ({ to, label }) => (
  <Nav.Link>
    <NavLink to={to}>{label}</NavLink>
  </Nav.Link>
);

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <div
            className="logo-img"
            style={{ "background-image": `url(${bgImage})` }}
          ></div>
          <NavLink to={"/"}>{"Paratailor"}</NavLink>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <LinkButton to="/about" label={"About"} />
          <LinkButton to="/download" label={"Download"} />
        </Nav>
      </Navbar>
    );
  }
}
