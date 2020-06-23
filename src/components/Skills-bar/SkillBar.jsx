import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

const SkillBar = ({ icon, color, name, percent}) => {

  return (
    <>
        <div className="skills">
            <FontAwesomeIcon icon={icon} className={`${name}-icon`}></FontAwesomeIcon>
            <div className="percent">
            <div className={`${name}-progress`}></div>
            </div>
            <span className={`${name}-span`}><CountUp start={0} end={percent} duration={3} suffix="%"/></span>
        </div>
    </>
  );
};

export default SkillBar;