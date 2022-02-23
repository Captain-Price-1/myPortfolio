import { motion } from "framer-motion";
import "./about.css";
import Skill from "./Skill";
import Typewriter from "typewriter-effect";
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
          <h1 className="me">About Me</h1>
        </div>
        <div className="about-detail">
          <p>
            Hi, I am Anas Parwez. I am a front-end developer who specializes in
            ReactJs Currently I am in last year of my Bachelors degree. I love
            making new websites using React with a spice of animations within
            them.
          </p>
        </div>
      </div>
      <h4>My Skills</h4>
      <section className="skillset-main-section">
        {Skill.map((skill, index) => {
          const { name, value, img } = skill;
          return (
            <div className="skillset-container">
              <div className="individual-skill">
                <div className="skill-info">
                  <div className="skill-name">
                    <p>{name}</p>
                    {/* <img src={img} className="skill-img" alt="" /> */}
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
