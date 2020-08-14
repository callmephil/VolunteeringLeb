import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import InstagramEmbed from "react-instagram-embed";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { Tweet } from "react-twitter-widgets";
import List from "../../Components/List";
import InformationMessage from "../Components/InformationMessage";

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
        <FacebookProvider appId={REACT_APP_FB_ID || "1234567"}>
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

export default function SocialFeed() {
  // Todo save / load from database
  // Todo C.R.U.D form
  const data = [
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
      <List grid>
        {data && data.map((url, key) => <GetCardFromUrl key={key} url={url} />)}
      </List>
    </Fragment>
  );
}
