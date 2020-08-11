import React from "react";
import { Card, Accordion } from "react-bootstrap";

export default function FAQ() {
  return (
    <Card className="text-left">
      <Card.Body>
        <Card.Title>F.A.Q</Card.Title>
        <Card.Text>Here are some information to help us.</Card.Text>
      </Card.Body>
      <Card.Body>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Can I Contribute? How?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Yes! Kindly Login through our portal, while in your profile page you will see a
                "Submit Content" button. provide us with an url and a description. We will then
                display it on helb.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Do you provide other type of information?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Yes! Any Organization can contact us in case of an emergency. We will display an
                alert with the information on the right side of every page (on the bottom in case of
                mobile screen)
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
