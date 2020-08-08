import React, { useState } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import CardPersonMissingList from "../../Components/Cards/CardPersonMissing";
import FeedMedia from "../../Components/Feed/FeedMedia";
import CardAlertList from "../../Components/Cards/CardAlert";

export default function MediaPage() {
  const [key, setKey] = useState("home");
  return (
    <Row>
      <Col md={3} style={{ padding: "0" }}>
        <CardPersonMissingList grid={false} />
      </Col>

      <Col md={7} style={{ padding: "0px 15px" }}>
        <Tabs
          className="pb-2"
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}>
          <Tab eventKey="home" title="Live Feed">
            <FeedMedia />
            <FeedMedia />
            <FeedMedia />
          </Tab>
          <Tab eventKey="profile" title="Events"></Tab>
          <Tab eventKey="contact" title="Contact" disabled></Tab>
        </Tabs>
      </Col>
      <Col md={2} style={{ padding: "0" }}>
        <CardAlertList />
      </Col>
    </Row>
  );
}
