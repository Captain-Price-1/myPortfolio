import { motion } from "framer-motion";
import "./about.css";

const AboutPage = () => {
  const containerVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="about-page-main-div"
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
    </motion.div>
  );
};
export default AboutPage;
