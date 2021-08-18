import React from "react";
import { Card} from "react-bootstrap";
const PayCard = (props) => {
  let { imgUrl, title, details } = props.data;
  return (
    <>
      <Card style={{ width: "18rem", textAlign: "center", margin: "2rem" }}>
        <Card.Img variant="top" src={imgUrl} style={{ height: "15vh" }} />
        <Card.Body>
          <Card.Title style={{ textDecoration: "underline" }}>
            {title}
          </Card.Title>
          <Card.Text>
            {title === "Bank Transfer" ? (
              <div>
                <strong>By Cheque</strong>
                <br />
                Please write the cheque payable to Akaal Purakh Ki Fauj and post
                it to
                <br />
                <strong>Bank Transfer</strong>
                <br />
                Use the details below to donate via your online bank account
                <br />
                Account Name: <strong>Akaal Purakh Ki Fauj</strong>
                <br />
                <strong>Only For local Indian deposits</strong>
                <br />
                Bank: <strong>Yes Bank</strong>
                <br />
                Account Number: <strong>042388700000179</strong>
                <br />
                IFSC Code : <strong>YESB0000423</strong>
              </div>
            ) : (
             <a href="https://www.instamojo.com/@akaalpurakhkifauj"> {details}</a>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PayCard;