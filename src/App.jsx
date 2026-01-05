import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ProjectsSlider";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Projects />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}
