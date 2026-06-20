import React from 'react';
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';

const YOUR_NAME = 'Abdihakim Ali';

export default function App() {
  return (
    <>
      <Nav name={YOUR_NAME} />
      <main>  
          <Hero name={YOUR_NAME} />
      </main>
    </>
  );
}
