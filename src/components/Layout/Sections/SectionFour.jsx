import React from 'react'
import {
    faHtml5,
    faCss3,
    faJs,
    faReact,
    faPhp,
    faNodeJs,
  } from "@fortawesome/fontawesome-free-brands";
  import { SkillBar } from "../../index";

const SectionFour = ({ showUp }) => {

    const barsData = [
        { icon: faHtml5, name: "html", percent: 90 },
        { icon: faCss3, name: "css", percent: 85 },
        { icon: faJs, name: "js", percent: 85 },
        { icon: faReact, name: "react", percent: 70 },
        { icon: faPhp, name: "php", percent: 60 },
        { icon: faNodeJs, name: "nodeJs", percent: 75 },
      ];

    return (
        <section classsName="sec_4">
        <h3 className="subtitle-3">My Skills</h3>
        <div className="skillBars">
          {showUp &&
            barsData.map((bar, i) => {
              const { icon, name, percent } = bar;
              return (
                <SkillBar key={i} icon={icon} name={name} percent={percent} />
              );
            })}
        </div>
      </section>
    )
}

export default SectionFour
