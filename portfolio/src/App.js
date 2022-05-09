import './App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {BrowserRouter} from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyA2ll1WKC3Ok0lUz2oQ2ITkSr65qNCM_nE",
  authDomain: "portfolio-f1248.firebaseapp.com",
  projectId: "portfolio-f1248",
  storageBucket: "portfolio-f1248.appspot.com",
  messagingSenderId: "260019003212",
  appId: "1:260019003212:web:421005a6cffa662d8e39e9",
  measurementId: "G-1YYGV400CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <h1>Projects:</h1>
      <Projects />
      <About />
      <Contacts />
    </div>
    </BrowserRouter>
  );
}

export default App;
