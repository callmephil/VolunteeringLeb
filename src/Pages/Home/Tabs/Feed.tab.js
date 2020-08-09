import React, { Fragment } from "react";
import { CardColumns } from "react-bootstrap";
import InformationMessage from "../Components/InformationMessage";
import InstagramEmbed from "react-instagram-embed";

export default function FeedTab() {
  return (
    <Fragment>
      <InformationMessage />

      <CardColumns>
        <InstagramEmbed
          url="https://www.instagram.com/p/CDq5WKLn1E8/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CDq23qEHJw3/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CDpJPgpnrTr/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </CardColumns>
    </Fragment>
  );
}
