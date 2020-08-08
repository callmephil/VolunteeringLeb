import React from "react";
import { Card, ListGroup, ListGroupItem, CardGroup } from "react-bootstrap";

export default function CardNGO() {
  return (
    <div style={{ paddingBottom: "15px" }}>
      <Card>
        <Card.Img
          style={{ backgroundColor: "blue", padding: "30px"}}
          variant="top"
          src="https://offrejoie.org/wp-content/uploads/2020/07/cropped-small-logo@3x-1.png"
          width="90" height="180"
        />
          <Card.Header style={{textAlign: "center"}}>Offre joie</Card.Header>
        <Card.Body>
          <Card.Text>
            Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of
            young Red Cross volunteers worked together to help the injured. Alleviating human
            suffering transcended any differences between them.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Need Volunteer</ListGroupItem>
          <ListGroupItem>Need Donation</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://offrejoie.org/contact-us/">Volunteer</Card.Link>
          <Card.Link href="https://offrejoie.org/donate/">Donate</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
