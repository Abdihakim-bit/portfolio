import React from 'react';
import Styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={Styles.about} style={{ borderTop: '1px solid var(--border)', padding: '40px 0' }}>
            <div className={Styles.container}>
                <h2 className={Styles.heading}>A bit about Me</h2>
                <p className={Styles.description}>
                    I'm a software developer based in Ontario, Canada, with a background in Telecommunications Engineering. I specialize in building fast, secure web applications and robust digital tools tailored for small businesses and freelance clients.
                </p>
                <p className={Styles.description}>
                    When I'm not writing code or configuring infrastructure, I stay grounded through my personal life; diving into epic fantasy novels, gaming, and traveling to experience new cultures and landscapes around the world.
                </p>
            </div>
        </section>
    );
}