import React from "react";
import About from "./components/About";
import Certificate from "./components/Certificates";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  //titulo de la pagina
  document.title = "Andres Barrios Portfolio";

  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Certificate />
      <Contact />
    </div>
  );
}
