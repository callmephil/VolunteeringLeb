import React from "react";
import { Table, Card } from "react-bootstrap";

export default function Contributors() {
  return (
    <Card className="text-left">
      <Card.Body>
        <Card.Title>Contributors</Card.Title>
        <Card.Text>Some Text.</Card.Text>
      </Card.Body>
      <Card.Body>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Phil</td>
              <td>Dev</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jad</td>
              <td>Dev</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gaby</td>
              <td>Dev</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dummy</td>
              <td>Volunteer</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
