import './App.css';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Projects:</h1>
      <Projects />
    </div>
  );
}

export default App;
