import React from "react";
import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";

function CardNGO({ data }) {
  const { logo, backgroundColor, header, description, links } = data;
  return (
    <div style={{ paddingBottom: "15px" }}>
      <Card className="mb-2 card-shadow">
        <Card.Img
          style={{ backgroundColor, padding: "1.5rem" }}
          variant="top"
          src={logo}
          width="320"
          height="205"
        />
        <Card.Header style={{ textAlign: "center" }}>{header}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {links.map((link) => (
            <ListGroupItem>
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

export default function CardNGOList({ grid = true }) {
  const data = [
    {
      logo: "https://offrejoie.org/wp-content/uploads/2020/07/cropped-small-logo@3x-1.png",
      backgroundColor: "#165b99",
      header: "Offre joie",
      description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of
      young Red Cross volunteers worked together to help the injured. Alleviating human
      suffering transcended any differences between them.`,
      links: [
        {
          text: "Donate",
          src: "https://offrejoie.org/donate/",
        },
        {
          text: "Volunteer",
          src: "https://offrejoie.org/contact-us/",
        },
      ],
    },
  ];

  if (typeof data === "undefined" || data.length === 0) {
    return <div> Fix Empty List </div>;
  }

  return (
    <React.Fragment>
      {data.map((cardInfo, key) => {
        if (grid) {
          return (
            <Col key={`ngo-card-${key}`} md={4}>
              <CardNGO data={cardInfo} />
            </Col>
          );
        } else return <CardNGO key={`ngo-card-${key}`} data={cardInfo} />;
      })}
    </React.Fragment>
  );
}
