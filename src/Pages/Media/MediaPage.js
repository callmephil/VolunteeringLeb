import React, { useState, Fragment } from "react";
import { Tabs, Tab } from "react-bootstrap";
import FeedMedia from "../../Components/Feed/FeedMedia";

import SocialFeed from "./SocialFeed";

export default function MediaPage() {
  const [key, setKey] = useState("social");
  return (
    <Fragment>
      <Tabs
        className="pb-2 tab-sm d-flex justify-content-md-start"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}>
        <Tab eventKey="live" title="Live Feed">
          <FeedMedia />
          <FeedMedia />
          <FeedMedia />
        </Tab>
        <Tab eventKey="social" title="Social Feed">
          <SocialFeed />
        </Tab>
      </Tabs>
    </Fragment>
  );
}
