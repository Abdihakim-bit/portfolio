import React, { useEffect, useState } from 'react';
import styles from './Nav.module.css';


const links = ['About', 'Projects', 'Skills', 'Contact'];

export default function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled || menuOpen ? styles.navbarScrolledOrOpen : ''}`}>

        <a href="#" onClick={handleLinkClick} className={styles.brandLink}>
          <span className={styles.brandText}>
            {name.replace(' ', '.')}
          </span>
        </a>

        <div className={styles.desktopLinks} style={{ display: 'flex', gap: 28 }}>
          {links.map(l => (
            <a key={l} href={`#${l}`.toLowerCase()} className={styles.desktopLink}>
              {l}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className={styles.hamburgerBtn} aria-label="Toggle Navigation Menu">
          <div className={styles.hamburgerLine} style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <div className={styles.hamburgerLine} style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className={styles.hamburgerLine} style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l}`.toLowerCase()} onClick={handleLinkClick} className={styles.mobileLink}>
            {l}
          </a>
        ))}
      </div>
      
    </>    
  );
}
