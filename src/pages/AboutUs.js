import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard"
const AboutUs = () => {
    let picUrl =
    "https://images.squarespace-cdn.com/content/v1/57b711122e69cf5fea1cf5a6/1563373750117-4CCS2VSPC2XW4V1NI6HG/ke17ZwdGBToddI8pDm48kLJXQjpc-yWDKGokof8ZYb5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyvMLJO5Nc1jHayiyhnEEdtiL0fAxQ5VfgiNwce99YG5amUuI-5NVRyc6OSuLOpZwE/Screen+Shot+2019-07-17+at+10.29.00+AM.png?format=1000w";
  const Team = [
    { name: "Jagjeet Singh", picUrl, position: "Founder & Trustee" },
    { name: "Ishpreet Singh", picUrl:"https://res.cloudinary.com/dvc56ayit/image/upload/v1622984030/WhatsApp_Image_2021-06-04_at_20.49.00_acc2xw.jpg", position: "Founder & Trustee" },
    { name: "Manmeet Singh", picUrl:"https://res.cloudinary.com/dvc56ayit/image/upload/v1622984031/WhatsApp_Image_2021-06-04_at_20.48.59_ouqmtd.jpg", position: "CEO & PR Head" },
    { name: "Amardeep Singh", picUrl:"https://res.cloudinary.com/dvc56ayit/image/upload/v1622984028/WhatsApp_Image_2021-06-04_at_20.51.14_nuy65n.jpg", position: "Director CSR" },
    { name: "Baldeep Singh", picUrl, position: "Director China" },
    { name: "CA Taranjeet Singh", picUrl, position: "Financial Consultant" },
    { name: "Adv. Jasdeep Singh", picUrl, position: "Chief Legal Advisor" },
    { name: "Sukhwinder Singh", picUrl, position: "Project Manager" },
    { name: "Gurveen Kaur ", picUrl, position: "-" },
  ];
  return (
    <div>
      <Container>
        <div className="about-us-header">
          <h2>About Us</h2>
        </div>
        <div className="about-us-content">
          <p>
            Akaal Purakh Ki Fauj is a Non-Political / Non-Government and Not for
            Profit NGO working for the upliftment and inclusive development of
            underprivileged and vulnerable humanity, irrespective of caste,
            creed and religion, thus making consistent and dedicated efforts to
            achieve the Sikh ideal of “SARBAT Da BHALA’’ which means welfare for
            all.
          </p>
          <p>
            We came into existence with an idea of some young Sikhs of Delhi in
            2015. With Guru Sahib’s blessings and Sangat’s love currently we are
            working in Delhi and NCR. APKF’s only aim is to empower human
            dignity, so that they become the catalyst for social change.
          </p>
          <p>
            The founders of APKF, its team of members, volunteers and staff
            function as caretakers of public money and Daswandh of the Sangat.
            Providing a continuity of purpose with constant guidance and
            support, the APKF team comprising of young and old medical doctors,
            educationists, chartered accountants, technocrats, IT professionals,
            serving and retired bureaucrats, self-employed professionals and
            businessmen is determined to continue its pursuit of selfless Sewa
            by continuing existing projects and embarking on new ones.
          </p>
          <p>
          While the efforts of APKF it continues to provide livelihoods, disaster relief, access to basic human rights and Education to all.
          </p>
        </div>
        {/* <Row style={{display:'flex',justifyContent:'space-evenly',flexWrap:"wrap"}}>
            {Team.map(item=>{
                return <Col lg={4} md={5} xl={3} style={{margin:"20px"}}><ProfileCard data={item}/></Col>
            })}
        </Row> */}
      </Container>
      
    </div>
  );
};

export default AboutUs;
