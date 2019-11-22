import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Download from "./components/Download";
import About from "./components/About";
import Manual from "./components/Manual";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Analysis from "./components/Analysis";

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
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/download">
                  <Download />
                </Route>
                <Route path="/manual">
                  <Manual />
                </Route>
                <Route path="/analysis">
                  <Analysis />
                </Route>
              </Col>
            </Row>
          </Container>
        </Fragment>
        <Footer />
      </Router>
    );
  }
}
