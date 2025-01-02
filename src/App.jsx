import "./app.scss";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/COntact.Jsx";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import { NavBar } from "./components/navbar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
