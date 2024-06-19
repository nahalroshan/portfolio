import React from "react";
import { motion } from "framer-motion";
import "./experience.scss";

const items = [
  {
    id: 1,
    title: "React",
    img: "/react.png",
  },
  {
    id: 2,
    title: "MongoDB",
    img: "/mongodb.png",
  },
  {
    id: 3,
    title: "Python",
    img: "/python.png",
  },
  {
    id: 4,
    title: "Java",
    img: "/java.png",
  },
  {
    id: 5,
    title: "C",
    img: "/c.png",
  },
  {
    id: 6,
    title: "C++",
    img: "/c++.png",
  },
  {
    id: 7,
    title: "Node",
    img: "/node.png",
  },
  {
    id: 8,
    title: "Tailwind",
    img: "/tailwind.png",
  },
];

export const Experience = () => {
  return (
    <div className="skills">
      <div className="textContainer">
        <h1>Building products with the greatest technologies</h1>
      </div>
      <div className="listSkills">
        {items.map((item) => (
          <div className="wrapper" key={item.id}>
            <motion.div className="imageContainer">
              <img src={item.img} alt={item.title} />
            </motion.div>
            <motion.div className="textContainer">
              <h2>{item.title}</h2>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
