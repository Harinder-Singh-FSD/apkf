import React from "react";
import OusVission from "./OusVission";

const OurMission = () => {
  return (
    <div className="our-mission">
      <div className="project-subtitle">
        <h2>OUR MISSION</h2>
      </div>
      <div style={{textAlign: 'justify'}}>
        <p>
          We wish to share whatever we have with those who need it the most,
          Akaal Purakh Ki Fauj is built upon the following pillars:
        </p>
      </div>
      <div className="our-mission-list">
          <div>
          <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1632155458/WhatsApp_Image_2021-09-20_at_15.42.42_1_ee9grc.jpg"/>
          <p>Education For All</p>
          </div>
          <div>
          <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1632155457/WhatsApp_Image_2021-09-20_at_15.42.42_2_eiij6v.jpg"/>
          <p>Livelihood for all</p>
          </div>
          <div>
          <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1632155460/WhatsApp_Image_2021-09-20_at_15.42.41_qtvo0q.jpg"/>
          <p>Empowerment for all</p>
          </div>
          <div>
          <img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1632155459/WhatsApp_Image_2021-09-20_at_15.42.42_yxprhj.jpg"/>
          <p>Welfare for All</p>
          </div>
      </div>
      <hr/>
      <OusVission/>
    </div>
  );
};

export default OurMission;
