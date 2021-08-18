import React from "react";
import { Container } from "react-bootstrap";

const Ongoing = () => {
  return (
    <div>
      <Container>
        <div className="about-us-header">
          <h2>ON GOING PROJECTS</h2>
        </div>
        <div className="about-us-content">
          <div className="project-subtitle">
            <h2>COVID RELIEF</h2>
          </div>
          <p className="project-content">
          <strong>Akaal Purakh Ki Fauj</strong> Corona Relief and Rehabilitation Support is for
            all those who need support during this lockdown.
            <br />
            In the history of mankind We have seen the biggest ever lockdown.
            <br />
            APKF Corona Relief and Rehabilitation Support is for whole mankind
            where we can reach.
            <br />
            APKF and its team is working continuously to help needy ones.
            <br />
            <strong>Akaal Purakh Ki Fauj</strong> has supported the families by providing them.{" "}
            <br />
            <ul>
              <li>
                1500+ Ration kits consisting one month ration to the Covid
                affected and underprivileged families in 2020.{" "}
              </li>
              <li>
                - 5000+ Ration kits consisting one month ration to the Covid
                affected and underprivileged families in 2021 (till June).{" "}
              </li>
            </ul>
            Your support is always needed
            <br />
            <ul>
              <li>
                Livelihood Support & Economic Assistance to the most
                marginalized communities, women & girls
              </li>
              <li>Provision of Soaps, Sanitizers and Sanitary pads</li>
              <li>Provision of food supplies/dry rations.</li>
            </ul>
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1625931160/new2_iuulxc.jpg"
          className="project-ongoing-pic"
        />
        <hr />
        <div className="about-us-content">
          <div className="project-subtitle">
            <h2>MEDICAL AID</h2>
          </div>
          <p className="project-content">
            As a result of COIVD 19. The financial conditions of middle families
            have been detreating. Akaal purakh ki fauj has been receiving
            multiple requests for providing immediate.
            <br />
            Till now in 2021 Akaal purakh ki Fauj have attended 10+ medical
            cases. <br />
          </p>
          <div className="medical-aid-images">
            <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1625941532/new3_kgkqis.jpg" className="project-images"/>
            <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1625941532/new4_lmzoro.jpg" className="project-images"/>
          </div>
        </div>

        <hr />
        <div className="about-us-content">
          <div className="project-subtitle">
            <h2>FARMERS RELIEF AID</h2>
          </div>
          <p className="project-content">
            Akaal Purakh Ki Fauj has provided 100+ Movable Urinals, Bathrooms
            and bathing areas at Tikri Border and Ghazipur Border. Moreover, we
            provide essentials like Water, medicines, broom, mosquito repellent,
            toothpaste, toothbrush, bathing soap, washing detergent, oil,
            blankets and other items of day to day necessity. <br />
          </p>
          <div className="medical-aid-images">
            <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1625942954/new6_aixhgc.jpg" className="project-images"/>
            <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1625942952/new5_aaivy5.jpg" className="project-images"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ongoing;
