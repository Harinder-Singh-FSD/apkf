import React from "react";
import { Card } from "react-bootstrap";

const ProfileCard = (props) => {
    let{name,position,picUrl} = props.data
  return (
    <Card style={{ width: "18rem" }} className="profile-card">
      <Card.Img variant="top" src={picUrl} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {position}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
