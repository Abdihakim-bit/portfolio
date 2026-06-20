import React from 'react';
import styles from './About.module.css';

export default function About() {
  const lifeGallery = [
    {
      category: 'Milestones & Expeditions',
      images: [
        { src: 'https://res.cloudinary.com/doprdhnvp/image/upload/q_auto/f_auto/v1781993376/Graduation_kvywvv.png', alt: 'Graduation celebration' },
        { src: 'https://res.cloudinary.com/doprdhnvp/image/upload/q_auto/f_auto/v1781992586/Desert_cm5vwc.jpg', alt: 'Desert landscape travel snapshot' },
        { src: 'https://res.cloudinary.com/doprdhnvp/image/upload/q_auto/f_auto/v1781992584/ChineseName_esdev2.jpg', alt: '方天瑞' }
      ]
    },
    {
      category: 'Cultural Immersion',
      images: [
        { src: 'https://res.cloudinary.com/doprdhnvp/image/upload/q_auto/f_auto/v1781992587/Giraffe_twjqsw.jpg', alt: 'Giraffe Feeding' },
        { src: 'https://res.cloudinary.com/doprdhnvp/image/upload/q_auto/f_auto/v1781992588/Maasai_wzutr3.jpg', alt: 'Cultural and language exploration' }
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