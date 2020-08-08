import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button, Tabs, Tab } from "react-bootstrap";
import CardNGOList from "../../Components/Cards/CardNGO";
import InformationMessage from "./Components/InformationMessage";
import CardPersonMissingList from "../../Components/Cards/CardPersonMissing";
import CardAlertList from "../../Components/Cards/CardAlert";
import CardWikiList from "../../Components/Cards/CardWiki";

function ReportMissing() {
  return (
    <Container style={{padding: "0"}}>
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
    </Container>
  );
}

function PrecautionCards() {
  return (
    <Container style={{padding: "0"}}>
      <InformationMessage />
      <Row>
        <CardWikiList grid={true} />
      </Row>
    </Container>
  );
}

function TabNGO() {
  return (    
  <Container style={{padding: "0"}}>
      <InformationMessage />
      <Row>
        <CardNGOList grid={true} />
      </Row>
    </Container>
  );
}

export default function HomaPage() {
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
            <CardAlertList />
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
