import React from "react";
import "./hero.scss";
import { Link } from "react-scroll";
import { animate, motion } from "framer-motion";

export const Hero = () => {
  const slide = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",

      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="hero">
      <div className="initial">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}> Nahal Roshan</motion.h2>
            
            <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
           
         
          
            </motion.div>
          </motion.div>
        </div>
       
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={slide}
        initial="initial"
        animate="animate"
      >
        <h2>MongoDB Express React Node</h2>
      </motion.div>
    </div>
  );
};
