import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function CardNGO({ data, key }) {
  const { logo, backgroundColor, header, description, links } = data;
  return (
    <div key={`NGO-CARD-${key}`} className="mb-3" >
      <Card className="mb-2 card-shadow">
        <Card.Img
          style={{ backgroundColor, padding: "2.5rem" }}
          variant="top"
          src={logo}
          width="320"
          height="205"
        />
        <Card.Header className="text-center">{header}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {links && links.map((link, key) => (
            <ListGroupItem key={`ngo-group-${key}`}>
              <Card.Link target="_blank" href={link.src}>
                {link.text}
              </Card.Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}