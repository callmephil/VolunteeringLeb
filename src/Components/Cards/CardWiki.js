import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function CardWiki() {
  return (
    <div style={{ paddingBottom: "15px" }}>
      <Card>
        <Card.Img variant="top" src="https://www.utsouthwestern.edu/covid-19/assets/how-to-wear-mask.jpg" />
        <Card.Body>
          <Card.Title>Corona: Wear Mask</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
