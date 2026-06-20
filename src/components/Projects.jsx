import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Metra Sign Official Website',
    tag: 'Client work',
    tagColor: 'var(--accent)',
    tagBg: 'var(--accent-dim)',
    description:
      'Designed and deployed the official web presence for a deep-tech road safety startup. Developed a fully responsive system emphasizing web accessibility, intuitive UI/UX navigation, and optimized media delivery to effectively showcase predictive crash avoidance solutions.',
    tech: ['WordPress', 'Hostinger', 'CSS Grid', 'Flexbox', 'UI/UX Design'],
    link: 'https://MetraSign.com',
    github: null, 
  },
  {
    title: 'Web-Based Image Sharing Platform',
    tag: 'Academic',
    tagColor: '#eab308', 
    tagBg: 'rgba(234,179,8,0.1)',
    description:
      'Built a secure, client-server photo-sharing web application utilizing a layered architecture. Implemented robust API authentication utilizing the Auth0 PKCE flow and JWT verification alongside automated Docker containerization to pass rigorous load and stress performance testing.',
    tech: ['React', 'Python', 'Flask', 'SQLite', 'Auth0', 'JWT', 'Docker Compose'],
    link: null,
    github: { frontend: 'https://github.com/Team-10-Project-6/WebServer-FrontEnd', backend: 'https://github.com/Team-10-Project-6/WebServer-BackendAPI' },
  },
  {
    title: 'Airline Fuel Management System',
    tag: 'Academic',
    tagColor: '#eab308',
    tagBg: 'rgba(234,179,8,0.1)',
    description:
      'Engineered a highly optimized, parallel multi-threaded server application to process real-time aircraft telemetry data. Designed to handle concurrent streams from over 4,000 parallel clients, maintaining database integrity and recalculating flight fuel consumption metrics seamlessly even during abrupt network dropouts.',
    tech: ['C++', 'Multithreading', 'TCP/IP Sockets', 'Network Programming', 'Thread Pools'],
    link: null,
    github: 'https://github.com/Team-10-Project-6/Airline-Fuel-Management', 
  },
];

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.badge} style={{ background: project.tagBg, color: project.tagColor }}>
          {project.tag}
        </span>
        
        <div className={styles.linksGroup}>
          {project.github && (
            typeof project.github === 'object' ? (
              <div className={styles.splitLinksBox}>
                <a  href={project.github.frontend}  target="_blank"  rel="noreferrer" className={styles.splitLink}>
                  frontend
                </a>
                <span className={styles.divider}>|</span>
                <a href={project.github.backend} target="_blank" rel="noreferrer" className={styles.splitLink}>
                  backend
                </a>
                <span>↗</span>
              </div>
            ) : (
              <a href={project.github} target="_blank" rel="noreferrer" className={styles.monoLink}>
                github ↗
              </a>
            )
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className={styles.accentLink}>
              live ↗
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      
      <div className={styles.techContainer}>
        {project.tech.map(t => (
          <span key={t} className={styles.techTag}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've built</h2>
        
        <div className={styles.cardList}>
          {projects.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}