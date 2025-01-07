import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Qnext...",
    img: "https://files.oaiusercontent.com/file-L9PkPfUnx3y6ScxteLEyWc?se=2025-01-03T14%3A25%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3bfae122-1a12-45a4-adc9-1bcfff20e17d.webp&sig=LhzMykIJpej7qUs5mVZddjj%2BeAIAwmoZsrbjGz48Eao%3D",
    desc: "Long waits are a thing of the past with Qnext. This innovative app streamlines time management by letting users grab a digital token, leave the queue, and receive notifications when it’s their turn. Perfect for cafes, clinics, and service-based businesses, Qnext ensures a smoother, more efficient customer experience.",
  },
  {
    id: 2,
    title: "Happy Duo",
    img: "https://files.oaiusercontent.com/file-1NYjzFr3Sst3VpeL77rk4m?se=2025-01-03T14%3A09%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D83192063-4b3b-42fe-87be-e91fbccccec8.webp&sig=fvA2UPV44%2B4hK4csLpYU3qhOpZ7f7t/DpEnxKJk2dwY%3D",
    desc: "Love is in the air with Happy Duo, our unique dating app designed to foster meaningful connections. With a focus on simplicity, security, and compatibility, Happy Duo makes finding your perfect match effortless and enjoyable. It’s not just about meeting people—it’s about meeting the right people.",
  },
  {
    id: 3,
    title: "Shopz",
    img: "https://files.oaiusercontent.com/file-T5nvU3LaoY2k5osKB13pgA?se=2025-01-03T14%3A24%3A44Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1004ba2d-9965-4a38-a969-e12ab226a5d4.webp&sig=75m0uFAz/DRCrfb8MP6LkvwmtU/7VvHNetwG1pLRxRo%3D",
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
