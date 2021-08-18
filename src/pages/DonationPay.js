import React from "react";
import PayCard from "../components/PayCard";
import { Row, Col } from "react-bootstrap";
const DonationPay = () => {
  const data = [
    {
      imgUrl:
        "https://www.searchpng.com/wp-content/uploads/2019/02/Paytm-Logo-With-White-Border-PNG-image-715x227.png",
      title: "Paytm",
      details: "7271997199",
    },
    {
      imgUrl:
        "https://www.xda-developers.com/files/2020/11/Google-Pay-logo-1900x700_c.jpg",
      title: "GPay",
      details: "7271997199",
    },
    {
      imgUrl:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2_5TQlvVrFlz0Iu-avBJmuuMRPfFbi0GChD53-WG-ekaCSKmLmKUbDwGRTvKTm6QkWPw1rzzK1Ge09w4FGKmvn9TjI3ZNOzbtfsdVRuKyz9nShUBefocK&usqp=CAE",
      title: "Online Payment",
      details: "www.instamojo.com/@akaalpurakhkifauj",
    },
    {
      imgUrl:
        "https://logos-download.com/wp-content/uploads/2016/06/Yes_Bank_logo.png",
      title: "Bank Transfer",
      details: "",
    },
    
  ];
  return (
    <div className="donation-list">
      {data.map(item=>{
            return <div><PayCard data={item}/></div>
        })}
    </div>
  );
};

export default DonationPay;