import React, { useEffect, useState, useContext } from "react";
import { getAllContentFulData } from "../../../utils/getContentfulData";
import Project from "../../Project/Project";
import styles from "./AllProjects.module.css";
import { Spinner } from "../..";
import { TransitionGroup } from "react-transition-group";
import Fade from "react-reveal/Fade";
import { langContext } from "../../../Context/langContext";

const AllProjects = () => {
  const [ProjectData, setProjectData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const locale = useContext(langContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllContentFulData("projects", locale);

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
        setCargando(false);
        setProjectData(newState);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [locale]);

  if (cargando) {
    return (
      <div className={styles.loadingCont}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.project_title}>
        <h3>All my Projects</h3>
      </div>
      <TransitionGroup>
        <div className={styles.grid_projects}>
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
      </TransitionGroup>
    </div>
  );
};

export default AllProjects;
