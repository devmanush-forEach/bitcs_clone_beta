import "./Navbar.css";
import navLogo from "../../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const headerRef = useRef();
  const changeBackground = () => {
    const scrolled = window.scrollY;
    if (scrolled > 175) {
      headerRef.current.style.background = "black";
      headerRef.current.style.height = "95px";
    }
    if (scrolled < 175) {
      headerRef.current.style.height = "105px";
      headerRef.current.style.background = "transparent";
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className="header" ref={headerRef}>
      <div className="header_logo_box">
        <img src={navLogo} alt="logo" />
        <span>BITCS</span>
      </div>
      <div className="header_links_div">
        <ul className="nav_links_list">
          <li>
            <Link className="nav_links" to="/">
              home
            </Link>{" "}
          </li>
          <li>
            <Link className="nav_links" to="/about">
              about
            </Link>{" "}
          </li>
          <li>
            <Link className="nav_links" to="/services">
              services
            </Link>
          </li>
          <li className="more_nav">
            more <KeyboardArrowDownIcon style={{ fontWeight: "900" }} />
            <div className="more_dropdown_box">
              <ul className="more_dropdown">
                <li>
                  <Link className="drop_nav_links" to="/team">
                    team
                  </Link>
                </li>
                <li>
                  <Link className="drop_nav_links" to="/testimonials">
                    testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="nav_links" to="/contact">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
