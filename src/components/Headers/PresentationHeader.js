
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Button } from 'reactstrap';

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/starlink/starlink-bild.jpg") + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">HIGH-SPEED INTERNET AROUND THE WORLD</h1>
                <div className="type">Connent at home or on the go.</div>
                <form // Create a form element
                  className="service-address-form" // Add a class for styling
                >
                  <div className="input-and-button-container">
                    <input
                      type="text"
                      id="serviceAddress"
                      name="serviceAddress"
                      placeholder="SERVICE ADDRESS"
                      className="transparent-input"
                    />
                    <Button color="transparent" className="order-button">
                      ORDER NOW
                    </Button>
                  </div>
                </form>
              </div>
              <button type="button" className="availability-button">
                    View Availability & Speeds Map {">"}
                  </button>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
