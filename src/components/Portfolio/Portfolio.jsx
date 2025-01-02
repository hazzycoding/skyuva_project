import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Happy DUO",
    img: "https://img.freepik.com/premium-vector/cellphones-with-avatar-man-woman_24911-15516.jpg?ga=GA1.1.34626213.1735529019&semt=ais_hybrid",
    desc: "Connect and share effortlessly with Happy DUO, a social platform that fosters a meaningful realtionships through fun, interative features",
  },
  {
    id: 2,
    title: "Qnext",
    img: "https://img.freepik.com/premium-vector/people-queue-order-food-drink-modern-coffehouse-barista-customer-coffee-shop_142963-2475.jpg?ga=GA1.1.34626213.1735529019&semt=ais_hybrid",
    desc: "Boost efficiency with Qnext, a powerful app for automating tasks and managing customer interactions, perfect for businesses of all sizes",
  },
  {
    id: 3,
    title: "Star Shop",
    img: "https://img.freepik.com/free-vector/user-rating-feedback-customer-reviews-cartoon-web-icon-e-commerce-online-shopping-internet-buying-trust-metrics-top-rated-product_335657-778.jpg?ga=GA1.1.34626213.1735529019&semt=ais_hybrid",
    desc: "Shop smarter with Star Shop, an e-commerce platform designed for seamless buying and selling experiences for businesses and customers alike",
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
