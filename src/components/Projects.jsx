import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, Figma } from 'lucide-react';
import './Projects.css';

const devProjects = [
  {
    title: 'Aroga Healthcare System',
    subtitle: 'Front-end Development · Group Project · 2025',
    desc: 'Designed and developed the calendar and appointment dashboard interface for a clinic management system. Implemented features to add, view, edit, and delete patient appointments through a user-friendly interface.',
    highlights: [
      'Responsive UI aligned with overall system design standards',
      'Simplified appointment scheduling & time-slot management',
      'Patient record views for clinic staff and doctors',
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Quactica'],
    type: 'dev',
    emoji: '🏥',
  },
  {
    title: 'WebCAD Application',
    subtitle: 'Level 2 Software Dev Project · Group Project · 2024–2025',
    desc: 'A cutting-edge geometry creation web app built on browser architecture. Offers a centralized platform for creating, editing, and managing 2D and 3D models with real-time collaboration.',
    highlights: [
      'Precise 2D/3D geometry creation and editing tools',
      'Real-time collaboration via Socket.io',
      'File import/export in multiple formats (full stack)',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Three.js', 'Socket.io'],
    type: 'dev',
    emoji: '📐',
  },
  {
    title: 'Quatica – Automated Aquarium System',
    subtitle: 'Hardware + Software Project',
    desc: 'A system designed to automate essential aquarium management tasks and provide real-time updates, making aquarium care simple, efficient, and cost-effective.',
    highlights: [
      'Real-time monitoring dashboard',
      'Automated feeding and filtration control',
      'Mobile-friendly status updates',
    ],
    stack: ['IoT', 'React', 'Node.js'],
    type: 'dev',
    emoji: '🐠',
  },
];

const uiProjects = [
  {
    title: 'FinTrack – Budget & Savings App',
    subtitle: 'UI Design · Group Project · Figma · 2025',
    desc: 'A mobile application that helps students track expenses, manage budgets, and improve saving habits.',
    highlights: [
      'Profile, preferences, security, and support screens',
      'Consistent color system, typography & spacing',
      'Interactive prototype in Figma',
    ],
    stack: ['Figma', 'UI Design', 'Prototyping'],
    type: 'ui',
    emoji: '💰',
  },
  {
    title: 'EcoBite – Food Waste Reduction App',
    subtitle: 'Personal UI/UX Project · Figma · 2025',
    desc: 'A mobile application concept to reduce household food waste through intuitive tracking and awareness features.',
    highlights: [
      'User flows, wireframes & high-fidelity screens',
      'Simple food tracking experience',
      'Focused on intuitive navigation',
    ],
    stack: ['Figma', 'UX Research', 'Wireframing'],
    type: 'ui',
    emoji: '🥗',
  },
  {
    title: 'ALmate – A/L Student Learning App',
    subtitle: 'Personal UI Design Project · Figma',
    desc: 'Mobile app UI for Advanced Level Science stream students in Sri Lanka to access learning resources in one place.',
    highlights: [
      'Notes, video lessons & past papers in one place',
      'User-centered design for accessibility',
      'Clear navigation and content organization',
    ],
    stack: ['Figma', 'UI Design', 'User-Centered Design'],
    type: 'ui',
    emoji: '📖',
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card card">
      <div className="project-header">
        <span className="project-emoji">{project.emoji}</span>
        <div>
          <h3>{project.title}</h3>
          <span className="project-subtitle">{project.subtitle}</span>
        </div>
      </div>
      <p className="project-desc">{project.desc}</p>
      <ul className="project-highlights">
        {project.highlights.map(h => (
          <li key={h}><span className="bullet">▸</span>{h}</li>
        ))}
      </ul>
      <div className="project-stack">
        {project.stack.map(s => <span key={s} className="tag">{s}</span>)}
      </div>
      <div className="project-links">
        {project.type === 'ui'
          ? <a href="#" className="proj-link"><Figma size={14} /> View in Figma</a>
          : <a href="#" className="proj-link"><Github size={14} /> GitHub</a>
        }
      </div>
    </div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState('dev');
  const [ref, inView] = useInView();

  return (
    <section id="projects">
      <div className="container">
        <div ref={ref} className={inView ? 'animate-fade-up' : 'hidden'}>
          <div className="section-header">
            <span className="section-label">What I've Built</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">A mix of full-stack applications and UI/UX design work.</p>
          </div>

          <div className="tab-bar">
            <button
              className={`tab-btn ${tab === 'dev' ? 'active' : ''}`}
              onClick={() => setTab('dev')}
            >
              💻 Development
            </button>
            <button
              className={`tab-btn ${tab === 'ui' ? 'active' : ''}`}
              onClick={() => setTab('ui')}
            >
              🎨 UI/UX Design
            </button>
          </div>

          <div className="projects-grid">
            {(tab === 'dev' ? devProjects : uiProjects).map(p => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}