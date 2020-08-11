import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import { formatDistanceToNow } from "date-fns";

export default function CardPersonMissing({ data, isLoading }) {
  const { fullName, photo, description, location, phoneNbr, status, lastUpdate } = data;

  return (
    <div style={{ paddingBottom: "15px" }}>
      <Card className="card-shadow">
        <Card.Img variant="top" src={photo} width="330" height="330" />
        <Card.Header className=" text-align-center">{fullName}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Container>
            <Row>
              <div>
                Contact: <span>{phoneNbr}</span>
              </div>
            </Row>
            <Row>
              <div>
                Status: <span>{status}</span>
              </div>
            </Row>
            <Row>
              <div>
                Last known location: <span>{location}</span>
              </div>
            </Row>
          </Container>
        </Card.Footer>
        <Card.Footer>
          <small className="text-muted">
            {isLoading ? `...updating...` : `Last updated ${formatDistanceToNow(lastUpdate)} ago`}
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}
