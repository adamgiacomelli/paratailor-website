import React, { Component } from "react";
const ReactMarkdown = require("react-markdown");
import { Col, Card, Jumbotron } from "react-bootstrap";

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
        <Jumbotron>
          <ReactMarkdown source={markdownHeader} />
        </Jumbotron>
        <h1>{"What is new"}</h1>
        <Card>
          <Card.Body>
            <Card.Text>
              <ReactMarkdown source={markdownNews} />
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
