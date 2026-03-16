import { useInView } from '../hooks/useInView';
import './Skills.css';

const skillGroups = [
    {
        category: 'Frontend',
        emoji: '🖥️',
        skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
        category: 'Backend',
        emoji: '⚙️',
        skills: ['Node.js', 'Express.js'],
    },
    {
        category: 'Languages',
        emoji: '💻',
        skills: ['JavaScript', 'Java', 'C'],
    },
    {
        category: 'Dev Tools',
        emoji: '🛠️',
        skills: ['VS Code', 'GitHub', 'Git'],
    },
    {
        category: 'Design & Tools',
        emoji: '🎨',
        skills: ['Figma', 'Canva', 'Sketchbook']
    },
    {
        category: 'UX Design Skills',
        emoji: '📐',
        skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Sketching', 'User Experience Design'],
    },
];

export default function Skills() {
    const [ref, inView] = useInView();
    return (
        <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div ref={ref} className={inView ? 'animate-fade-up' : 'hidden'}>
                    <div className="section-header">
                        <span className="section-label"> What I know</span>
                        <h2 className="section-title"> Skills & Technologies </h2>
                        <p className="section-desc"> A toolkit built through coursework, projects, and passionate self learning.</p>
                    </div>

                    <div className="skills grid">
                        {skillGroups.map((group) => (
                            <div key={group.category} className="skills-card card">
                                <div className="skills-cat-header">
                                    <span className="skills-emoji">{group.emoji} </span>
                                    <span className="skills-cat-name">{group.category}</span>
                                    </div>
                                    <div className="skills-tags">
                                        {group.skills.map(s => (
                                            <span key={s} className="tag">{s}</span>
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