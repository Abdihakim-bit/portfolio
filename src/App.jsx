import React from 'react';
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const YOUR_NAME = 'Abdihakim Ali';

export default function App() {
  return (
    <>
      <Nav name={YOUR_NAME} />
      <main>  
          <Hero name={YOUR_NAME} />
          <About />
          <Projects />
          <Skills />
          <Contact />
      </main>
    </>
  );
}
