import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class CardBox extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <Card className="cardbox">
        <Card.Body>
          <Card.Title className="cardbox-title">{title}</Card.Title>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
