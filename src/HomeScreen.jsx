import Introduction from "./Introduction";
import Projects from "./Projects";
import { motion } from "framer-motion";

const Home = () => {
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
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Introduction />
      <Projects />
    </motion.div>
  );
};
export default Home;
