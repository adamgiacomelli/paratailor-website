import React, { Component } from "react";
import { Card } from "react-bootstrap";
const ReactMarkdown = require("react-markdown");
import giacoImage from "../assets/giaco1.png";
import AboutText from "./aboutText.md";

export default class About extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(AboutText)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;

    return (
      <Card>
        <Card.Body>
          <Card.Text>
            <ReactMarkdown source={markdown} />
          </Card.Text>
          <Card.Img variant="bottom" src={giacoImage} />
        </Card.Body>
      </Card>
    );
  }
}
