import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src="https://s3.amazonaws.com/creativetim_bucket/photos/139481/thumb.jpg"
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description" style={{ fontWeight: 900, color: "white" }}>
            "With my creative side lacking in
            experience this really put me in the right spot to speed through the
            fast lane."
          </h5>
          <CardFooter>
            <CardTitle tag="h4" style={{ fontWeight: 400, color: "white" }}>Chase Jackson</CardTitle>
            <h6 className=" card-category" style={{ fontWeight: 500, color: "white" }}>SpaceX Engineer</h6>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src="https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276"
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description" style={{ fontWeight: 900, color: "white" }}>
            "Love the shapes and color palette on this one!  Use it for prototypes and along with Paper Dashboard"
          </h5>
          <CardFooter>
            <CardTitle tag="h4" style={{ fontWeight: 400, color: "white" }}>Robin Leysen</CardTitle>
            <h6 className=" card-category" style={{ fontWeight: 500, color: "white" }}>SpaceX Engineer</h6>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain" style={{ fontWeight: 900, color: "white" }}>
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src="https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215"
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description" style={{ fontWeight: 900, color: "white" }}>
            "Love it. Use it for prototypes and along with Paper Dashboard."
          </h5>
          <CardFooter>
            <CardTitle tag="h4" style={{ fontWeight: 400, color: "white" }}>Cristi Jora</CardTitle>
            <h6 className=" card-category" style={{ fontWeight: 500, color: "white" }}>SpaceX Engineer</h6>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "2",
    altText: "",
    caption: ""
  }
];

function SectionTestimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-testimonials" style={{ backgroundImage: "url(" + require("assets/img/starlink/spacex.jpg") + ")" }}>
        <Container fluid >
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title" style={{ fontWeight: 900, color: "white" }}>ENGINEERED BY SPACEX</h2>
              <h5 className="description" style={{ fontWeight: 900, color: "white" }}>
              As the world's leading provider of launch services – and the only provider with an orbital class reusable rocket – SpaceX has deep experience with both spacecraft and on-orbit operations.
              </h5>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto" md="2">
              <div className="testimonials-people">
                <img
                  alt="..."
                  className="left-first-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/110862/thumb.?1482812727"
                  }
                />
                <img
                  alt="..."
                  className="left-second-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/139481/thumb.jpg?1485460613"
                  }
                />
                <img
                  alt="..."
                  className="left-third-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/152441/thumb.jpg?1488233314"
                  }
                />
                <img
                  alt="..."
                  className="left-fourth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276"
                  }
                />
                <img
                  alt="..."
                  className="left-fifth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/161506/thumb.?1489848178"
                  }
                />
                <img
                  alt="..."
                  className="left-sixth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/77627/thumb.jpg?1487360092"
                  }
                />
              </div>
            </Col>
            <Col md="6">
              <div className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item, key) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={key}
                      >
                        {item.content}
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </div>
            </Col>
            <Col className="mr-auto" md="2">
              <div className="testimonials-people">
                <img
                  alt="..."
                  className="right-first-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/139481/thumb.jpg"
                  }
                />
                <img
                  alt="..."
                  className="right-second-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215"
                  }
                />
                <img
                  alt="..."
                  className="right-third-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/123334/thumb.JPG?1479459618"
                  }
                />
                <img
                  alt="..."
                  className="right-fourth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/118235/thumb.?1477435947"
                  }
                />
                <img
                  alt="..."
                  className="right-fifth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/18/thumb.png?1431433244"
                  }
                />
                <img
                  alt="..."
                  className="right-sixth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/167683/thumb.?1491014996"
                  }
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionTestimonials;
