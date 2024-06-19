import React from "react";
import { Link, useHistory } from "react-router-dom";
import classnames from "classnames";
import Headroom from "headroom.js";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 499 || document.body.scrollTop > 499) {
        setNavbarColor("");
      } else if (document.documentElement.scrollTop < 500 || document.body.scrollTop < 500) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  const toggleNavbar = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };

  const handleSignInClick = () => {
    history.push("/login-page"); // Navigate to the login page on click
  };

  return (
    <>
      {collapseOpen ? (
        <div id="bodyClick" onClick={toggleNavbar} />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand={false}
        id="navbar-main"
        style={{ backgroundColor: collapseOpen ? "black" : "transparent" }} // Set background color to black when open
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="" tag={Link} style={{ fontSize: '2rem' }}>
              Starlink
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Starlink
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={toggleNavbar}
              style={{ position: "absolute", right: "80px", top:'50px' }} // Position hamburger to the right
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end" // Align items to the right
            navbar
            isOpen={collapseOpen}
            style={{ backgroundColor: "black", position: "absolute", top: "85px", right: "0px", padding:"15px" }} // Set background color to black
          >
            <Nav navbar className="ml-auto" style={{ width: "100%", textAlign: "left" }}>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  US
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav onClick={handleSignInClick}>
                  SIGN IN
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  SUPPORT
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  AVAILABILITY MAP
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  SPECIFICATIONS
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  SERVICE PLANS
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  VIDEO GUIDES
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  THECHNOLOGY
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  COMMUNITY GATEWAY
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  GEAR STORE
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  UPDATES
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <Button className="custom-nav-button" color="dark" nav>
                  CUSTOMER STORIES
                </Button>
                <span className="button-separator"></span>
              </UncontrolledDropdown>

            </Nav>

      <style jsx>
        {`
          .navbar-container {
            display: flex;
            justify-content: flex-end;
          }
          .custom-nav-button {
            width: 180px;
            height: 40px;
            background-color: black;
            border: none;
            padding: 10px 15px;
            color: white;
            cursor: pointer;
            text-align: left;

            &:hover {
              background-color: #333;
            }

            &:active {
              background-color: #222;
            }
          }
        `}
      </style>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorNavbar;
