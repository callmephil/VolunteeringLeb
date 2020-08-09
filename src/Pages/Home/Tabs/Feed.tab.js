import React, { Fragment } from "react";
import { Col, Card, Row } from "react-bootstrap";
import InformationMessage from "../Components/InformationMessage";
import InstagramEmbed from "react-instagram-embed";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { TwitterTweetEmbed } from "react-twitter-embed";

const GetCardFromUrl = ({ url, type }) => {
  const SocialFeedCard = () => {
    switch (type) {
      case "facebook":
        return (
          <FacebookProvider appId="123456789">
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
        return <TwitterTweetEmbed tweetId={url} />;
      case "reddit":
        return <Card></Card>;
      default:
        return <Card></Card>;
    }
  };

  // analyse url
  // deconstruct
  // pass it to socialFeedCard
  // display card

  return (
    <Col>
      <SocialFeedCard />
    </Col>
  );
};

export default function FeedTab() {
  return (
    <Fragment>
      <InformationMessage />

      {/* <Container> */}
      <Row>
        <GetCardFromUrl type={"instagram"} url={"https://www.instagram.com/p/CDq5WKLn1E8/"} />
        <GetCardFromUrl type={"twitter"} url={"1292343373353885698"} />
        {/* <GetCardFromUrl type={"twitter"} url={"1292343373353885698"} /> */}
        <GetCardFromUrl type={"instagram"} url={"https://www.instagram.com/p/CDq23qEHJw3/"} />
        <GetCardFromUrl type={"instagram"} url={"https://www.instagram.com/p/CDpJPgpnrTr/"} />
        <GetCardFromUrl type={"twitter"} url={"1292343373353885698"} />
      </Row>
      {/* </Container> */}
    </Fragment>
  );
}
