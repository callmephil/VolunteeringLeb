import React, { useState } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import CardPersonMissing from "../../Components/Cards/CardPersonMissing";
import FeedMedia from "../../Components/Feed/FeedMedia";
import CardAlert from "../../Components/Cards/CardAlert";

export default function HomePage() {
  const [key, setKey] = useState("home");
  return (
    <Row>
      <Col md={3} style={{ padding: "0" }}>
        <CardPersonMissing />
        <CardPersonMissing />
        <CardPersonMissing />
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
        <CardAlert />
      </Col>
    </Row>
  );
}
