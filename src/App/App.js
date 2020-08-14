import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import "../Layout/layout.scss";

import NavigationBar from "../Components/Navigation/NavigationBar";
import NavigationFooter from "../Components/Navigation/NavigationFooter";
// import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/About/AboutPage";
import UserPage from "../Pages/User/UserPage";
import MediaPage from "../Pages/Media/MediaPage";
import CardAlertList from "../Components/Cards/CardAlert";
import PrecautionsPage from "../Pages/Precautions/Precautions";
import InstitutionsPage from "../Pages/Institutions/Institutions";
import ReportMissingPage from "../Pages/Missing/ReportMissing";

/* 1. Small screen problem padding */

function App() {
  return (
    <div style={{ backgroundColor: "#f5f7f8" }}>
      <NavigationBar />

      <Container fluid className="main-container">
        <Row>
          <Col md={8} lg={9} xl={10} >
            <Switch>
              <Route exact path="/" component={AboutPage} />
              <Route exact path="/feed" component={MediaPage} />
              <Route exact path="/missing" component={ReportMissingPage} />
              <Route exact path="/ngo" component={InstitutionsPage} />
              <Route exact path="/precautions" component={PrecautionsPage} />
              <Route exact path="/user" component={UserPage} />
              <Route
                render={function () {
                  return <p>Not found</p>;
                }}
              />
            </Switch>
          </Col>
          <Col md={4} lg={3} xl={2}>
            <CardAlertList />
          </Col>
        </Row>
      </Container>

      <NavigationFooter />
    </div>
  );
}

export default App;
