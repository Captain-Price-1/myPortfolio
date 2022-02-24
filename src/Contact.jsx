import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
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
      className="contact-main-div"
    >
      <div className="form-modal">
        <h3>Contact Me</h3>
        <form className="form-main">
          <label>Name</label>
          <input type="text" name="user_name" id="" />
          <label>Email</label>
          <input type="text" name="user_email" />
          <label>Message</label>
          <textarea name="message" type="submit"></textarea>
        </form>
      </div>
    </motion.div>
  );
};
export default Contact;
