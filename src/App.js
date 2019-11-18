import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Downloads from "./components/Downloads";
import About from "./components/About";
import { Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Container>
            <Row>
              <Col sm={12}>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/downloads">
                  <Downloads />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Col>
            </Row>
          </Container>
        </Fragment>
      </Router>
    );
  }
}
