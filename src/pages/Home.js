import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CarouselDisplay from '../components/CarouselDisplay'
import FBPage from '../components/FBPage'
import OurMission from '../components/OurMission'

const Home = () => {
    return (
        <div>
            <CarouselDisplay/>
            <Container>
            <Row style={{margin:"20px",justifyContent:"center",padding:'10px'}}>
            <Col lg={7} style={{margin:"20px"}}><OurMission/></Col>
            <Col lg={4} style={{margin:"20px"}}><FBPage/></Col>
            </Row>

            </Container>
        </div>
    )
}

export default Home
