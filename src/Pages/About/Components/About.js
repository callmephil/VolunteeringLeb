import React from "react";
import { Card } from "react-bootstrap";

export default function About() {
  return (
    <Card className="text-left">
      <Card.Body>
        <Card.Title>About Helb</Card.Title>
        <Card.Text>
          Helb is a collaborative website that aims to collect and display all the resources shared
          across social media, spreadsheet, instagram, twitter and facebook post. Including but not
          only the list of NGO(s), fund raising and any other form of usefull information that will
          help during the crisis of beirut, lebanon post date of 04.08.2020.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
