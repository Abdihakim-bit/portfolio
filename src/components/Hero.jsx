import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const roles = [
  'Fullstack Developer.',
  'Software Engineer.'
];

export default function Hero({ name }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container">

        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>{name}</h1>

        <div className={styles.role}>
          <span className={styles.prompt}>&gt; </span>
            {displayed}
          <span className={styles.cursor} style={{ opacity: blink ? 1 : 0 }}>_</span>
        </div>

        <p className={styles.tagline}>
          I build clean, functional applications; web and native, from idea to deployment.
          Available for freelance work.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View my work</a>
          <a href="#contact" className={styles.btnSecondary}>Get in touch</a>
        </div>
      </div>
    </section>
  );
}