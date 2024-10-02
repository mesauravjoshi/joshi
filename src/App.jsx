import './App.css';
import { ThemeProvider } from './common/ThemeContext';
import Education from './sections/Education/Education';
import Home from './sections/Home/Home';
import Nav from './sections/Nav/Nav';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  console.log('test');
  
  return (
    <>
    <ThemeProvider>
      <Nav/>
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="edu">
        <Education />
      </div>
      {/* <Contact /> */}
      {/* <Footer /> */}
    </ThemeProvider>
      </>
  );
}

export default App;