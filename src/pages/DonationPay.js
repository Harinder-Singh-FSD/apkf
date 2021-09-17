import React from "react";
import { Row, Col,Container } from "react-bootstrap";
const DonationPay = () => {
  const data = [
    {
      imgUrl:
        "https://res.cloudinary.com/dvc56ayit/image/upload/v1631897005/WhatsApp_Image_2021-09-15_at_22.39.38_ydmjpl.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvc56ayit/image/upload/v1631897004/WhatsApp_Image_2021-09-15_at_22.39.39_yu5v3w.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvc56ayit/image/upload/v1631897003/WhatsApp_Image_2021-09-15_at_22.39.40_qb7fg2.jpg",
    },
    
  ];
  return (
    
    <Container>
      <div className="about-us-header">
          <h2>PLEASE DONATE & SUPPORT</h2>
        </div>
    <Row>

      {data.map(item=>{
            return <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <img src = {item.imgUrl} className="donation-image"/>
            </Col>
        })}
     
    </Row>
    </Container>
  );
};

export default DonationPay;