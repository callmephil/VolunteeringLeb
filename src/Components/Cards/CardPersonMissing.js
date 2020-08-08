import React from "react";
import { Card, Row, Container, Button, Col } from "react-bootstrap";
import { formatDistanceToNow } from 'date-fns'

export default function CardPersonMissing({ data, isGrid }) {
  
  const { fullName, img, description, location, phoneNbr, status, lastUpdate } = data;

  const DisplayViewAllButton = () => {
    if (!isGrid) {
      return (
        <div className="mt-2">
          <Button style={{ width: "100%" }} className="btn btn-warning">
            View All
          </Button>
        </div>
      );
    } else return <> </>;
  };

  return (
    <div style={{ paddingBottom: "15px" }}>
      <Card className="card-shadow">
        <Card.Img variant="top" src={img} />
        <Card.Header className=" text-align-center">MISSING: {fullName}</Card.Header>
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
          <small className="text-muted">Last updated {formatDistanceToNow(lastUpdate)} ago</small>
        </Card.Footer>
      </Card>
      <DisplayViewAllButton />
    </div>
  );
}

function CardPersonMissingList({ grid, data }) {

  if (data.length === 0) {
    return <div> Fix Empty List </div>;
  } else
    return data.map((cardInfo, key) => {
      if (grid) {
        return (
          <Col key={`person-missing-${key}`} md={4}>
            <CardPersonMissing  data={cardInfo} isGrid={true} />
          </Col>
        );
      } else {
        return <CardPersonMissing key={`person-missing-${key}`} data={cardInfo} isGrid={false} />;
      }
    });
}
