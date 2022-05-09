import './App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Projects:</h1>
      <Projects />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
