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
  service_page: [
    new card(
      <SiMusicbrainz />,
      "Fintech Software Development",
      "All kind of industry"
    ),
    new card(
      <SiMusicbrainz />,
      "Custom Healthcare Software Development",
      "All kind of industry"
    ),
    new card(
      <SiMusicbrainz />,
      "EdTech App Development",
      "All kind of industry"
    ),
    new card(
      <SiMusicbrainz />,
      "Startup Product Development Company",
      "All kind of industry"
    ),
  ],
};

export default wwoData;
