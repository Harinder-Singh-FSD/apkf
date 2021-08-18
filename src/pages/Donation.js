import React from "react";
import { ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Donation = () => {
  return (
    <div>
      <Container>
        <div className="about-us-header">
          <h2>PLEASE DONATE & SUPPORT</h2>
        </div>
        <p style={{textAlign: "justify"}}>
          Following the principles laid down by our Gurus, APKF believes in the
          ideology of welfare of all! The ideals of ‘Sarbat Da Bhala’ have been
          motivating the people who have generously donated to the objectives
          and helped compassionately with APKF to save many lives.
          <br />
          <br />
          It is only through your support and initiatives to donate in our
          mission and vision, which has helped for the noble cause and to
          continue them with the same vigor, even today. With every contribution
          that it makes, we will move closer to our aim of providing better
          relief and aid to those who need our help. At APKF, we belong to one
          community and aim towards providing dedicated and selfless service to
          the nation.
          <br />
          <br />
          With your contribution, you can become a part of our welfare effort
          and make a difference in the lives of many. The needy deserve our aid
          and if we can come forward to support their dreams and help them
          survive in better conditions, we will draw unending joy and happiness
          from their smiles. Let this be the driving philosophy which keeps us
          walking on the path of contributing for the good of all.
        </p>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link className="btn btn-outline-warning" to="/donation/donate">
            Make a Donation
          </Link>
        </div>
        <br />
        <br />

        <div className="project-subtitle">
          <h2>Purposes of Donation</h2>
        </div>
        <p>
          <strong>
            APKF accepts donations for the following activities having
            transparency in which the donations are utilized
          </strong>
        </p>

        <ListGroup variant="flush" style={{textAlign: "justify"}}>
          <ListGroup.Item>
            <li>
              Become a sponsor for a needy school going child for his education
              by pledging Rs 12000 per annum. This is to keep this donation
              completely transparent and open for scrutiny by the donor by
              sharing complete relevant information of the sponsored child with
              the donor and sharing regular details of their progress in school.
              Through a one-to-one basis communication, the donor will be able
              to identify the recipient child.
            </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>
              Become a sponsor for a College going student by pledging Rs 120000
              so that the needy student may be able to continue their studies
              after schooling and pursue a professional course, suitable to
              their skills and ability.
            </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>
              Become a donor in the memory of a loved one and pledge a lump sum
              amount for perpetual use. This will be used as per the interest
              drawn to carry out the welfare activities i.e dedicating the Camp
              in his/her name.
            </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>
              Become a donor for various medical help towards Appeals which are
              brought out by the APKF from time to time. This will help to meet
              the expenses for welfare activities for the particular case and
              provide relief to the needy.
            </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>Become a regular donor for Disaster Relief / Pandemic.</li>
          </ListGroup.Item>
        </ListGroup>
        <br />
        <p style={{textAlign: "left"}}> 
          APKF is registered under Indian Trust Act 1882.
          <br />
          <br />
          If you wish to donate to a social welfare cause, you can donate
          through 
          <strong>
            DD / CHEQUE / CASH / ONLINE TRANSFER / PAYTM / GPAY / QR SCAN
          </strong>
          <br />
          <br />
          All donations will be received in favour of Akaal Purakh Ki Fauj.
          <br />
          <br />
          Trust Permanent Account Number No (Pan Card No) : 
          <strong>AAFTA6336G</strong>
          <br />
          <br />
          Team APKF will be happy and highly grateful for every contribution
          that you make towards our organisation to support the aims and
          objectives.
          <br />
          <br />
          Your Support can change their dreams and transform lives. Today they
          are able to stand with their heads high because there was someone like
          you to care for us. 
        </p>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link className="btn btn-outline-warning" to="/donation/donate">
            Make a Donation
          </Link>
         
        </div>
      </Container>
      <br/>
    </div>
  );
};

export default Donation;
