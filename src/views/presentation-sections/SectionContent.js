import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionContent() {
  return (
    <>
      <div id="fadeInAnim">
        <div className="section section-content section-gray" style={{ backgroundImage: "url(" + require("assets/img/starlink/black-bg.jpg") + ")" }}>
          <Container>
            <Row>
              <Col md="7">
                <div className="image-container" style={{marginTop:"200px"}}>
                  <img
                    alt="..."
                    className="img"
                    src={require("assets/img/starlink/content1.jpg")}
                    style={{minHeight:"550px", minWidth:"600px"}}
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="section-description" style={{marginLeft:"70px", marginTop:"300px", minWidth:"450px"}}>
                  <h3 className="title" style={{ fontWeight: 900, color: "white" }}>GET ONLINE IN MINUTES</h3>
                  <h6 className="category" style={{ fontWeight: 500, color: "white" }}>Set up Starlink with just two steps. Instructions work in either order:</h6>
                  <h5 className="description" style={{ fontWeight: 400, color: "white" }}>
                  Starlink requires an unobstructed view of the sky. Download the Starlink app to determine your best install location.
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
            <Col md="5">
                <div className="section-description" style={{marginTop:"450px"}}>
                  <h3 className="title" style={{ fontWeight: 900, color: "white" }}>NO CONTRACTS</h3>
                  <h6 className="category" style={{ fontWeight: 500, color: "white" }}>Long term contracts prevent both you and Starlink from making sensible changes when necessary.</h6>
                  <h5 className="description" style={{ fontWeight: 400, color: "white" }}>
                  With Starlink, it is a fair deal both ways. Starlink can adjust terms and pricing as needed, and you can cancel at any time, for any reason.
                  </h5>
                </div>
              </Col>
              <Col md="7">
                <div className="image-container" style={{marginTop:"300px", marginLeft:"150px"}}>
                  <img
                    alt="..."
                    className="img"
                    src={require("assets/img/starlink/card3.jpeg")}
                    style={{minHeight:"650px", minWidth:"600px"}}
                  />
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionContent;
