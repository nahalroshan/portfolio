import "./navbar.scss";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
          Nahal Roshan{" "}
        </motion.span>
        <div className="social">
        <a
            href="https://drive.google.com/file/d/1ApAUOHZQ2JiJJslPAFIbNI-G7-h0mo59/view"
            className="resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf />
            <h5>Resume</h5>
          </a>
          <a
            href="https://github.com/nahalroshan"
            className="git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <h5>Github</h5>
          </a>
          <a
            href="https://www.linkedin.com/in/nahalroshan"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
            <h5>Linkedin</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
