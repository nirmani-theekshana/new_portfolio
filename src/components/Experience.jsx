import { useInView } from '../hooks/useInView';
import './Experience.css';

const experience = [
    {
        role: 'School Leaver Trainee',
        org: "People's Bank",
        period: 'March 2023 - November 2023',
        type: 'work',
        desc: 'Completed a training programme at one of Sri Lanka\'s largest state banks. Received an official recognition letter upon completion.',
        tags: ['Banking Operations', 'Professional Training'],
    },
];

const volunteering = [
    {
        role: 'Design Committee Member',
        org: 'Enginuity 2.0 - Organized by IEEE WIE Affinity group, University of Moratuwa',
        type: 'volunteer',
        desc: 'Handled design deliverables and visual communication for the Engunity 2.0 engineering event.',
        tags: ['Volunteer Experience', 'Flyer Design'],
    },
    {
        role: 'Programme Committee Member',
        org: 'HackElite 2.0 - Organized by IEEE WIE Affinity group, University of Moratuwa',
        type: 'volunteer',
        desc: 'As a member of the programme committee',
        tags: ['Volunteer Experience'],
    },
];

function Card({ item }) {
    return (
        <div className="exp-card card">
            <div className="exp-header">
                <span className="exp-emoji">{item.emoji}</span>
                <div>
                    <h3>{item.role}</h3>
                    <span className="exp-org">{item.org}</span>
                    {item.period && <span className="exp-period"> . {item.period}</span>}
                </div>
            </div>
            <p className="exp-desc">{item.desc}</p>
            <div className="exp-tags">
                {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
        </div>
    );
}

export default function Experience() {
    const [ref, inView] = useInView();
    return (
        <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div ref={ref} className={inView ? 'animate-fade-up' : 'hidden'}>
                    <div className="section-header">
                        <span className="section-label">My Journey </span>
                        <h2 className="section-title">Experience & Volunteering</h2>
                    </div>

                    <div className="exp-section-title">Work Experience </div>
                    <div className="exp-grid">
                        {experience.map(e => <Card key={e.role} item={e} />)}
                    </div>

                    <div className="exp-section-title" style={{ marginTop: '2.5rem' }}> Volunteering </div>
                    <div className="exp-grid">
                        {volunteering.map(e => <Card key={e.role + e.org} item={e} />)}
                    </div>
                </div>
            </div>

        </section>
    );
}