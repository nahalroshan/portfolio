import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Cardio Care",
    img: "/cc.png",
    desc: "CardioCare, a heart disease prediction website using React.js and Flask. The platform provides personalized diet and exercise recommendations, secure user authentication, and a real-time community chat system.",
    link: "https://cardiocare-9ragqmyyr-nahalroshans-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Expenso",
    img: "/tt1.png",
    desc: "Developed a web application to help individuals or businesses monitor, record, and analyze their spending habits and financial transactions.",
    link: "https://expenso-one.vercel.app",
  },
  {
    id: 3,
    title: "IEDC Summit App",
    img: "/iedcnew.jpg",
    desc: "Collaborated with a team to develop an event management app using Flutter and Dart for the IEDC Summit 2023, facilitating seamless communication and engagement among participants and attendees.",
    link: "https://github.com/nahalroshan/Iedc-Summit-user-app.git",
  },
  {
    id: 4,
    title: "Pinnacle",
    img: "/blog.png",
    desc: "Developed a blog website that offers users a streamlined platform for creating, sharing, and managing their content.",
    link: "https://pinnacle-blog-website.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [300, -200]);
  const yimg = useTransform(scrollYProgress, [0, 1], [300, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["20%", "500%"]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" style={{ yimg }}>
            <img src={item.img} alt={item.title} />
          </motion.div>
          <motion.div className="textContainer" style={{ y, opacity }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
