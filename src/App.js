import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Art from './components/Art';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';
import Project from './components/Project';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Art />
          <Contact />
             <Project />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
 
  );
}

export default App;