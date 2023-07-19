import './App.css';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Work from './components/Work';
import up from './components/images/up.svg'

function App() {
  return (
    <div className='font-mono'>
      <Home/>
      <Timeline/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
