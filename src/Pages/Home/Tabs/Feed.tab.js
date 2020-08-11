import React, { Fragment } from "react";
import { Col, Card, Row } from "react-bootstrap";
import InformationMessage from "../Components/InformationMessage";
import InstagramEmbed from "react-instagram-embed";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { Tweet } from "react-twitter-widgets";

const { REACT_APP_FB_ID } = process.env;

const GetCardFromUrl = ({ url }) => {
  const extractTwitterIdFromUrl = (url) => {
    if (typeof url !== "string" || url === "") {
      return;
    }
    return url.substr(url.lastIndexOf("s/") + 2, url.length);
  };

  const getTypeFromUrl = (url) => {
    let _type = "unknown";
    if (typeof url === "string" && url !== "") {
      const types = ["twitter", "facebook", "instagram", "reddit"];
      for (const type of types) {
        if (url.includes(type)) {
          _type = type;
        } else continue;
      }
    }
    return _type;
  };

  const type = getTypeFromUrl(url);

  switch (type) {
    case "facebook":
      return (
        <FacebookProvider appId={REACT_APP_FB_ID}>
          <EmbeddedPost href={url} width="500" />
        </FacebookProvider>
      );
    case "instagram":
      return (
        <InstagramEmbed
          url={url}
          // maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      );
    case "twitter":
      const tweetId = extractTwitterIdFromUrl(url);
      return <Tweet tweetId={tweetId} />;
    case "reddit":
      return <Card></Card>;
    default:
      return <Card></Card>;
  }
};

export default function FeedTab() {
  // Todo save / load from database
  // Todo C.R.U.D form
  const list = [
    "https://www.instagram.com/p/CDq5WKLn1E8/",
    "https://twitter.com/AnisTabet23/status/1292343373353885698",
    "https://www.instagram.com/p/CDq23qEHJw3/",
    "https://www.instagram.com/p/CDpJPgpnrTr/",
    "https://twitter.com/AnisTabet23/status/1293114912672231424",
    "https://www.facebook.com/watch/?v=766457464182345",
  ];

  return (
    <Fragment>
      <InformationMessage />

      {/* <Container> */}
      <Row>
        {list &&
          list.map((url, key) => (
            <Col key={`feed-${key}`}>
              <GetCardFromUrl url={url} />
            </Col>
          ))}
      </Row>
      {/* </Container> */}
    </Fragment>
  );
}
