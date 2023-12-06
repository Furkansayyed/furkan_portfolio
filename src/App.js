import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Work from './components/projects/Work';

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
