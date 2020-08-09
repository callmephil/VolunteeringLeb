import React, { useState } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import CardAlertList from "../../Components/Cards/CardAlert";
import PrecautionsTab from "./Tabs/Precautions.tab";
import ReportMissingTab from "./Tabs/ReportMissing.tab";
import InstitutionsTab from "./Tabs/Institutions.tab";
import FeedTab from "./Tabs/Feed.tab";

export default function HomaPage() {
  const [key, setKey] = useState("feed");

  return (
    <Row>
      <Col sm={9} className="no-padding">
        <Tabs
          className="card-shadow tab-sm d-flex justify-content-md-start"
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}>
          <Tab eventKey="feed" title="Feed">
            <FeedTab />
          </Tab>
          <Tab eventKey="precautions" title="Precautions">
            <PrecautionsTab />
          </Tab>
          <Tab eventKey="missing" title="Missing">
            <ReportMissingTab />
          </Tab>
          <Tab eventKey="institutions" title="NGO(s)">
            <InstitutionsTab />
          </Tab>
        </Tabs>
      </Col>
      <Col sm={3}>
        <CardAlertList />
      </Col>
    </Row>
  );
}
