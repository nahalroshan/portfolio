import "./app.scss";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
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
        <Newsidebar />
      </section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
