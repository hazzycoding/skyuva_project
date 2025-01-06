import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Business Growth Consulting</h2>
          <p className="text">
            Empowering Your Business with Tech Our expertise goes beyond
            development. We offer business consulting services to help you
            leverage technology for growth. From strategy to execution, we work
            with you to ensure your tech investments drive measurable results.
          </p>
          <button className="goButton">Discover How</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Product Ideation & Prototyping</h2>
          <p className="text">
            Bringing Your Ideas to Life Have an idea but don’t know where to
            start? Skyuva helps you refine, prototype, and validate your
            concepts. Our collaborative approach ensures your product is
            market-ready with user-friendly designs and cutting-edge features.
            Together, we make innovation simple.
          </p>
          <button className="goButton">Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> SaaS Solutions & Tools</h2>
          <p className="text">
            Smart Tools for Everyday Problems Our SaaS products like Qnext and
            Happy Duo solve real-world challenges. From managing wait times to
            connecting people, Skyuva creates tools that improve lives. Explore
            our solutions or let us help you build your own SaaS platform to
            address your customers’ needs.
          </p>
          <button className="goButton">Explore Our Tools</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
