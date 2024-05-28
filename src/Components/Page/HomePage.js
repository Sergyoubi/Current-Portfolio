import { useEffect } from "react";
import AboutMe from "../Partial/AboutMe";
import Contact from "../Partial/Contact";
import Experience from "../Partial/Experience";
// import Projects from "../Partial/Projects";
import Header from "../Partial/Header";
import Intro from "../Partial/Intro";
// import Recent from "../Partial/Recent";
import Skills from "../Partial/Skills";

const HomePage = () => {
  useEffect(() => {
    document.title = "Sergy | Front-End Developer";
  });

  return (
    <div className="w-screen h-screen bg-slate-900">
      <Header />
      <Intro />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
