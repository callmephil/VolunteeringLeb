import React from "react";
import { Card, Row, Container, Button } from "react-bootstrap";

export default function CardPersonMissing() {
  return (
    <div style={{ paddingBottom: "15px" }}>
      <Card className="card-shadow">
        <Card.Img variant="top" src="https://www.w3schools.com/w3images/avatar1.png" />
        <Card.Header className=" text-align-center">MISSING: FirstName - LastName</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Container>
            <Row>
              <div>
                Last known location: <span>Gemeyze</span>
              </div>
            </Row>
            <Row>
              <div>
                Contact: <span>01234567</span>
              </div>
            </Row>
            <Row>
              <div>
                Status: <span>In progress</span>
              </div>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
      <div className="mt-2">
        <Button style={{width: "100%" }} className="btn btn-warning">View All</Button>
      </div>
    </div>
  );
}
