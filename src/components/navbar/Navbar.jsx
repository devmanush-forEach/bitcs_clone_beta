import "./Navbar.css";
import navLogo from "../../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const headerRef = useRef();

  const [showMore, setShowMore] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const changeBackground = () => {
    const scrolled = window.scrollY;
    const width = window.innerWidth;
    if (width < 650) {
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
    if (width < 650) {
      setIsSmallDevice(true);
      headerRef.current.style.background = "black";
    } else {
      setIsSmallDevice(false);
      headerRef.current.style.background = "transparent";
    }
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const scrolled = window.scrollY;
      if (width < 650 || scrolled > 175) {
        setIsSmallDevice(true);
        headerRef.current.style.background = "black";
      } else {
        setIsSmallDevice(false);
        headerRef.current.style.background = "transparent";
      }
    });
    window.addEventListener("scroll", changeBackground);
  }, []);

  const handleShowMoreClick = () => {
    setShowMore((x) => !x);
  };
  const handleBurgerClick = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header_logo_box">
        <img src={navLogo} alt="logo" />
        <span>BITCS</span>
      </div>
      {isSmallDevice ? (
        <div onClick={handleBurgerClick} className="nav_burger_icon_box">
          <div className="nav_burger_icon" />
        </div>
      ) : (
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
      )}

      {isSmallDevice && showDrawer && (
        <div className={`nav_drawer ${showDrawer ? "height-fit" : "hight-0"}`}>
          <ul className="mobile_nav_links_list">
            <li>
              <Link
                onClick={() => {
                  setShowDrawer(!showDrawer);
                }}
                className="mobile_nav_links"
                to="/"
              >
                home
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={() => {
                  setShowDrawer(!showDrawer);
                }}
                className="mobile_nav_links"
                to="/about"
              >
                about
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={() => {
                  setShowDrawer(!showDrawer);
                }}
                className="mobile_nav_links"
                to="/services"
              >
                services
              </Link>
            </li>
            <li className={` mobile_nav_links`} onClick={handleShowMoreClick}>
              more
              {/* <KeyboardArrowDownIcon style={{ fontWeight: "900" }} /> */}
              <ul className="more_option_list">
                <li>
                  <Link
                    onClick={() => {
                      setShowDrawer(!showDrawer);
                    }}
                    className="mobile_nav_links"
                    to="/team"
                  >
                    team
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setShowDrawer(!showDrawer);
                    }}
                    className="mobile_nav_links"
                    to="/testimonials"
                  >
                    testimonials
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                onClick={() => {
                  setShowDrawer(!showDrawer);
                }}
                className="mobile_nav_links"
                to="/contact"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
