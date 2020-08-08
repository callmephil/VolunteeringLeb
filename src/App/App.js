import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab, Navbar, NavbarBrand, Button } from "react-bootstrap";
import CardPersonMissing from "../Components/Cards/CardPersonMissing";
import FeedMedia from "../Components/Feed/FeedMedia";
import CardAlert from "../Components/Cards/CardAlert";

import "../Layout/card.css";
import "../Layout/app.css";
import NavigationBar from "../Components/Navigation/NavigationBar";
import VolunteeringPage from "../Pages/Volunteering/VolunteeringPage";
import NavigationFooter from "../Components/Navigation/NavigationFooter";

/* 1. Small screen problem padding */

function App() {
  const [key, setKey] = useState("home");

  return (
    <div style={{ backgroundColor: "#f5f7f8" }}>
      <NavigationBar />


      <Container fluid className="main-container">
      <VolunteeringPage />
        {/* <Row>
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
        </Row> */}
      </Container>

      <NavigationFooter />
    </div>
  );
}

export default App;
