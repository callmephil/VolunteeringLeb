import React from "react";
import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";

function CardWiki({ data }) {
  const { imgSrc, title, text, notices, links } = data;
  return (
    <div style={{ paddingBottom: "15px" }}>
      <Card>
        <Card.Img variant="top" src={imgSrc} width="320" height="205" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {notices &&
            notices.map((notice, key) => (
              <ListGroupItem key={`notice-group-${title}-${key}`}>{notice}</ListGroupItem>
            ))}
        </ListGroup>
        <Card.Body>
          {links &&
            links.map((link, key) => (
              <Card.Link key={`notice-link-${title}-${key}`} href={link.src}>
                {link.reference}
              </Card.Link>
            ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default function CardWikiList({ grid }) {
  const data = [
    {
      imgSrc: "https://www.utsouthwestern.edu/covid-19/assets/how-to-wear-mask.jpg",
      title: "Corona: Wear Mask",
      text: `Some quick example text to build on the card title and make up the bulk of the card's
      content.`,
      notices: ["Wear Mask Correctly", "Keep Safe Distance (1m)", "Clean your hands often"],
      links: [
        {
          src: "#",
          reference: "wiki-how",
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
            <Col key={`wiki-card-${key}`} md={6} lg={4}>
              <CardWiki data={cardInfo} />
            </Col>
          );
        } else return <CardWiki key={`wiki-card-${key}`} data={cardInfo} />;
      })}
    </React.Fragment>
  );
}
