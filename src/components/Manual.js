import React, { Component } from "react";
import { Card } from "react-bootstrap";
const ReactMarkdown = require("react-markdown");
import ManualText from "./manual.md";

export default class Manual extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(ManualText)
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
        </Card.Body>
      </Card>
    );
  }
}
