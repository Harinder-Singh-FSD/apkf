import React from 'react'
import { Container } from 'react-bootstrap'

const Completed = () => {
    return (
        <div>
              <Container>
        <div className="about-us-header">
          <h2>COMPLETED PROJECTS</h2>
        </div>
        <div className="about-us-content">
          <div className="project-subtitle">
            <h2>OXYGEN RELIEF</h2>
          </div>
          <p className="project-content">
            <strong>Akaal Purakh Ki Fauj</strong> have recognised the need of the hour and have
            started sewa of Oxygen to COVID-19 patients for free.
            <br />
            More then 400+ Cylinder were given for with the refundable security.
            <br />
            Drive thru was set up at Fateh Divas Park Opp Pacific Mall
            <br />
            Support the cause so we can save more lives
            <br />
          </p>
          <div className="medical-aid-images">
            <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1625944662/new8_ss97qy.jpg" className="project-images"/>
            <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1625944661/new7_hknq7e.jpg" className="project-images"/>
          </div>
        </div>
      </Container>
        </div>
    )
}

export default Completed
