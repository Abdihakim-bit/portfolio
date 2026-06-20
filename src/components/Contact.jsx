// src/components/Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';

const YOUR_EMAIL = 'abdihakimbit@gmail.com';
const YOUR_GITHUB = 'https://github.com/Abdihakim-bit';
const YOUR_LINKEDIN = 'https://www.linkedin.com/in/abdihakim-ali/';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) return;
    
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`);
    setSent(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's work together</h2>
        
        <div className={styles.grid}>
          <div>
            <p className={styles.introText}>
              Have a project in mind? I'd love to hear about it.
              Drop me a message and I'll get back to you as soon as possible.
            </p>
            
            <div className={styles.socialsGroup}>
              <a href={`mailto:${YOUR_EMAIL}`} className={styles.socialLink}>
                <span className={styles.socialIndicator}>→</span>
                {YOUR_EMAIL}
              </a>
              <a href={YOUR_GITHUB} target="_blank" rel="noreferrer" className={styles.socialLink}>
                <span className={styles.socialIndicator}>→</span>
                GitHub
              </a>
              <a href={YOUR_LINKEDIN} target="_blank" rel="noreferrer" className={styles.socialLink}>
                <span className={styles.socialIndicator}>→</span>
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.formContainer}>
            {sent ? (
              <div className={styles.successBox}>
                <p className={styles.successText}>
                  ✓ message sent — I'll be in touch soon.
                </p>
              </div>
            ) : (
              <>
                <input
                	type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className={styles.inputField}
                />
                <input
                  type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} className={styles.inputField}
                />
                <textarea
                  placeholder="Your message" value={message} rows={5} onChange={e => setMessage(e.target.value)} className={styles.textArea}
                />
                <button onClick={handleSubmit} className={styles.sendBtn}>
                  Send message
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}