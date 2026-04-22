import React, { useState, useEffect, useRef } from 'react';
import photo from './photo.jpg'; 
import githubIcon from './github-white-icon.png';
import { Link } from 'react-router-dom';

/* ─── DATA ─── */
const skills = [
  {
    category: 'AI / Machine Learning',
    color: '#b8ff57',
    
    items: ['Python', 'Scikit-learn', 'Regression', 'Classification', 'NLP', 'Gemini API', 'Computer Vision', 'Pandas', 'NumPy'],
  },
  {
    category: 'Web Development',
    color: '#57e5ff',
    
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Flask', 'jQuery', 'Full-Stack', 'Flutter'],
  },
  {
    category: 'Cybersecurity',
    color: '#ff5757',
    
    items: ['Network Basics', 'Drone Forensics', 'Investigation Tools', 'Risk Mitigation', 'Security Protocols', 'Hack The Box'],
  },
  {
    category: 'Design & Creative',
    color: '#c457ff',
    
    items: ['Figma', 'Canva', 'Photoshop', 'Graphic Design', 'UI/UX Principles'],
  },
  {
    category: 'Tools & Concepts',
    color: '#ffd557',
    
    items: ['Git & GitHub', 'VS Code', 'MATLAB', 'DSA', 'OOP', 'Scientific Reporting', 'Java'],
  },
];

const milestones = [
  { year: '2028', title: 'Expected Graduation', desc: 'Integrated M.Tech CSE at Mahindra University' },
  { year: '2026', title: 'Intern at DLRL DRDO', desc: 'Airborne ESM Technologies — Anomaly Detection by UAVs' },
  { year: '2025', title: 'AI/ML Intern at CSIR-IICT', desc: 'Applied ML to healthcare and biotech data' },
  { year: '2025', title: 'Project Chronos & DroneTalk', desc: 'Built complex API projects and NLP-driven drone command systems' },
  { year: '2025', title: 'Full-Stack MediReturn App', desc: 'Web app for locating & returning medicines at nearby pharmacies' },
  { year: '2023', title: 'Enrolled in Integrated M.Tech', desc: 'Core DSA, Python, Cybersecurity, Big Data & AI/ML' },
];

const researchInterests = [
  { label: 'Natural Language Processing', desc: 'Intent classification, slang decoding, conversational AI' },
  { label: 'Computer Vision', desc: 'Pose detection, anomaly detection, UAV-based surveillance' },
  { label: 'Cybersecurity & Forensics', desc: 'Drone forensics, network intrusion detection, digital evidence recovery' },
  { label: 'Predictive Analytics', desc: 'Fault detection, maintenance prediction on IoT/sensor data' },
];

const awards = [
  

  'Published paper on AI-based Intrusion Detection Systems, Jadavpur University Symposium',
  'Awarded Merit Scholarship in 2023 and 2025 for outstanding academic performance',
  'Ranked in Top 10 in AI Student Of the Year Hackathon, Mahindra University',
  'Completed Linux Fundamentals certification from Hack The Box',
  'Web Development — Corizo Certification',
  'Awarded Merit Certificate for Arduino Workshop (Hands-on Embedded Systems)'
];

const extras = ['Sketching & Painting', 'Abacus Graduate', 'Singing Competition Winner', 'Swimming' ,'Dancing' , 'Chess','Badminton'];

const TYPING_STRINGS = [
  'Exploring Intelligence from Drones to Data ',
  'Bridging AI, Web & Cyber Worlds ',
  'Creative Technologist & Innovator ',
];

/* ─── TYPING HOOK ─── */
function useTyping(strings) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timeout;

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx(c => c + 1), 50);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(c => c - 1), 30);
      } else {
        setDeleting(false);
        setIdx(i => (i + 1) % strings.length);
      }
    }

    setText(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings]);

  return text;
}

/* ─── SCROLL-REVEAL HOOK ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/* ─── REVEAL WRAPPER ─── */
function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── HOME PAGE ─── */
export default function Home() {
  const typingText = useTyping(TYPING_STRINGS);

  return (
    <div className="page">

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.orbGreen} className="orb orb-green" />
        <div style={styles.orbPurple} className="orb orb-purple" />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="label animate-fade-up delay-1">Portfolio 2026</p>

          <h1 className="hero-title animate-fade-up delay-2" style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Hi, I'm
            <br />
            <span className="accent">Prasamita</span>
            <br />
            Bangal.
          </h1>

          <div style={styles.typingContainer} className="animate-fade-up delay-3">
            <span style={styles.typingText}>{typingText}</span>
            <span className="cursor" />
          </div>

          <p style={styles.heroSub} className="animate-fade-up delay-4">
            3rd-year Integrated M.Tech CSE student at Mahindra University.
            <br />Specialising in <strong style={{ color: '#b8ff57' }}>AI/ML</strong>, <strong style={{ color: '#57e5ff' }}>NLP</strong>, and <strong style={{ color: '#ff5757' }}>Cybersecurity</strong>.
            <br />CGPA: <strong style={{ color: '#b8ff57' }}>7.8 / 10.0</strong>
            <br />SGPA: <strong style={{ color: '#b8ff57' }}>8.9 / 10.0</strong>
          </p>

          <div style={styles.heroCta} className="animate-fade-up delay-4">
  <Link to="/projects" className="btn btn-primary">View Projects →</Link>

  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=prasamita.bangal.pb@gmail.com" 
    className="btn btn-ghost"
  >
    Get in Touch
  </a>

  
  <a 
    href="/resume.pdf" 
    download 
    className="btn btn-primary"
  >
    Download Resume ↓
  </a>
</div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) =>
            ['Python', 'React', 'NLP', 'Cybersecurity', 'Flutter', 'Gemini API', 'Drone Forensics', 'ML Research', 'Figma', 'Flask'].map(t => (
              <span key={t + i} style={styles.marqueeItem}>
                <span style={{ color: '#b8ff57', marginRight: '8px' }}>✦</span>
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── ABOUT ME ── */}
      <section className="section" id="about">
        <Reveal>
          <p className="label">About</p>
          <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
            Who I <span className="accent">Am</span>
          </h2>
        </Reveal>

        <div style={styles.aboutGrid}>
          <Reveal delay={0.1}>
           
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <img
  src={photo}
  alt="Profile"
  className="avatar"
  style={{ width: '150px', height: '150px', borderRadius: '50%' }}
/>

              <div style={{ width: '100%' }}>
                <p className="label" style={{ marginBottom: '1rem' }}>Personal Details</p>
                <div style={styles.detailsCard}>
                  {[
                    { label: 'Full Name', value: 'Prasamita Bangal' },
                    { label: 'Phone', value: '+91 6309364961' },
                    { label: 'Email (Personal)', value: 'prasamita.bangal.pb@gmail.com' },
                    { label: 'Email (College)', value: 'se23umcs048@mahindrauniversity.edu.in' },
                    { label: 'University', value: 'Mahindra University, Hyderabad' },
                    { label: 'Program', value: 'Integrated B.Tech + M.Tech CSE' },
                    { label: 'CGPA', value: '7.8 / 10.0' },
                    { label: 'Graduating Year', value: '2028' },
                  ].map(d => (
                    <div key={d.label} style={styles.detailRow}>
                      <span style={styles.detailLabel}>{d.label}</span>
                      <span style={styles.detailValue}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.15}>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <p style={{ lineHeight: 1.85, color: 'rgba(240,240,248,0.8)', fontFamily: "'DM Mono', monospace", fontWeight: 300, fontSize: '0.9rem' }}>
                  I'm a 3rd-year Integrated M.Tech CSE student passionate about combining creativity with technology. My work spans{' '}
                  <strong style={{ color: '#b8ff57' }}>AI/ML research at CSIR-IICT</strong>, scalable full-stack web applications, and cutting-edge{' '}
                  <strong style={{ color: '#ff5757' }}>Cybersecurity research</strong>. I believe in solving real-world problems through a blend of technical strength, innovation, and thoughtful design.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card">
                <p style={{ lineHeight: 1.85, color: 'rgba(240,240,248,0.8)', fontFamily: "'DM Mono', monospace", fontWeight: 300, fontSize: '0.9rem' }}>
                  My academic path is centred on cutting-edge <strong style={{ color: '#57e5ff' }}>AI/ML applications</strong>, with a strong emphasis on{' '}
                  <strong style={{ color: '#ff5757' }}>security protocols</strong> and <strong style={{ color: '#57e5ff' }}>scalable web development</strong>. I thrive at the intersection of these fields — from{' '}
                  <strong style={{ color: '#b8ff57' }}>Flutter development</strong> and <strong style={{ color: '#b8ff57' }}>Gemini API integration</strong> to drone forensics and network intrusion detection.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      
      <section className="section" id="research" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="label">Focus Areas</p>
          <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
            Research <span className="accent">Interests</span>
          </h2>
        </Reveal>
        <div className="grid-2">
          {researchInterests.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.1}>
              <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', flexShrink: 0 }}>{r.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '6px' }}>{r.label}</h3>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300, fontSize: '0.82rem', color: 'rgba(240,240,248,0.55)', lineHeight: 1.6 }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="label">Technical Stack</p>
          <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
            Skills & <span className="accent">Tools</span>
          </h2>
        </Reveal>

        <div className="grid-3">
          {skills.map((s, i) => (
            <Reveal key={s.category} delay={i * 0.08}>
              <div className="card" style={{ borderTop: `2px solid ${s.color}30`, height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                  <h3 style={{ fontSize: '0.95rem', color: s.color }}>{s.category}</h3>
                </div>
                <div className="skill-pills">
                  {s.items.map(item => (
                    <span key={item} className="tag" style={{ borderColor: `${s.color}25`, color: `${s.color}cc`, background: `${s.color}0a` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      <section className="section" id="journey" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="label">Journey</p>
          <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            My <span className="accent">Timeline</span>
          </h2>
        </Reveal>
        <div 
  style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', // bigger cards
    gap: '1.5rem',
    alignItems: 'stretch'
  }}
>
          <Reveal delay={0.1}>
            <div className="timeline">
              {milestones.map((m, i) => (
                <div key={m.year + m.title} className="timeline-item">
                  <div className="timeline-year">{m.year}</div>
                  <div className="timeline-title">{m.title}</div>
                  <div className="timeline-desc">{m.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { n: '10+', l: 'Projects Built' },
                  { n: '2', l: 'Internships' },
                  { n: '7.8', l: 'CGPA' },
                  { n: '3+', l: 'Years Coding' },
                ].map(s => (
                  <div key={s.l} className="stat-box">
                    <div className="stat-number">{s.n}</div>
                    <div className="stat-label">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div className="card">
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#ffd557' }}>🏆 Achievements and Certifications</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {awards.map(a => (
                    <li key={a} style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300, fontSize: '0.82rem', color: 'rgba(240,240,248,0.7)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#b8ff57', fontSize: '0.6rem' }}>▶</span> {a}
                    </li>
                  ))}
                </ul>
              </div>

              
              <div style={{ marginTop: '1rem' }}>
                <p className="label" style={{ marginBottom: '12px' }}>Extracurriculars</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {extras.map(e => (
                    <span key={e} className="tag tag-accent">{e}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="label">Experience & Leadership</p>
          <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
            Work & <span className="accent">Roles</span>
          </h2>
        </Reveal>
        {[
          { role: 'Intern — Airborne Technologies', company: 'DLRL DRDO', desc: 'Anomaly Detection and ML models in UAVs (Airborne ESM Technologies)' },
          { role: 'AI/ML Intern', company: 'CSIR-IICT', desc: 'Applied machine learning techniques to real-world healthcare and biotech datasets.' },
          { role: 'Student Council Member', company: 'Mahindra University', desc: 'Contributed to university governance, policy discussions, and campus initiatives.' },
          { role: 'Placement Coordinator', company: 'Mahindra University', desc: 'Coordinator between Placement Cell and students and give opportunities.' },
          { role: 'Secretary', company: 'Swimming Club', desc: 'Streamlined club communications and managed logistics for competitions.' },
        ].map((e, i) => (
          <Reveal key={e.role} delay={i * 0.08}>
            <div className="exp-entry">
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">@ {e.company}</div>
              <div className="exp-desc">{e.desc}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── CONTACT ── */}
      <section className="section" id="contact" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="label">Contact</p>
          <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
            Let's <span className="accent">Connect</span>
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Reveal delay={0.1}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prasamita.bangal.pb@gmail.com" className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <div className="contact-label">Personal Email</div>
                <div className="contact-value">prasamita.bangal.pb@gmail.com</div>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=se23umcs048@mahindrauniversity.edu.in" className="contact-item">
              <div className="contact-icon">🎓</div>
              <div>
                <div className="contact-label">College Email</div>
                <div className="contact-value">se23umcs048@mahindrauniversity.edu.in</div>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="https://linkedin.com/in/prasamita-bangal-3b1088215" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">prasamita-bangal-3b1088215</div>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.25}>
  <a 
    href="https://github.com/prasamitab" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="contact-item"
  >
    <div className="contact-icon">
      <img 
        src={githubIcon} 
        alt="GitHub" 
        style={{ width: "24px", height: "24px", objectFit: "contain" }} 
      />
    </div>

    <div>
      <div className="contact-label">GitHub</div>
      <div className="contact-value">github.com/prasamitab</div>
    </div>
  </a>
</Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Open to Opportunities</h3>
            <p style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300, color: 'rgba(240,240,248,0.5)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Internships, research collaborations, or just an interesting conversation.
            </p>
          </div>
        </Reveal>
      </section>

      
    </div>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    position: 'relative',
  },
  orbGreen: {
    width: '600px',
    height: '600px',
    top: '10%',
    right: '-15%',
    position: 'absolute',
  },
  orbPurple: {
    width: '400px',
    height: '400px',
    bottom: '10%',
    left: '-10%',
    position: 'absolute',
  },
  typingContainer: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    minHeight: '2rem',
    display: 'flex',
    alignItems: 'center',
  },
  typingText: {
    fontFamily: "'DM Mono', monospace",
    fontWeight: 300,
    fontSize: '1.1rem',
    color: 'rgba(240,240,248,0.6)',
  },
  heroSub: {
    fontFamily: "'DM Mono', monospace",
    fontWeight: 300,
    fontSize: '0.92rem',
    color: 'rgba(240,240,248,0.55)',
    lineHeight: 2,
    marginBottom: '2.5rem',
  },
  heroCta: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  marqueeItem: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.78rem',
    color: 'rgba(240,240,248,0.4)',
    letterSpacing: '0.08em',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'clamp(280px, 37%, 420px) 1fr',
    gap: '3rem',
    alignItems: 'start',
  },
  detailsCard: {
    background: 'rgba(15,15,26,0.8)',
    border: '1px solid rgba(240,240,248,0.08)',
    borderRadius: '12px',
    width: '100%',          
  maxWidth: '420px',      
  
  padding: '1rem',
  },
  detailRow: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 16px',
    borderBottom: '1px solid rgba(240,240,248,0.05)',
    gap: '4px',   
  },
  detailLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    color: '#b8ff57',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '2px',
  },
  detailValue: {
    fontSize: '0.85rem',
    color: 'rgba(240,240,248,0.8)',
    fontFamily: "'DM Mono', monospace",
    fontWeight: 300,
  
    wordBreak: 'break-word',     
    overflowWrap: 'break-word',  
  },
  footer: {
    borderTop: '1px solid rgba(240,240,248,0.06)',
    padding: '2rem',
    textAlign: 'center',
  },
};
