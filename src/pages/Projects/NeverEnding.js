import React from "react";
import { Container } from "react-bootstrap";

const NeverEnding = () => {
  return (
    <div>
      <Container>
        <div className="about-us-header">
          <h2>NEVER ENDING PROJECTS</h2>
        </div>
        <div className="about-us-content">
          <div className="project-subtitle">
            <h2>ADOPTING EDUCATION</h2>
          </div>
          <p className="project-content">
            The Project "Adopting Education" is about adopting/funding a child's
            Education fee / Books / Uniform, who's parents/guardians are unable
            to afford their expenses.
            <br />
            We ensure the money goes to needy students and they get the best
            education possible in best schools so that they can lead their and
            family's life in a much sustainable manner where they can help
            themselves to come out of poverty lines themselves.
            <br />
            The project is always on the go and keeps requiring funds on monthly
            basis where we need to provide with all study material.
            <br />
            We will be really thankful on behalf of these children if you can
            extend your support for their better and bright future.
            <br />
          </p>
        </div>
        <hr/>
        <div className="about-us-content">
          <div className="project-subtitle">
            <h2>BOOTA PARSHAD</h2>
          </div>
          <p className="project-content">
          <strong>Akaal Purakh Ki Fauj</strong> understands <strong>“Boota Prasad”</strong>. 
            <br />
            India is one of the highest polluted country. As a part of sustainability focus, APKF conducted PLANTATION drive to PLANT maximum number of plants.
            <br />
            The importance of the initiative, <strong>is to encourage mankind to protect planet earth from global warming.</strong>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default NeverEnding;
