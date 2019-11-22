import React, { Component } from "react";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
const ReactMarkdown = require("react-markdown");
import DownloadText from "../text/downloadPageText.md";
import CardBox from "./common/CardBox";

export default class Download extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(DownloadText)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;

    return (
      <CardBox title="Download">
        <ButtonToolbar>
          <Button variant="outline-primary" href="/download/Ins_PT9Win.zip">
            Windows zip
          </Button>
          <Button variant="outline-secondary">
            Coming soon: Linux version
          </Button>
        </ButtonToolbar>
        <ReactMarkdown source={markdown} />
      </CardBox>
    );
  }
}
