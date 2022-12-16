import offer1 from "../../assets/offer/offer1.png";
import offer2 from "../../assets/offer/offer2.png";
import offer3 from "../../assets/offer/offer3.png";
import offer4 from "../../assets/offer/offer4.png";

const card = function (title, desc, img, list) {
  this.title = title;
  this.desc = desc;
  this.list = list;
  this.img = img;
};

const ServiceWWOData = [
  new card(
    "Fintech Software Development",
    "We help companies transform their financial services with emerging tech for improved operational efficiency, greater transparency, faster response times and better customer experience.",
    offer1,
    [
      "Opportunities",
      "Security",
      "Creating",
      "Highest",
      "Industries",
      "Priority",
    ]
  ),
  new card(
    "Custom Healthcare Software Development",
    "Leverage our custom healthcare software development services to improve patient outcomes, provide remote care and automate medical workflows.",
    offer2,
    [
      "Security",
      "Opportunities",
      "Highest",
      "Creating",
      "Priority",
      "Industries",
    ]
  ),
  new card(
    "EdTech App Development",
    "We help educational institutes transform learning practices to address tomorrow’s challenges of interacting, educating, learning and monitoring",
    offer3,
    [
      "Creating",
      "Artificial",
      "Consectetur",
      "Industry",
      "Adipisicing",
      "Opportunities",
    ]
  ),
  new card(
    "Startup Product Development Company",
    "Whether you’re looking for a prototype to receive funding, an MVP to validate your product idea or a full-fledged solution built from scratch, we’re here to help you throughout your journey.",
    offer4,
    [
      "Opportunities",
      "Security",
      "Creating",
      "Highest",
      "Industries",
      "Priority",
    ]
  ),
];

export default ServiceWWOData;
