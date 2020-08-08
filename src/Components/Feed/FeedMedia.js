import React from "react";
import { Media } from "react-bootstrap";

export default function FeedMedia() {
  return (
    <div className="pb-3">
      <Media className="card-shadow bg-white">
        <Media.Body style={{ padding: "10px 10px" }}>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
            in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}
