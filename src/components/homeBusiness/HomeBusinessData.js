import { GiProcessor, GiChaingun } from "react-icons/gi";

const card = function (percent, text, color, bgColor) {
  this.percent = percent;
  this.text = text;
  this.color = color;
  this.bgColor = bgColor;
};

const BusinessData = {
  title: "Grow your business online with our excellent technology solutions.",
  leftCards: [
    {
      title: "High-Quality Talent Team",
      desc: "We will introduce a skilled team of developers for you to choose the most optimistic and passionate offshore developer.",
      img: <GiProcessor />,
      color: "#9898f0",
      bgColor: "#eeeeee",
    },
    {
      title: "Cost-Effective",
      desc: "The quick and easy onboarding of your virtual team turns out to be cost-effective as you can save on infrastructure, hiring and staffing.",
      img: <GiChaingun />,
      color: "#9898f0",
      bgColor: "#eeeefe",
    },
  ],

  rightcards: [
    new card("95%", "Project Completed", "#9898f0", "#eeeefe"),
    new card("90%", "Design", "#3785CA", "#cae5fe"),
    new card("85%", "Happy Clients", "#23BC68", "#C0FEDC"),
    new card("80%", "Award Win", "#C05234", "#FBC7BA"),
  ],
};

export default BusinessData;
