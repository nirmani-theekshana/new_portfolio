import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Background blobs */}
            <div className="hero-blob blob-1" />
            <div className="hero-blob blob-2" />
            <div className="hero-blob blob-3" />

            <div className="container">
                <div className="hero-inner">
                    {/* Left content */}
                    <div className="hero-content">
                        <div className="hero-badge animate-fade-up">
                            <span className="badge-dot" />
                            Available for Internship 2026
                        </div>

                        <h1 className="hero-title animate-fade-up delay-1">
                            Hi, I'm <br />
                            <span className="gradient-text"> Theekshana </span>
                        </h1>

                        <p className="hero-role animate-fade-up delay-2">
                            <span className="typed-text">Software Engineer</span>
                            <span className="cursor-blink">|</span>
                            {''}& UI/UX Designer
                        </p>

                        <p className="hero-desc animate-fade-up delay-3">
                            3 rd year IT undergraduate at University of Moratuwa. I build
                            a full stack web apps and craft intuitive digital experiences,
                            passionate about clean code and pixel perfect design.
                        </p>

                        <div className="hero-actions animate-fade-up delay-4">
                            <a href="#contact"  className="btn-primary" onClick={e => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <Mail size={16} /> Get in Touch
                            </a>
                            <a href="/resume.pdf" download className="btn-outline">
                                <Download size={16} /> Download CV 
                            </a>
                        </div>

                        <div className="hero-socials animate-fade-up delay-5">
                            <a href="https://github.com/nirmani-theekshana" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/theekshana-indrajith" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:theekshananirmani2000@gmail.com" className="social-icon" aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="hero-photo-wrap animate-fade-in delay-2">
                        <div className="photo-ring ring-1" />
                        <div className="photo-ring ring-2" />
                        <div className="photo-frame">
                             {/* Replace src with your actual photo path: src="/your-photo.jpg" */}
                             {/*<div className="photo-placeholder">
                                <span> Your photo here </span>
                                <p> Replace with: <code>/public/photo.jpg</code></p>
                             </div>
                              {/* Uncomment below and replace when you add your photo:  */}
                              <img src="/public/photo.jpg" alt="Theekshana" className="hero-photo" />
                            
                        </div>
                        <div className="photo=badge badge-uni">
                            <span>🎓 </span> UoM | IT
                        </div>
                        <div className="photo-badge badge-moratuwa">
                            <span>💡</span> Open to Work
                        </div>
                    </div>
                </div>

                {/* Scroll cue */}
                <a 
                href="#about"
                className="scroll-cue"
                onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            > 
            <ArrowDown size={16} />
            <span> Scroll to explore </span>
            </a>
            </div>
        </section>
    );
}