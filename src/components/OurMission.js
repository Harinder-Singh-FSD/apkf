import React from "react";
import OusVission from "./OusVission";

const OurMission = () => {
  return (
    <div className="our-mission">
      <div className="project-subtitle">
        <h2>OUR MISSION</h2>
      </div>
      <div style={{textAlign: 'center'}}>
        <p>
          We wish to share whatever we have with those who need it the most,
          Akaal Purakh Ki Fauj is built upon the following pillars:
        </p>
      </div>
      <div className="our-mission-list">
          <div>
          <img src="https://media.giphy.com/media/KDYB0cH4HW8xc3VIAx/giphy.gif"/>
          <p>Education For All</p>
          </div>
          <div>
          <img src="https://media1.giphy.com/media/wOOwPGk74nOhCRmWZq/200w.gif?cid=82a1493bijfzamofsqatz2c2ly0hfvcq63ro1tdbpdy4higm&rid=200w.gif"/>
          <p>Livelihood for all</p>
          </div>
          <div>
          <img src="https://c.tenor.com/9JCypSI3hoUAAAAi/democracyrising-our-time-now.gif"/>
          <p>Empowerment for all</p>
          </div>
          <div>
          <img src="https://www.acaps.ma/sites/default/files/prevoyance-protection.jpg"/>
          <p>Welfare for All</p>
          </div>
      </div>
      <hr/>
      <OusVission/>
    </div>
  );
};

export default OurMission;
