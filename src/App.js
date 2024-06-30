import './App.css';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Work from './components/Work';
import Projects from './components/Projects';

function App() {
  return (
    <div className='font-mono'>
      <Home/>
      <Projects/>
      <Timeline/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
