import React, { useEffect, useState, useContext } from "react";
import { getContentfulData } from "../../../utils/getContentfulData";
import Project from "../../Project/Project";
import TransitonGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";
import { langContext } from "../../../Context/langContext.js";
import { Link } from "react-router-dom";

const classes = {
  container: {
    background: '#fff',
    display: "flex",
    height: 'auto !important',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  projectsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '6vmin'
  },
  title: {
    marginBottom: "5vmin",
    padding: "40px 10px",
    fontSize: "2.5em",
    fontWeight: 'bold'
  },
  mvmin: {
    margin: '40vmin 12vmin !important'
  }
};

const SectionThree = () => {
  const [ProjectData, setProjectData] = useState([]);
  const context = useContext(langContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContentfulData("projects", 3 ,context);

        let newState = [];
        data.map((item) => {
          let { value } = item.fields.desc.content[0].content[0];
          let { url } = item.fields.img.fields.file;
          let { title, link } = item.fields;

          let desc = value.slice(0, 110).concat("...");

          let project = { desc, title, url, link };
          newState = [...newState, { ...project }];
          return true;
        });

        setProjectData(newState);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [context]);

  return (
    <div>
      <section style={classes.container} className="sec_5">
        <h3 style={classes.title} className="sec_5_title">Most Recent Projects</h3>
        <TransitonGroup>
          <div style={classes.projectsList} className="project_list">
            {ProjectData.map((item, i) => {
              const { title, desc, url, link } = item;
              return (
                <Fade bottom>
                  <Project
                  title={title}
                  desc={desc}
                  link={link}
                  url={url}
                  key={i}
                  Is="project"
                  />
                </Fade>
                );
              })}
          </div>
        </TransitonGroup>
        <Link 
        className="btn btn-primary my-4" 
        style={classes.mvmin}
        to="/allProjects"
        >
          See All Projects
        </Link>
      </section>
    </div>
  );
};

export default SectionThree;
