import React, { useState } from "react";
import { Container, Image, Tabs, Tab } from "react-bootstrap";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Contributors from "./Components/Contributors";

export default function AboutPage() {
  const [key, setKey] = useState("about");
  return (
    <Container fluid>
      <Image
        src="https://via.placeholder.com/1376x250"
        fluid
        width="1400"
        height="250"
        className="mb-2"
      />
      <Tabs
        className="mb-2 tab-sm d-flex justify-content-md-around"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}>
        <Tab eventKey="about" title="About Helb">
          <About />
          <div className="mt-2"> 
            <FAQ />
          </div>
        </Tab>
        <Tab eventKey="contrib" title="Contributors">
          <Contributors />
        </Tab>
      </Tabs>
    </Container>
  );
}
