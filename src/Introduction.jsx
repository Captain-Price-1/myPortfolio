import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.section
      className="introduction-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="home-intro">
        <div className="static-text">
          <h1>Hi</h1>
          <h1>I am Anas Parwez</h1>
        </div>
        <div className="typewriter1">
          <Typewriter
            options={{
              autoStart: true,
              pauseFor: 2500,
              loop: true,
              delay: 10,
              cursor: "",
              strings: [
                "a React Developer.",
                " a Competitive Coder",
                " a Tech Enthusiast.",
              ],
              deleteSpeed: 5,
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};
export default Introduction;
