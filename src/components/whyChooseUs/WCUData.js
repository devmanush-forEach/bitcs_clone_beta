import { BsShieldCheck, BsGearWideConnected } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

const card = function (title, desc, color, img) {
  this.title = title;
  this.desc = desc;
  this.color = color;
  this.img = img;
};

const wcuData = {
  desc: "Established in 2018 and headquartered in Noida, we are one of the best companies for development of smart software solution for startups and enterprises. Our team of 200+ award winning designers and developers has designed and built over 150+ software platforms for startups and enterprises.",
  cards: [
    new card(
      "Agile approach",
      "We approach the best technologies and techniques in our work. We ensure to incorporate only scalable and agile methodologies so as to decrease the possibilities of inaccuracies and increase the probabilities of developing end products faster to serves you the best outcome.",
      "#dcddfa",
      <BsGearWideConnected />
    ),
    new card(
      "Dedicated assistance",
      "You get all dedicated assistances over here. We never disappoint your expectations. As clock works, our client managers also there at their service and provides them all possible aspect according to their requirements.",
      "#dcddfa",
      <BsGearWideConnected />
    ),
    new card(
      "Consistent exchange of dialogue",
      "Keep in touch!! Our experts always keep exchanging the thoughts and work progress with you through voice call, video calls, E-mail, as well as in chats. We consistently keep you update with our work and you are always welcome to ask for anything you want. Bitcs always ready to help their clients.",
      "#bde5fa",
      <BsShieldCheck />
    ),
    new card(
      "Post-launch support",
      "We are here, even after the launch of the applications and webs our team always with you. At Bitcs, we never left our clients after the launching of the projects, here we take care of all the maintenance and further requirements of your company.",
      "#bde5fa",
      <BsShieldCheck />
    ),
    new card(
      "Detailed performance reports",
      "During the whole working cycle of the product we give each and every single detail of the program to your company. We active 24/7 in your service and give you each and every news related to your project.",
      "#dcddfa",
      <FaUserTie />
    ),
    new card(
      "Quality Assurance and Testing",
      "You can trust our quality!! We never compromise with our quality of works as well as we know the quality of your time. Our quality assurance and testing squad undertake a meticulous approach to corroborate that the built functionality equates your business goals and make sure code is fairly free from any sort of bugs by conducting manual and automated testing.",
      "#dcddfa",
      <FaUserTie />
    ),
  ],
};

export default wcuData;
