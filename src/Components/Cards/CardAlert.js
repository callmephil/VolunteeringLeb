import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardAlert() {
//   const ColoredCards = () => {
//     return [
//         'Primary',
//         'Secondary',
//         'Success',
//         'Danger',
//         'Warning',
//         'Info',
//         'Light',
//         'Dark',
//       ].map((variant, idx) => (
       
//       ));
//   }


  return (
    <div style={{ paddingBottom: "10px" }}>
       <Card
          bg="danger"
          text={'white'}
          className="mb-2 card-shadow"
        >
          <Card.Header>
              <span className="fal fa-exclamation-triangle" style={{marginRight: "10px"}}></span>
              Emergency Header</Card.Header>
          <Card.Body>
            <Card.Title>O+ Blood Needed</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
              <Button style={{width: "100%"}} className="btn btn-warning"> How-To </Button>
          </Card.Footer>
        </Card>
    </div>
  );
}
