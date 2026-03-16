import { useInView } from '../hooks/useInView';
import './Art.css';

// Replace these placeholder items with your actual artwork images
// Put your images in: public/art/art1.jpg, public/art/art2.jpg, etc.
const artworks = [
  { id: 1, title: 'Artwork 1', src: null, tool: 'Sketchbook' },
  { id: 2, title: 'Artwork 2', src: null, tool: 'Sketchbook' },
  { id: 3, title: 'Artwork 3', src: null, tool: 'Sketchbook' },
  { id: 4, title: 'Artwork 4', src: null, tool: 'Sketchbook' },
  { id: 5, title: 'Artwork 5', src: null, tool: 'Sketchbook' },
  { id: 6, title: 'Artwork 6', src: null, tool: 'Sketchbook' },
];

// HOW TO ADD YOUR ARTWORK:
// 1. Place your image files inside the /public/art/ folder
// 2. Replace src: null with src: '/art/your-filename.jpg'
// 3. Update the title for each artwork
// Example: { id: 1, title: 'Sunset Dragon', src: '/art/sunset-dragon.jpg', tool: 'Sketchbook' }

export default function Art() {
  const [ref, inView] = useInView();

  return (
    <section id="art" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div ref={ref} className={inView ? 'animate-fade-up' : 'hidden'}>
          <div className="section-header">
            <span className="section-label">Creative Side</span>
            <h2 className="section-title">Digital Art Gallery</h2>
            <p className="section-desc">
              Beyond code and design — I express myself through digital art using Sketchbook.
              Art fuels my creativity and shapes how I think about interfaces.
            </p>
          </div>

          <div className="art-grid">
            {artworks.map((art) => (
              <div key={art.id} className="art-card">
                <div className="art-frame">
                  {art.src ? (
                    <img src={art.src} alt={art.title} className="art-img" loading="lazy" />
                  ) : (
                    <div className="art-placeholder">
                      <span className="art-placeholder-icon">🎨</span>
                      <span className="art-placeholder-text">Add your artwork</span>
                      <span className="art-placeholder-hint">public/art/art{art.id}.jpg</span>
                    </div>
                  )}
                  <div className="art-overlay">
                    <span className="art-title">{art.title}</span>
                    <span className="art-tool">{art.tool}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="art-note">
            <span>✏️</span>
            <span>All artworks created using <strong>Sketchbook</strong> digital art tool</span>
          </div>
        </div>
      </div>
    </section>
  );
}