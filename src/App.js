import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Project from './components/Project';
import Education from './components/Education';
import Certification from './components/Certification';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Experience />
      <Project />
      <Education />
      <Certification />
      <Footer />
    </div>
  );
}

export default App;
