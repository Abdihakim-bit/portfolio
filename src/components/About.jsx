import React from 'react';
import styles from './About.module.css';

export default function About() {
  const lifeGallery = [
    {
      category: 'Milestones & Expeditions',
      images: [
        { src: '/images/Graduation.JPEG', alt: 'Graduation celebration' },
        { src: '/images/Desert.JPG', alt: 'Desert landscape travel snapshot' },
        { src: '/images/ChineseName.JPEG', alt: '方天瑞' }
      ]
    },
    {
      category: 'Cultural Immersion',
      images: [
        { src: '/images/Giraffe.jpg', alt: 'Giraffe Feeding' },
        { src: '/images/Maasai.jpg', alt: 'Cultural and language exploration' }
      ]
    }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">A bit about me</h2>
        
        <div className={styles.mainGrid}>
          <div>
            <p className={styles.bioText}>
              I'm a software developer based in Ontario, Canada, with a background in Telecommunications Engineering. I specialize in building fast, secure web applications and robust digital tools tailored for small businesses and freelance clients.
            </p>
            <p className={styles.bioTextLast}>
              When I'm not writing code or configuring infrastructure, I stay grounded through my personal life; diving into epic fantasy novels, gaming, and traveling to experience new cultures and landscapes around the world.
            </p>
          </div>
          
          <div>
            <div className={styles.terminalCard}>
              <p className={styles.terminalCommand}>$ whoami</p>
              <p className={styles.terminalAccent}>Fullstack-Developer</p>
              <p className={styles.terminalOutputCmd}>$ cat status.txt</p>
              <p className={styles.terminalBody}>
                ✓ Available for contract & freelance gig work<br />
                ✓ Specialized in Full-Stack Web, Native Android and Windows apps, & Security<br />
                ✓ Linux & Docker container setups<br />
                ✓ Based in Ontario, Canada
              </p>
            </div>
          </div>
        </div>

        {/* Structured Image Gallery Categories */}
        <div className={styles.galleryContainer}>
          <h3 className={styles.gallerySectionLabel}>
            // Life outside the terminal
          </h3>
          
          <div className={styles.galleryCategoryGroup}>
            {lifeGallery.map((section, sIdx) => (
              <div key={sIdx}>
                <h4 className={styles.categoryTitle}>
                  {section.category}
                </h4>
                
                <div className={styles.imageGrid}>
                  {section.images.map((img, imgIdx) => (
                    <div key={imgIdx} className={styles.cardFrame}>
                      <div className={styles.imageAspectBox}>
                        <img src={img.src} alt={img.alt} className={styles.galleryImage} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}