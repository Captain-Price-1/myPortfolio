import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import ProjectsData from "./Projects-data";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FaCode } from "react-icons/fa";
// import { motion } from "framer-motion";

const Projects = () => {
  const categories = ["Small Projects", "Medium Projects", "Large Projects"];
  const [className, setClassName] = useState("");
  const [projects, setProjects] = useState(ProjectsData);
  const handleClick = (e, category) => {
    setClassName(category);
    console.log(category);
    let newList = ProjectsData.filter((item) => item.category === category);
    setProjects(newList);
  };

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-info">
        <div className="project-header">
          <h1 className="project-heading">My Projects</h1>
        </div>
        <div className="project-scale">
          {categories.map((category, index) => {
            return (
              <button
                type="button"
                className={`pa ${className === category && "activated"}`}
                key={index}
                onClick={(e) => {
                  handleClick(e, category);
                }}
              >
                {category}
              </button>
            );
          })}
          {/* <a href="#" className="pa">
            Small Projects
          </a>
          <a href="#" className="pa">
            Medium Projects
          </a>
          <a href="#" className="pa">
            Large Projects
          </a> */}
        </div>
        <TransitionGroup component="div" className="projects">
          {/* <div className="projects"> */}
          {projects.map((project, index) => {
            const { id, name, img, url, repo } = project;
            console.log(img);
            return (
              <CSSTransition key={id} classNames="alert" timeout={500}>
                <motion.a href={url} className="single-project" key={id} layout>
                  <header>
                    <div className="single-project-image">
                      <img src={img} alt="" />
                      <div className="hover"></div>
                    </div>
                    <div className="info-single-project">
                      <p>{name}</p>
                      <a href={repo} className="source-code">
                        <FaCode />
                        <span>Code</span>
                      </a>
                    </div>
                  </header>
                </motion.a>
              </CSSTransition>
            );
          })}
          {/* </div> */}
        </TransitionGroup>
      </div>
    </motion.section>
  );
};
export default Projects;
