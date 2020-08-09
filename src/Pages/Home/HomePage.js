import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button, Tabs, Tab } from "react-bootstrap";
import CardNGOList from "../../Components/Cards/CardNGO";
import InformationMessage from "./Components/InformationMessage";
import CardPersonMissing from "../../Components/Cards/CardPersonMissing";
import CardAlertList from "../../Components/Cards/CardAlert";
import CardWikiList from "../../Components/Cards/CardWiki";
import { useMissingPeople } from "../../DB/missingPeople";
import List from "../../Components/List";
import MissingPersonForm from "../../Components/Forms/MissinPersonForm";

function ReportMissing() {
  
  const missingPeople = useMissingPeople()

  return (
    <Container style={{ padding: "0" }}>
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
        <List grid={true}>
        { missingPeople.map(( data, { id, dirty } ) => <CardPersonMissing key={id} isLoading={dirty} data={data} /> )
        }
        </List>
      </Row>
      <Row>
        <Col>
        <MissingPersonForm/>
        </Col>
      </Row>
    </Container>
  );
}

function PrecautionCards() {
  return (
    <Container style={{ padding: "0" }}>
      <InformationMessage />
      <Row>
        <CardWikiList grid={true} />
      </Row>
    </Container>
  );
}

function TabNGO() {
  return (
    <Container style={{ padding: "0" }}>
      <InformationMessage />
      <Row>
        <CardNGOList grid={true} />
      </Row>
    </Container>
  );
}

export default function HomaPage() {
  const [key, setKey] = useState("precautions");

  return (
    <Row>
      <Col sm={9} className="no-padding">
        <Tabs
          className="card-shadow tab-sm d-flex justify-content-md-start"
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}>
          <Tab eventKey="precautions" title="Precautions">
            <PrecautionCards />
          </Tab>
          <Tab eventKey="report" title="Missing">
            <ReportMissing />
          </Tab>
          <Tab eventKey="ngo" title="NGO(s)">
            <TabNGO />
          </Tab>
        </Tabs>
      </Col>
      <Col sm={3}>
        <CardAlertList />
      </Col>
    </Row>
  );
}
