import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


import githubIcon from './github-white-icon.png';
import linkedinIcon from './linkedin.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    ...styles.nav,
    boxShadow: scrolled ? '0 1px 30px rgba(0,0,0,0.5)' : 'none',
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={styles.logo}>P.Bangal</NavLink>

      
      <ul style={styles.navLinks}>
        <li>
          <NavLink to="/" end style={styles.navA}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" style={styles.navA}>
            Projects
          </NavLink>
        </li>

        
        <li>
          <a 
            href="https://github.com/prasamitab" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.iconLink}
          >
            <img src={githubIcon} alt="GitHub" style={styles.iconImg} />
          </a>
        </li>

        
        <li>
          <a 
            href="https://linkedin.com/in/prasamita-bangal-3b1088215" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.iconLink}
          >
            <img src={linkedinIcon} alt="LinkedIn" style={styles.iconImg} />
          </a>
        </li>
      </ul>

      
      <button
        className="mobile-nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <NavLink to="/" onClick={() => setMenuOpen(false)} style={styles.mobileLink}>Home</NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)} style={styles.mobileLink}>Projects</NavLink>

          {/* keep text here for clarity */}
          <a href="https://github.com/prasamitab" target="_blank" rel="noopener noreferrer" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            GitHub ↗
          </a>

          <a href="https://linkedin.com/in/prasamita-bangal-3b1088215" target="_blank" rel="noopener noreferrer" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            LinkedIn ↗
          </a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0 2rem',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(8, 8, 16, 0.9)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(240, 240, 248, 0.08)',
    transition: 'box-shadow 0.3s ease',
  },

  logo: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '1.15rem',
    color: '#b8ff57',
    textDecoration: 'none',
    letterSpacing: '-0.02em',
  },

  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    listStyle: 'none',
  },

  navA: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.78rem',
    color: 'rgba(240, 240, 248, 0.5)',
    textDecoration: 'none',
    padding: '6px 14px',
    borderRadius: '100px',
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
  },

  // 🔥 ICON STYLE
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  },

  iconImg: {
    width: '18px',
    height: '18px',
    objectFit: 'contain',
    filter: 'brightness(0.8)',
  },

  mobileMenu: {
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    background: 'rgba(8, 8, 16, 0.97)',
    borderBottom: '1px solid rgba(240, 240, 248, 0.08)',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  mobileLink: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.88rem',
    color: 'rgba(240, 240, 248, 0.7)',
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.03)',
  },
};