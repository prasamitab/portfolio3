import React, { useState, useEffect, useRef } from 'react';

/* ─── DATA ─── */
const projects = [
  {
    id: 1,
    title: 'Project Chronos',
    category: 'AI/ML & NLP',
    categoryColor: '#b8ff57',
    
    desc: 'AI-driven web app decoding internet slang using the Gemini and Custom Search APIs for contextual analysis. Showcases complex API chaining and multi-source semantic understanding.',
    tags: ['Gemini API', 'Streamlit', 'NLP', 'Python'],
    github: 'https://github.com/prasamitab/project-chronos-pro',
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7401560774420316160/',
    featured: true,
  },
  {
    id: 2,
    title: 'DroneTalk',
    category: 'AI/ML & NLP',
    categoryColor: '#b8ff57',
    
    desc: 'NLP system converting natural language commands ("Fly 50m north") into structured drone mission actions using intent classification and entity extraction.',
    tags: ['NLP', 'Intent Classification', 'Python'],
    github: 'https://github.com/prasamitab/NLP_FINAL_PROJECT_DRONETALK',
    
    featured: true,
  },
  {
    id: 3,
    title: 'AI-Driven IDS',
    category: 'Cybersecurity',
    categoryColor: '#ff5757',
    
    desc: 'Designed an AI-powered network intrusion detection system using Random Forest and SVM on the NSL-KDD dataset. Published research on results and methodology.',
    tags: ['Random Forest', 'SVM', 'Scikit-learn', 'Research Paper'],
    github: 'https://github.com/prasamitab/ai-ids-dashboard',
    paper: 'https://jualumnihyd.in/entries/symposiumeditionsep25/ai-driven-cyber-security-building-intelligent-intrusion-detection-systems',
    featured: true,
  },
  {
    id: 4,
    title: 'Smart Medicine Return',
    category: 'Web Development',
    categoryColor: '#57e5ff',
    
    desc: 'Cross-platform Flutter + Firebase application for medicine disposal and supply chain visibility. Helps patients find nearby pharmacies, check stock, and return unused medicines.',
    tags: ['Flutter', 'Firebase', 'Full-Stack'],
    github: 'https://github.com/prasamitab/Smart-Pharma-Finder-Flutter',
    Website: 'https://pharmafinderapp-15977.web.app/',
  },
  
  
  {
    id: 5,
    title: 'Yoga Pose Search',
    category: 'AI/ML & NLP',
    categoryColor: '#b8ff57',
    
    desc: 'Pose-recognition prototype that detects and identifies yoga postures in real-time using computer vision. Compares detected pose keypoints against a reference database.',
    tags: ['OpenCV', 'Computer Vision', 'Python'],
    github: 'https://github.com/prasamitab/yoga-pose-recommender',
  },
  {
    id: 6,
    title: 'Turn-Based Civilization Game',
    category: 'Web Development',
    categoryColor: '#57e5ff',
    
    desc: 'Strategy game built using Java threads and GUI. Features multi-civilization gameplay, resource management, and combat simulation with concurrent turn processing.',
    tags: ['Java', 'Threads', 'GUI', 'OOP'],
    github: 'https://github.com/prasamitab/civilization-strategy-sim',
  },
  {
    id: 7,
    title: 'Digital Wellbeing Analysis',
    category: 'Cybersecurity',
    categoryColor: '#ff5757',
    
    desc: 'Analyzing behavioural data and online habits to raise awareness of digital safety patterns. Visualises screen time, risky behaviour metrics, and intervention recommendations.',
    tags: ['Pandas', 'Visualization', 'Python'],
  },
  
];

const FILTERS = ['All', 'AI/ML & NLP', 'Web Development', 'Cybersecurity'];

/* ─── SCROLL REVEAL ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── PROJECT CARD ─── */
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.featured && (
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.62rem',
            color: '#b8ff57',
            background: 'rgba(184,255,87,0.1)',
            border: '1px solid rgba(184,255,87,0.3)',
            padding: '3px 10px',
            borderRadius: '100px',
            letterSpacing: '0.1em',
          }}>FEATURED</span>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
        <div className="project-card-icon" style={{ background: `${project.categoryColor}15` }}>
          <span>{project.icon}</span>
        </div>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.68rem',
          color: project.categoryColor,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          {project.category}
        </span>
      </div>

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-desc">{project.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tags.map(t => (
          <span key={t} className="tag" style={{
            borderColor: `${project.categoryColor}20`,
            color: `${project.categoryColor}99`,
          }}>
            {t}
          </span>
        ))}
      </div>

      <div className="project-card-footer" style={{ paddingTop: '1rem', borderTop: '1px solid rgba(240,240,248,0.06)' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              style={{ padding: '8px 16px', fontSize: '0.72rem' }}
              onClick={e => e.stopPropagation()}
            >
              GitHub ↗
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.72rem' }}
              onClick={e => e.stopPropagation()}
            >
              Live Demo →
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ padding: '8px 16px', fontSize: '0.72rem', background: 'rgba(255,87,87,0.15)', color: '#ff5757', border: '1px solid rgba(255,87,87,0.3)' }}
              onClick={e => e.stopPropagation()}
            >
              Paper ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── PROJECTS PAGE ─── */
export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="page">
      <div style={styles.bgOrb1} className="orb orb-green" />
      <div style={styles.bgOrb2} className="orb orb-purple" />

      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="label">Work</p>
          <h1 className="section-title" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
            Project <span className="accent">Showcase</span>
          </h1>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontWeight: 300,
            fontSize: '0.9rem',
            color: 'rgba(240,240,248,0.45)',
            marginBottom: '3rem',
            maxWidth: '500px',
          }}>
            {projects.length} projects across AI/ML, web development, and cybersecurity.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="filter-bar">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid-3" style={{ position: 'relative' }}>
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(240,240,248,0.3)' }}>
            No projects in this category yet.
          </div>
        )}

        {/* GitHub CTA */}
        <Reveal delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(240,240,248,0.06)' }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300, fontSize: '0.88rem', color: 'rgba(240,240,248,0.4)', marginBottom: '1.5rem' }}>
              More projects and code available on GitHub
            </p>
            <a
              href="https://github.com/prasamitab"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              🐙 View GitHub Profile →
            </a>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'rgba(240,240,248,0.2)' }}>
          © 2025 Prasamita Bangal
        </span>
      </footer>
    </div>
  );
}

const styles = {
  bgOrb1: {
    width: '500px',
    height: '500px',
    top: '0',
    right: '0',
    position: 'absolute',
    zIndex: 0,
  },
  bgOrb2: {
    width: '400px',
    height: '400px',
    bottom: '20%',
    left: '-10%',
    position: 'absolute',
    zIndex: 0,
  },
  footer: {
    borderTop: '1px solid rgba(240,240,248,0.06)',
    padding: '2rem',
    textAlign: 'center',
  },
};
