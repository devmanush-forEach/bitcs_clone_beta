import "./Navbar.css";
import navLogo from "../../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const headerRef = useRef();

  const [showMore, setShowMore] = useState(false);

  const changeBackground = () => {
    const scrolled = window.scrollY;
    const width = window.innerWidth;
    if (width < 769) {
      headerRef.current.style.background = "black";
      return;
    }
    if (scrolled > 175) {
      headerRef.current.style.background = "black";
    }
    if (scrolled < 175) {
      headerRef.current.style.background = "transparent";
    }
  };

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 769) {
      headerRef.current.style.background = "black";
    } else {
      headerRef.current.style.background = "transparent";
    }
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const scrolled = window.scrollY;
      if (width < 769 || scrolled > 175) {
        headerRef.current.style.background = "black";
      } else {
        headerRef.current.style.background = "transparent";
      }
    });
    window.addEventListener("scroll", changeBackground);
  }, []);

  const handleShowMoreClick = () => {
    setShowMore((x) => !x);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header_logo_box">
        <img src={navLogo} alt="logo" />
        <span>BITCS</span>
      </div>
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
        <li
          className={`${showMore && "active_more_dropdown_box"}  more_nav`}
          onClick={handleShowMoreClick}
        >
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
    </header>
  );
};

export default Navbar;
