import "./app.scss";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Portfolio } from "./components/portfolio/Portfolio";
import Newsidebar from "./components/sidebar/Newsidebar";

import Sidebar from "./components/sidebar/Sidebar";
import Test from "./Test";
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax />
      </section>
      <Portfolio />
      <section>
        <Newsidebar />
      </section>
      <section><Experience /></section>
      <section><Contact /></section>
    </div>
  );
};

export default App;
