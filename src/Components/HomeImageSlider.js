import React from "react";
import { Carousel } from "react-bootstrap";

export default function HomeImageSlider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={require('../staticItems/mq1.jpg')} alt="First slide" />
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={require('../staticItems/mq2.jpg')} alt="First slide" />
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={require('../staticItems/mq3.jpg')} alt="First slide" />
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}
