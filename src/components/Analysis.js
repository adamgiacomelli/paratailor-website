import React, { Component } from "react";
const ReactMarkdown = require("react-markdown");
import AnalysisText from "../text/analysisText.md";
import CardBox from "./common/CardBox";

export default class Analysis extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(AnalysisText)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;

    return (
      <CardBox title="Analysis">
        <ReactMarkdown source={markdown} />
      </CardBox>
    );
  }
}
