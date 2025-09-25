import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Fade triggerOnce>
          <About />
        </Fade>
        <Fade triggerOnce>
          <Education />
        </Fade>
        <Fade triggerOnce>
          <Skills />
        </Fade>
        <Fade triggerOnce>
          <Portfolio />
        </Fade>
        <Fade triggerOnce>
          <Contact />
        </Fade>
      </main>
      <Footer />
    </div>
  );
}

export default App;