import React, { Component } from "react";
const ReactMarkdown = require("react-markdown");
import { Col, Row, Container } from "react-bootstrap";

import bgImage from "../assets/home_bg.png";

import AboutText from "../text/aboutText.md";
import DownloadText from "../text/downloadText.md";
import CardBox from "./common/CardBox";
import NavLink from "react-bootstrap/NavLink";

export default class Home extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(AboutText)
      .then(res => res.text())
      .then(text => this.setState({ markdownAbout: text }));

    fetch(DownloadText)
      .then(res => res.text())
      .then(text => this.setState({ markdownDownload: text }));
  }

  render() {
    const { markdownAbout, markdownDownload } = this.state;

    return (
      <>
        <div
          className="home-img-wrapper"
          style={{ "background-image": `url(${bgImage})` }}
        >
          <h1 className="title">Paratailor PT9</h1>
          <h2 className="subtitle">
            Paraglider construction, design and aerodynamics
          </h2>
        </div>
        <Container className="root">
          <Row>
            <Col sm={12} md={6}>
              <CardBox title={<NavLink to={"/about"}>{"About"}</NavLink>}>
                <ReactMarkdown source={markdownAbout} />
              </CardBox>
            </Col>
            <Col sm={12} md={6}>
              <CardBox title={<NavLink to={"/download"}>{"Download"}</NavLink>}>
                <ReactMarkdown source={markdownDownload} />
              </CardBox>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
