import React, { Component } from "react";
const ReactMarkdown = require("react-markdown");
import { Col, Card, Jumbotron, Row, Container } from "react-bootstrap";

import bgImage from "../assets/home_bg.png";

import NewsPost from "./NewsPost";
import NewsText from "./newsText.md";
import HeaderText from "./headerText.md";

export default class Home extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(NewsText)
      .then(res => res.text())
      .then(text => this.setState({ markdownNews: text }));

    fetch(HeaderText)
      .then(res => res.text())
      .then(text => this.setState({ markdownHeader: text }));
  }

  render() {
    const { markdownNews, markdownHeader } = this.state;

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
              <Jumbotron>
                <h1>News</h1>
                <ReactMarkdown source={markdownNews} />
              </Jumbotron>
            </Col>
            <Col sm={12} md={6}>
              <Jumbotron>
                <ReactMarkdown source={markdownHeader} />
              </Jumbotron>
            </Col>
          </Row>
        </Container>

        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/DRDmJKUL8rQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </>
    );
  }
}
