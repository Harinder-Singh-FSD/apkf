import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselDisplay = () => {
  return (
    <Carousel fade >
      <Carousel.Item> 
      
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272366/WhatsApp_Image_2021-08-18_at_12.25.36_1_j965lf.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272366/WhatsApp_Image_2021-08-18_at_12.25.36_zoiarr.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272366/WhatsApp_Image_2021-08-18_at_12.25.35_2_hs0rbr.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272365/WhatsApp_Image_2021-08-18_at_12.25.34_rwiqqh.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272366/WhatsApp_Image_2021-08-18_at_12.25.35_2_hs0rbr.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272365/WhatsApp_Image_2021-08-18_at_12.25.35_1_t9expq.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272365/WhatsApp_Image_2021-08-18_at_12.25.34_1_mxovhf.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272365/WhatsApp_Image_2021-08-18_at_12.25.35_a4qenj.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272365/WhatsApp_Image_2021-08-18_at_12.25.33_1_z4mga4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629272365/WhatsApp_Image_2021-08-18_at_12.25.33_w7rqlt.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselDisplay;
