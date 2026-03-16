import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // ── Connect to your Node.js backend here ──────────────────────────
    // Example:
    // const res = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });
    // if (res.ok) setStatus('sent'); else setStatus('error');
    // ─────────────────────────────────────────────────────────────────
    // For now, simulate success after 1s:
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div ref={ref} className={inView ? 'animate-fade-up' : 'hidden'}>
          <div className="section-header">
            <span className="section-label">Let's Connect</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-desc">
              I'm actively looking for internship opportunities. Whether you have a role,
              a project idea, or just want to say hi — my inbox is always open!
            </p>
          </div>

          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info">
              <div className="contact-info-card card">
                <div className="contact-detail">
                  <Mail size={18} />
                  <div>
                    <span className="contact-label">Email</span>
                    {/* Replace with your actual email */}
                    <a href="mailto:theekshananirmani2000@example.com" className="contact-value">
                      theekshananirmani2000@example.com
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <MapPin size={18} />
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Sri Lanka</span>
                  </div>
                </div>
              </div>

              <div className="contact-social-card card">
                <p className="social-card-title">Find me online</p>
                <div className="contact-socials">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-link"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-link"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:theekshananirmani2000@example.com"
                    className="contact-social-link"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              <div className="availability-card card">
                <div className="avail-dot" />
                <div>
                  <span className="avail-title">Open to Opportunities</span>
                  <p>Actively seeking internships in Software Engineering & UI/UX Design</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-wrap card">
              {status === 'sent' ? (
                <div className="form-success">
                  <span className="success-icon">✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                  <button className="btn-outline" onClick={() => setStatus('idle')}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="form-title">Send a Message</h3>

                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Silva"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Hi Theekshana, I'd like to discuss an internship opportunity..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'sending'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {status === 'sending' ? (
                      <span className="sending-spinner" />
                    ) : (
                      <Send size={16} />
                    )}
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}