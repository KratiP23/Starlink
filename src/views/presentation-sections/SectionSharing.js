import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionSharing() {
  return (
    <>
      <div className="section section-sharing section-dark" id="demoPay">
        <Container>
          <Row>
            <div className="title text-center">
              <h3 className="title" style={{ fontWeight: 900, color: "white" }}>30 DAY TRIAL</h3>
              <p className="description" style={{ fontWeight: 500, color: "white" }}>
              If not satisfied, return Starlink for a full refund. Interested in staying up to date with Starlink?
              </p>
              <br />
            </div>
            <Col className="ml-auto mr-auto" md="8">
              <div className="space-top" />
              <Row>
                <Col md="6">
                  <Card className="card-pricing" style={{ backgroundImage: "url(" + require("assets/img/starlink/black-bg.jpg") + ")", minHeight:"450px" }}>
                    <CardBody>
                      <div className="card-icon">
                        <span className="icon-simple">
                          <i className="nc-icon nc-single-02" />
                        </span>
                      </div>
                      <CardTitle tag="h3" style={{ fontWeight: 900, color: "white" }}>$79</CardTitle>
                      <p className="card-description" style={{ fontWeight: 900, color: "white" }}>
                        For personal network, school network, startups or any
                        other network where your users will not be charged for
                        using it. Create one single network for one client.
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          target="_blank"
                          color="danger"
                          href=""
                        >
                          Buy Now
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-pricing" style={{ backgroundImage: "url(" + require("assets/img/starlink/black-bg.jpg") + ")", minHeight:"450px" }}>
                    <CardBody>
                      <div className="card-icon">
                        <span className="icon-simple">
                          <i className="nc-icon nc-bank" />
                        </span>
                      </div>
                      <CardTitle tag="h3" style={{ fontWeight: 900, color: "white" }}>$319</CardTitle>
                      <p className="card-description" style={{ fontWeight: 900, color: "white" }}>
                        For business network, multiple network for clients or
                        for creating network where your users will be charged for
                        using it.
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          target="_blank"
                          color="danger"
                          href=""
                        >
                          Buy Now
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col className="offset-md-2 text-center" md="8" />
          </Row>
          <div className="text-center">
            <span>Pay one time with:</span>
            <i className="fa fa-cc-paypal fa-pay mr-1" />
            <i className="fa fa-cc-visa fa-pay mr-1" />
            <i className="fa fa-cc-mastercard fa-pay mr-1" />
            <i className="fa fa-cc-amex fa-pay" />
            <br />
            <br />
          </div>
          <div className="title text-center">
            <h3>Thank you for sharing!</h3>
            <br />
            <Button className="btn-round mr-1" color="twitter" id="twitter">
              <i className="fa fa-twitter mr-1" />
              Twitter
            </Button>
            <Button className="btn-round mr-1" color="facebook" id="facebook">
              <i className="fa fa-facebook-square mr-1" />
              Facebook
            </Button>
            <Button className="btn-round" color="google" id="google">
              <i className="fa fa-google-plus mr-1" />
              Google
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSharing;
