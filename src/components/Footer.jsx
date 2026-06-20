import React from 'react';

export default function Footer({ name }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)', padding: '28px 24px',
      textAlign: 'center',
    }}>
      <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} {name} — built with React & Vite
      </p>
    </footer>
  );
}
