import rahulJoshi from "../../assets/team/Rahul_Joshi.jpeg";
import rishav from "../../assets/team/Rishabh-pandey.png";
import nair from "../../assets/team/nair-vishnu.jpeg";
import vaibhav from "../../assets/team/vaibhav-girdher.jpeg";
import vikas from "../../assets/team/Vikas.jpg";
import apporva from "../../assets/team/apoorva-gossain.jpg";
import nuzhat from "../../assets/team/Nuzhat_HR.jpg";
import rohit from "../../assets/team/rohit-yadav.jpeg";

const member = function (name, role, img) {
  this.name = name;
  this.role = role;
  this.img = img;
};

const TeamList = [
  new member("Rahul Joshi", "Sr. Software Engineer", rahulJoshi),
  new member("Rohit Yadav", "Sr. Software Engineer", rohit),
  new member("Rishabh Pandey", "Software Engineer", rishav),
  new member("Nair Vishnu", "Software Engineer", nair),
  new member("Vaibhav Girdher", "Operation Head", vaibhav),
  new member("Vikas Kumar", "Digital Marketing Specialist", vikas),
  new member("Apoorva Gosian", "Content Writer", apporva),
  new member("Nuzhat", "HR", nuzhat),
];

export default TeamList;
