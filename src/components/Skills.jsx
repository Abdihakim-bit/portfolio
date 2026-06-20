import React from 'react';
import styles from './Skills.module.css';

const skills = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'C#', 'Java', 'JavaScript (ES6+)', 'Bash', 'SQL'],
  },
  {
    category: 'Frontend & Backend Frameworks',
    items: ['React', 'Node.js', 'Flask', '.NET', 'REST APIs', 'HTML5 / CSS3'],
  },
  {
    category: 'Security & Networking',
    items: ['Wireshark', 'Nmap', 'Nessus', 'OpenVAS', 'ELK Stack', 'TCP/IP', 'SSH', 'Active Directory'],
  },
  {
    category: 'Infrastructure & DevOps',
    items: ['Docker & Docker Compose', 'Linux (Arch/Ubuntu/Kali)', 'GitHub Actions', 'Azure DevOps', 'VirtualBox'],
  },
  {
    category: 'Tools & Certifications',
    items: ['Postman', 'Git', 'CompTIA Security+', 'ISC² Certified in Cybersecurity (CC)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work with</h2>
        
        <div className={styles.grid}>
          {skills.map(group => (
            <div key={group.category} className={styles.categoryCard}>
              <p className={styles.categoryTitle}>
                {group.category}
              </p>
              <ul className={styles.itemList}>
                {group.items.map(item => (
                  <li key={item} className={styles.skillItem}>
                    <span className={styles.arrowIndicator}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}