import React, { Component } from "react";
const ReactMarkdown = require("react-markdown");
import AboutText from "../text/aboutPageText.md";
import AuthorText from "../text/authorText.md";
import CardBox from "./common/CardBox";
import { NavLink } from "react-router-dom";
import { ButtonToolbar, Button } from "react-bootstrap";

export default class About extends Component {
  constructor() {
    super();
    this.state = { markdown: "", markdownAuthor: "" };
  }

  componentWillMount() {
    fetch(AboutText)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));

    fetch(AuthorText)
      .then(res => res.text())
      .then(text => this.setState({ markdownAuthor: text }));
  }

  render() {
    const { markdown, markdownAuthor } = this.state;

    return (
      <>
        <CardBox title="About">
          <ReactMarkdown source={markdown} />
          <ButtonToolbar>
            <Button variant="outline-primary">
              <NavLink to={"/download"}>Download</NavLink>
            </Button>
            <Button variant="outline-success">
              <NavLink to={"/manual"}>Manual</NavLink>
            </Button>
            <Button variant="outline-success">
              <NavLink to={"/analysis"}>How to use 3d analysis</NavLink>
            </Button>
          </ButtonToolbar>
          <ReactMarkdown source={markdown} />

          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/DRDmJKUL8rQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </CardBox>
        <CardBox title="Author">
          <ReactMarkdown source={markdownAuthor} />
        </CardBox>
      </>
    );
  }
}
