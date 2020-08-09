import React, { Fragment } from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import CardPersonMissingList from "../../../Components/Cards/CardPersonMissing";
import InformationMessage from "../Components/InformationMessage";

export default function ReportMissingTab() {
  return (
    <Fragment>
      <InformationMessage />
      <Row>
        <Col sm={8} md={10}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col sm={4} md={2} style={{ paddingLeft: "0" }}>
          <Button style={{ width: "100%" }} variant="outline-secondary">
            Add New
          </Button>
        </Col>

        <CardPersonMissingList grid={true} />
      </Row>
    </Fragment>
  );
}
