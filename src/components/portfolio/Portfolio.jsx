import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Cardio Care",
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Hello",
  },
  {
    id: 2,
    title: "Expenso",
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Hello",
  },
  {
    id: 3,
    title: "IEDC",
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Hello",
  },
  {
    id: 4,
    title: "Pinnacle",
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Hello",
  },
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [300, -200]);
    const yimg = useTransform(scrollYProgress, [0, 1], [300, -100]);
    const opacity = useTransform(scrollYProgress, [0, 1], ["20%","500%" ]);
  
    return (
      <section ref={ref}>
        <div className="container">
          <div className="wrapper">
            <motion.div className="imageContainer" style={{yimg}}>
              <img src={item.img} alt={item.title} />
            </motion.div>
            <motion.div className="textContainer" style={{ y, opacity }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
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
