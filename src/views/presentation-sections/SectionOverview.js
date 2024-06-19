import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

// core components
function SectionOverview() {
  return (
    <>
      <div className="section section-overview" style={{ backgroundImage: "url(" + require("assets/img/starlink/black-bg.jpg") + ")" }}>
        <Container fluid>
          <Row>
            <Col> {/* Single column for all cards */}
              <Row xs="1" md="3"> {/* Adjust for different screen sizes */}
                <Col>
                  <Card className="card-with-image-1" style={{ maxWidth: "500px", margin: "10px", marginLeft: "50px", minHeight: "800px" }}>
                    <CardBody className="text-left" style={{ color: "white" }}> {/* Left-align content */}
                      <CardTitle tag="h2" style={{ fontWeight: 900, color: "white" }}> {/* Extra bold weight (900) */}
                        RESIDENTIAL
                      </CardTitle>
                      <h4 className="card-description" style={{ fontWeight: 400, color: "white" }}> {/* Extra bold weight (900) */}
                        Connect at home
                      </h4>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-with-image-2" style={{ maxWidth: "500px", margin: "10px",marginLeft: "30px", minHeight: "800px" }}>
                    <CardBody className="text-left" style={{ color: "white" }}>
                      <CardTitle tag="h2" style={{ fontWeight: 900, color: "white" }}>
                        ROAM
                      </CardTitle>
                      <h4 className="card-description" style={{ fontWeight: 400, color: "white" }}>
                        Connect on the go
                      </h4>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-with-image-3" style={{ maxWidth: "500px", margin: "10px", minHeight: "800px" }}>
                    <CardBody className="text-left" style={{ color: "white" }}>
                      <CardTitle tag="h2" style={{ fontWeight: 900, color: "white" }}>
                        BOATS
                      </CardTitle>
                      <h4 className="card-description" style={{ fontWeight: 400, color: "white" }}>
                        Connects on the waters
                      </h4>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="title-brand">
            <h2 className="title" style={{ fontWeight: 700, color: "white", minWidth:"1100px", marginLeft:"-100px", marginTop:"80px" }}>STARLINK FOR BUSINESSES AND POWER USERS</h2>
            <h4 className="title" style={{ fontWeight: 300, color: "white", minWidth:"900px" }}>STARLINK FOR BUSINESSES AND POWER USERS</h4>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionOverview;
