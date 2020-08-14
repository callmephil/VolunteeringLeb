import React, { Fragment } from "react";
import InformationMessage from "../Components/InformationMessage";
import List from "../../Components/List";
import CardNGO from "../../Components/Cards/CardNGO";

const cardsDefaultSizes = { sm: 0, md: 6, lg: 4, xl: 3 }

export default function InstitutionsPage() {
  const data = [
    {
      logo: "https://offrejoie.org/wp-content/uploads/2020/07/cropped-small-logo@3x-1.png",
      backgroundColor: "#165b99",
      header: "Offre joie",
      description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of
      young Red Cross volunteers worked together to help the injured. Alleviating human
      suffering transcended any differences between them.`,
      links: [
        {
          text: "Donate",
          src: "https://offrejoie.org/donate/",
        },
        {
          text: "Volunteer",
          src: "https://offrejoie.org/contact-us/",
        },
      ],
    },
    {
      logo: "https://offrejoie.org/wp-content/uploads/2020/07/cropped-small-logo@3x-1.png",
      backgroundColor: "#165b99",
      header: "Offre joie",
      description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of
      young Red Cross volunteers worked together to help the injured. Alleviating human
      suffering transcended any differences between them.`,
      links: [
        {
          text: "Donate",
          src: "https://offrejoie.org/donate/",
        },
        {
          text: "Volunteer",
          src: "https://offrejoie.org/contact-us/",
        },
      ],
    },
    {
      logo: "https://offrejoie.org/wp-content/uploads/2020/07/cropped-small-logo@3x-1.png",
      backgroundColor: "#165b99",
      header: "Offre joie",
      description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of
      young Red Cross volunteers worked together to help the injured. Alleviating human
      suffering transcended any differences between them.`,
      links: [
        {
          text: "Donate",
          src: "https://offrejoie.org/donate/",
        },
        {
          text: "Volunteer",
          src: "https://offrejoie.org/contact-us/",
        },
      ],
    },
    {
      logo: "https://offrejoie.org/wp-content/uploads/2020/07/cropped-small-logo@3x-1.png",
      backgroundColor: "#165b99",
      header: "Offre joie",
      description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of
      young Red Cross volunteers worked together to help the injured. Alleviating human
      suffering transcended any differences between them.`,
      links: [
        {
          text: "Donate",
          src: "https://offrejoie.org/donate/",
        },
        {
          text: "Volunteer",
          src: "https://offrejoie.org/contact-us/",
        },
      ],
    },
    {
      logo: "https://offrejoie.org/wp-content/uploads/2020/07/cropped-small-logo@3x-1.png",
      backgroundColor: "#165b99",
      header: "Offre joie",
      description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of
      young Red Cross volunteers worked together to help the injured. Alleviating human
      suffering transcended any differences between them.`,
      links: [
        {
          text: "Donate",
          src: "https://offrejoie.org/donate/",
        },
        {
          text: "Volunteer",
          src: "https://offrejoie.org/contact-us/",
        },
      ],
    },
    {
      logo: "https://offrejoie.org/wp-content/uploads/2020/07/cropped-small-logo@3x-1.png",
      backgroundColor: "#165b99",
      header: "Offre joie",
      description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of
      young Red Cross volunteers worked together to help the injured. Alleviating human
      suffering transcended any differences between them.`,
      links: [
        {
          text: "Donate",
          src: "https://offrejoie.org/donate/",
        },
        {
          text: "Volunteer",
          src: "https://offrejoie.org/contact-us/",
        },
      ],
    },
  ];

  return (
    <Fragment>
      <InformationMessage />
      <List sizes={cardsDefaultSizes} grid={true}>
        {data && data.map((data, key) => (
          <CardNGO key={key} data={data} />
        ))}
      </List>
      
    </Fragment>
  );
}
