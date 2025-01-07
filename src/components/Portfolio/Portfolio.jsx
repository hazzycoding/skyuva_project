import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Qnext",
    img: "qnext.webp",
    desc: "Long waits are a thing of the past with Qnext. This innovative app streamlines time management by letting users grab a digital token, leave the queue, and receive notifications when it’s their turn. Perfect for cafes, clinics, and service-based businesses, Qnext ensures a smoother, more efficient customer experience.",
  },
  {
    id: 2,
    title: "Happy Duo",
    img: "/happ-duo.webp",
    desc: "Love is in the air with Happy Duo, our unique dating app designed to foster meaningful connections. With a focus on simplicity, security, and compatibility, Happy Duo makes finding your perfect match effortless and enjoyable. It’s not just about meeting people—it’s about meeting the right people.",
  },
  {
    id: 3,
    title: "Shopz",
    img: "/shopz.webp",
    desc: "Discover trustworthy reviews and share your experiences with Shopz. This app is your go-to platform for rating shops, restaurants, and services, helping others make informed decisions. Whether it’s a hidden gem or a must-avoid spot, your feedback helps build a smarter community.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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

export default Portfolio;
