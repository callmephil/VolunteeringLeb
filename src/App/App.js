import React from "react";

import { Container } from "react-bootstrap";

import "../Layout/card.css";
import "../Layout/app.css";
import NavigationBar from "../Components/Navigation/NavigationBar";
import HomePage from "../Pages/Home/HomePage";
import NavigationFooter from "../Components/Navigation/NavigationFooter";
import MediaPage from "../Pages/Media/MediaPage";
import { Switch, Route } from "react-router-dom";

/* 1. Small screen problem padding */

function App() {
  return (
    <div style={{ backgroundColor: "#f5f7f8" }}>
      <NavigationBar />

      <Container fluid className="main-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/media" component={MediaPage} />
          <Route
            render={function () {
              return <p>Not found</p>;
            }}
          />
        </Switch>
      </Container>

      <NavigationFooter />
    </div>
  );
}

export default App;
