const card = function (image, title, desc, link) {
  this.title = title;
  this.image = image;
  this.desc = desc;
  this.link = link;
};

const homeAboutData = {
  title: "We Complete Every Project With Extra Care As Customer Need",
  desc: "We are one of the top Indian software engineering company focussed on providing outsourced software development and software engineering teams to our clients globally.",
  aboutList: [
    "150+ Projects delivered",
    "Result Oriented approach",
    "Experienced developers",
    "On-Time delivery",
    "Quality Service",
    "Excellent Support",
  ],

  cards: [
    new card(
      "",
      "App Development",
      "Leverage apps to reach new audience and increase engagement with your audience.",
      ""
    ),
    new card(
      "",
      "Web Design & Development",
      "Impress customers with powerful and beautiful web design.",
      ""
    ),
    new card(
      "",
      "Dev Ops",
      "Get faster delivery with high quality softwares.",
      ""
    ),
  ],
};

export default homeAboutData;
