import React from "react";
import { Card, Button } from "react-bootstrap";

function CardAlert({ data }) {
  const { type, header, title, text, button } = data;
  return (
    <div style={{ paddingBottom: "10px" }}>
      <Card bg={type} text={"white"} className="mb-2 card-shadow">
        <Card.Header className="d-flex align-items-center">
          <i className="fal fa-exclamation-triangle mr-2"></i>
          <strong className="mr-auto">{header}</strong>
          <small>just now</small>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button style={{ width: "100%" }} className="btn btn-warning">
            {button.text}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default function CardAlertList() {
  const data = [
    {
      type: "danger",
      header: "Emergency",
      title: "O+ Blood Needed",
      text: "Blood Needed at hotel-dieu hospital",
      button: {
        text: "Contact",
        link: "/",
      },
    },
    {
      type: "dark",
      header: "Alert",
      title: "Need Volunteer",
      text: "NGO ... Looking for volunteer",
      button: {
        text: "Contact",
        link: "/",
      },
    },
  ];

  if (typeof data === "undefined" || data.length === 0) {
    return <div> Fix Empty List </div>;
  }

  return (
    <React.Fragment>
      {data.map((cardInfo, key) => (
        <CardAlert key={`alert-${key}`} data={cardInfo} />
      ))}
    </React.Fragment>
  );
}
