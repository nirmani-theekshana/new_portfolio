import { useInView } from '../hooks/useInView';
import './Achievements.css';

const achievements = [
    {
        title: 'HackMoral 7.0',
        year: '2025',
        role: 'Participant',
        desc: 'Participated in HackMoral 7.0, organized by the University of Moratuwa.',
        color: 'gold',
    },
    {
        title: 'Innovate with Ballerina',
        year: '2024',
        role: 'Participant',
        desc: 'Participated in the Innovate with Ballerina hackathon organized by WSO2 and IEEE University of Moratuwa.',
        color: 'silver',
    },
    {
        title: 'Interface Designthon',
        year: '2025',
        role: 'Participant',
        desc: 'Participated in the Interface Designthon organized by Azta',
        color: 'bronze',
    },
    {
        title: 'CodeRally 6.0',
        year: '2025',
        role: 'Champion Team Member | Beginner Tier',
        desc: 'Won the beginner tier of CodeRally 6.0',
        color: 'blue',
    },
];

export default function Achievements() {
    const [ref, inView] = useInView();
    return (
        <section id="achievements">
            <div className="container">
                <div ref={ref} className={inView ? 'animate-fade-up' : 'hidden'}>
                    <div className="section-header">
                        <span className="section-label">Milestones</span>
                        <h2 className="section-title">Achievements</h2>
                        <p className="section-desc">Competitions, hackathons, and design challenges - learning through doing.</p>
                    </div>

                    <div className="achievements-grid">
                        {achievements.map(a => (
                            <div key={a.title} className={`achievement-card card ach-${a.color}`}>
                                <div className="ach-top">
                                    <span className="ach-emoji">{a.emoji}</span>
                                    <span className="ach-year">{a.year}</span>
                                    </div>
                                    <h3>{a.title}</h3>
                                    <span className="ach-role">{a.role}</span>
                                    <p>{a.desc}</p>
                                    </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
