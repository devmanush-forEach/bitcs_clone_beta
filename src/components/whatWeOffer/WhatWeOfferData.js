import a from "../../assets/offer/1.png";
import b from "../../assets/offer/2.png";
import c from "../../assets/offer/3.png";
import d from "../../assets/offer/4.png";
import e from "../../assets/offer/5.png";
import f from "../../assets/offer/6.png";
import g from "../../assets/offer/7.png";
import h from "../../assets/offer/8.png";
import i from "../../assets/offer/9.png";
import j from "../../assets/offer/10.png";
import { SiMusicbrainz } from "react-icons/si";

const card = function (img, title, kind) {
  this.img = img;
  this.title = title;
  this.kind = kind;
};

const wwoData = {
  title: "Industries We Serve",
  desc: "Everything you need to support your digital transformation strategy. Right here!",
  left_cards: [
    new card(
      <SiMusicbrainz />,
      "Education & E-learning.",
      "All kind of industry"
    ),

    new card(
      <SiMusicbrainz />,
      "Blockchain Development.",
      "All kind of industry"
    ),
    new card(
      <SiMusicbrainz />,
      "Healthcare & Fitness.",
      "All kind of industry"
    ),
    new card(
      <SiMusicbrainz />,
      "Travel & Hospitality.",
      "All kind of industry"
    ),
  ],
  right_cards: [
    new card(
      <SiMusicbrainz />,
      "Logistic & Transport.",
      "All kind of industry"
    ),
    new card(<SiMusicbrainz />, "E-commerce & Retail.", "All kind of industry"),
    new card(<SiMusicbrainz />, "Banking & Finance.", "All kind of industry"),
    new card(
      <SiMusicbrainz />,
      "Education & E-learning.",
      "All kind of industry"
    ),
  ],
  companies: [a, b, c, d, e, f, g, h, i, j],
};

export default wwoData;
