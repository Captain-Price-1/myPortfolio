import { motion } from "framer-motion";
import "./about.css";
import Skill from "./Skill";

const AboutPage = () => {
  const containerVariants = {
    hidden: {
      x: "0",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.15 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="about-page-main"
    >
      <div className="about-me">
        <div className="about-heading">
          <h1>About Me</h1>
        </div>
        <div className="about-detail">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quo eum nemo dolorem. Sed aspernatur possimus quae eveniet
            consequuntur voluptas et aut architecto, ducimus ipsum magnam iste
            placeat. Laboriosam, natus.
          </p>
        </div>
      </div>
      <h4>My Skills</h4>
      <section className="skillset-main-section">
        {Skill.map((skill, index) => {
          const { name, value } = skill;
          return (
            <div className="skillset-container">
              <div className="individual-skill">
                <div className="skill-info">
                  <div className="skill-name">
                    <p>{name}</p>
                    <p>{value}</p>
                  </div>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-filled"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </motion.div>
  );
};
export default AboutPage;
