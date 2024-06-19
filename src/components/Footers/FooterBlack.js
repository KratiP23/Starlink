/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href=""
                    target="_blank"
                    className="mr-1"
                  >
                    StarLink
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    className="mr-1"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with by STARLINK
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
