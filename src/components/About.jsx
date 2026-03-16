import { useInView } from '../hooks/useInView';
import { GraduationCap, MapPin, Code2, Palette } from 'lucide-react';
import './About.css';

export default function About() {
    const [ref, inView] = useInView();

    return (
    <section id="about" ref={ref}>
        <div className="container">
            <div className={`about-inner ${inView ? 'animate-fade-up' : 'hidden'}`}>
                <div className="section-header">
                    <span className="section-label"> Who I Am</span>
                    <h2 className="section-title">About me</h2>
                </div>

                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I'm passionate 3rd year Information Technology undergraduate at the <strong> University of Moratuwa </strong>.
                            I thrive at the intersection of software engineering and design , building systems that are both powerful and delightful to use.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Currently pursing my <strong> Google UX Design Certificate </strong> and expanding my skills through Coursera, I'm actively seeking an internship in 
                            Software Engineering or UI/UX Design to contribute to impactful projects
                            and grow in a professional envirionment.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Beyond code, I'm digital artist who Sketchbook, I believe creative thinking is what separates 
                            good engineers from great ones.
                        </p>

                        <div className="about-info">
                            <div className="info-item">
                                <GraduationCap size={16} />
                                <span> BSc (Hons) IT | University of Moratuwa </span>
                            </div>
                            <div className="info-item">
                                <MapPin size={16} />
                                <span> Sri Lanka </span>
                            </div>
                            <div className="info-item">
                                <Code2 size={16} />
                                <span> Software Engineer Intern </span>
                            </div>
                            <div className="info-item">
                                <Palette size={16} />
                                <span> UI/UX Design Intern </span>
                            </div>
                        </div>
                    </div>

                    <div className="about-cards">
                        <div className="stat-card card">
                            <span className="stat-num">3+</span>
                            <span className="stat-label">Dev projects</span>
                        </div>
                        <div className="stat-card card">
                            <span className="stat-num">3+</span>
                            <span className="stat-label">UI/UX Projects</span>
                        </div>
                        <div className="stat-card card">
                            <span className="stat-num">4</span>
                            <span className="stat-label">Hackathons</span>
                        </div>
                        <div className="stat-card card">
                            <span className="stat-num">4+</span>
                            <span className="stat-label">Volunteer Roles</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </section>
    );
}