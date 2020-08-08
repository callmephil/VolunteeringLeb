import React from "react";
import { Card, Button } from "react-bootstrap";

function CardAlert({ data }) {
  const { type, header, title, text, button } = data;
  return (
    <div style={{ paddingBottom: "10px" }}>
      <Card bg={type} text={"white"} className="mb-2 card-shadow">
        <Card.Header>
          <span className="fal fa-exclamation-triangle" style={{ marginRight: "10px" }}></span>
          {header}
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
        text: "How-To",
        link: "/",
      },
    },
    {
      type: "danger",
      header: "Emergency",
      title: "O+ Blood Needed",
      text: "Blood Needed at hotel-dieu hospital",
      button: {
        text: "How-To",
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
