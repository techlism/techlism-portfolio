import './App.Module.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import AboutSection from './AboutSection/AboutSection';
import ProjectSection from './ProjectsSection/ProjectsSection';
import { useEffect } from 'react';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';
function App() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1); // Remove '#' from href
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    // Attach smooth scroll behavior to all links with class 'smooth-scroll'
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer/>
    </div>
  );
}

export default App;

