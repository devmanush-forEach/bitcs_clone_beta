import { GiProcessor, GiChaingun } from "react-icons/gi";

const card = function (title, desc, img, color, bgColor) {
  this.img = img;
  this.title = title;
  this.desc = desc;
  this.color = color;
  this.bgColor = bgColor;
};

const homeServiceData = {
  title: "Our Professional Services For You",
  desc: "With years of experience, BITCS offers a variety of IT solutions that will cater to every aspect of your technological and operational demands.",
  cards: [
    new card(
      "Software Development",
      "We transform your business by building innovative digital applications. Get started today, and let us help you harness the power of emerging technologies.",
      <GiProcessor />,
      "#9898F0",
      "#EEEEFE"
    ),
    new card(
      "Blockchain Development",
      "Explore the world of secure, scalable, and interoperable decentralized applications with our end-to-end blockchain development services.",
      <GiChaingun />,
      "#76B8F5",
      "#E8F3FD"
    ),
    new card(
      "Web App Development",
      "Our web application development team creates web applications designed to meet specific business requirements with latest technologies.",
      <GiChaingun />,
      "#1CCDCA",
      "#e6fdfc"
    ),
    new card(
      "Hire Dedicated Developers",
      "Get a team of experienced and dedicated developers who can convert your business idea into reality and work as your extended development team.",
      <GiChaingun />,
      "#F9CA54",
      "#fcf3dc"
    ),
    new card(
      "Fintech",
      "Being a software development company, we combine financial expertise with innovative technologies to deliver outstanding fintech solutions with highly dedicated employees.",
      <GiChaingun />,
      "#FF896B",
      "#fde2db"
    ),
    new card(
      "IOT Development",
      "As a full-stack IoT Development Company, we help startups and enterprises build smart IoT solutions and convert analog products into digital products with modern technologies.",
      <GiChaingun />,
      "#50D890",
      "#e7fdf1"
    ),
  ],
};

export default homeServiceData;
