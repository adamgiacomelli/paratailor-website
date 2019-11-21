import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Downloads from "./components/Downloads";
import About from "./components/About";
import Manual from "./components/Manual";
import { Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Container className="root">
            <Row>
              <Col sm={12}>
                <Route path="/downloads">
                  <Downloads />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/manual">
                  <Manual />
                </Route>
              </Col>
            </Row>
          </Container>
        </Fragment>
      </Router>
    );
  }
}
