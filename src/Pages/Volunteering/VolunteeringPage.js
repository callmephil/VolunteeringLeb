import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  InputGroup,
  FormControl,
  Button,
  Tabs,
  Tab,
} from "react-bootstrap";
import CardAlert from "../../Components/Cards/CardAlert";
import CardPersonMissing from "../../Components/Cards/CardPersonMissing";
import CardWiki from "../../Components/Cards/CardWiki";
import CardNGO from "../../Components/Cards/CardNGO";

function InformationMessage() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="warning">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit. Cras mattis consectetur purus sit amet fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-info">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

function ReportMissing() {
  return (
    <>
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
        <Col sm={4} md={2} style={{paddingLeft: "0" }}>
          <Button style={{ width: "100%" }} variant="outline-secondary">
            Add New
          </Button>
        </Col>

        <Col md={4}>
          <CardPersonMissing />
        </Col>
        <Col md={4}>
          <CardPersonMissing />
        </Col>
        <Col md={4}>
          <CardPersonMissing />
        </Col>
      </Row>
    </>
  );
}

function PrecautionCards() {
  return (
    <>
      <InformationMessage />
      <Row>
        {/* <Col sm={10}>
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
        </Col> */}
        <Col md={6} lg={4}>
          <CardWiki />
        </Col>
        <Col md={6} lg={4}>
          <CardWiki />
        </Col>
        <Col md={6} lg={4}>
          <CardWiki />
        </Col>
        <Col md={6} lg={4}>
          <CardWiki />
        </Col>
      </Row>
    </>
  );
}

function TabNGO() {
    return (
        <>
        <InformationMessage />
        <Row>
          <Col md={4}>
            <CardNGO />
          </Col>
          <Col md={4}>
            <CardNGO />
          </Col>
          <Col md={4}>
            <CardNGO />
          </Col>
          <Col md={4}>
            <CardNGO />
          </Col>
        </Row>
      </>
    )
}

export default function VolunteeringPage() {
  const [key, setKey] = useState("home");

  return (
      <Row>
        <Col sm={9}>
          <Container>
            <Tabs
              className="pb-2"
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}>
              <Tab eventKey="home" title="Precautions">
                <PrecautionCards />
              </Tab>
              <Tab eventKey="profile" title="Missing">
                <ReportMissing />
              </Tab>
              <Tab eventKey="contact" title="Trusted NGO">
                <TabNGO />
              </Tab>
            </Tabs>
          </Container>
        </Col>
        <Col sm={3}>
          <Container>
            <Row>
              <CardAlert />
              <CardAlert />
              <CardAlert />
              <CardAlert />
            </Row>
          </Container>
        </Col>
      </Row>
  );
}
