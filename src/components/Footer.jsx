import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>Theekshana<span className="logo-bracket">/&gt;</span>
            </span>
            <p>IT Undergraduate · University of Moratuwa</p>
            <p>Seeking internship in Software Engineering & UI/UX Design</p>
          </div>

          <div className="footer-nav">
            <span className="footer-nav-title">Quick Links</span>
            {['about','skills','projects','achievements','art','contact'].map(id => (
              <button key={id} onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <div className="footer-contact-col">
            <span className="footer-nav-title">Connect</span>
            <div className="footer-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:theekshananirmani2000@example.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
            <a href="mailto:theekshananirmani2000@example.com" className="footer-email">
              theekshananirmani2000@example.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Theekshana. All rights reserved.</span>
          <span className="footer-made">
            Made with <Heart size={12} fill="currentColor" /> using React
          </span>
        </div>
      </div>
    </footer>
  );
}