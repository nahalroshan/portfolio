import React from "react";
import "./hero.scss";
import { animate, motion } from "framer-motion";

export const Hero = () => {
    
    const slide = {
        initial: {
          x: 0,
       
        },
        animate: {
          x: "220%",
         
          transition: {
            duration: 20,
            repeat:Infinity
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
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}> Nahal Roshan</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              Latest Projects
            </motion.button>
            <motion.button variants={textVariants}>Contact</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="slidingTextContainer" variants={slide} initial="initial" animate="animate" >
        <h2>MongoDB Express React Node</h2>
      </div>
    </div>
  );
};
