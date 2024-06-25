import React from 'react'
import './experience.scss'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

export const Experience = () => {
  return (
    <div className='experience'>
      <div className="progress">
        <h1>Technologies</h1>
        
      </div>
      
      <div className="skills">
        <div className="icons">
          <motion.div className="iconWrapper" variants={iconVariants(2.5)} initial="initial" animate="animate">
            <img src="/react.png" alt="React" />
            <p>React</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(3)} initial="initial" animate="animate">
        <RiNextjsLine className='jst' />
        <p>Next</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(3.5)} initial="initial" animate="animate">
            <FaGithub className='git' />
            <p>GitHub</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(4)} initial="initial" animate="animate">
            <img src="/java.png" alt="Java" />
            <p>Java</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(4.5)} initial="initial" animate="animate">
            <img src="/mongodb.png" alt="MongoDB" />
            <p>MongoDB</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(5)} initial="initial" animate="animate">
            <img src="/node.png" alt="Node.js" />
            <p>Node.js</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(5.5)} initial="initial" animate="animate">
            <img src="/python.png" alt="Python" />
            <p>Python</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(6)} initial="initial" animate="animate">
            <img src="/tailwind.png" alt="Tailwind" />
            <p>Tailwind</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(6.5)} initial="initial" animate="animate">
            <DiPostgresql className='psql' />
            <p>PostgreSQL</p>
          </motion.div>
          <motion.div className="iconWrapper" variants={iconVariants(7)} initial="initial" animate="animate">
            <IoLogoJavascript className='js' />
            <p>JavaScript</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
