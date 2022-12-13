import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";

const FooterData = {
  desc: "We operates the best technology to serve you quality product, enhance your business globally and recommend you all market leading solutions.",
  fbLink: "",
  linkedinLink: "",
  services: {
    title: "Services",
    list: [
      "Hire a developer",
      "Hire remote developer",
      "Hire fullstack Developer",
      "Hire Backend Developer",
      "Hire frontend Developer",
    ],
  },
  links: {
    title: "Important Links",
    list: [
      "About Us",
      "Services",
      "Team",
      "Support",
      "Testimonials",
      "Faq",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  information: {
    title: "Information",
    list: [
      {
        icon: <BsFillTelephoneFill />,
        title: "Phone",
        address: "+91-7428013133",
      },
      {
        icon: <MdEmail />,
        title: "Email",
        address: "abc@gmail.com",
      },
      {
        icon: <MdLocationPin />,
        title: "India Development Center",
        address:
          "Gurugram DLF phase 4, third floor,Zink Fitness Studio, India.",
      },
      {
        icon: <MdLocationPin />,
        title: "USA Development Center",
        address: "1324 hidden ridge apt#1124, Irving, TX 75038, USA.",
      },
    ],
  },
};

export default FooterData;
