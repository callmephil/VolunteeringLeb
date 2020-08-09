import React from "react";
import { Card, Accordion } from "react-bootstrap";

export default function FAQ() {
  return (
    <Card className="text-left">
      <Card.Body>
        <Card.Title>Frequently Asked Question</Card.Title>
        <Card.Text>Some Text.</Card.Text>
      </Card.Body>
      <Card.Body>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Question 1.
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Question 2.
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
