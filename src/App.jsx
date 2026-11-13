import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const NAME = 'Abdihakim Ali';

export default function App() {
  return (
    <>
      <Nav name={NAME} />
      <main>  
          <Hero name={NAME} />
          <About />
          <Projects />
          <Skills />
          <Contact />
      </main>
      <Footer name={NAME} />
      <Analytics />
    </>
  );
}
