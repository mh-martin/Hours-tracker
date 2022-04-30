
import './App.css';
import Home from './components/Home';
import AddProject from './components/AddProject';
import Hours from './components/Hours';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Project from './models/Project';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [projektit, setProjektit] = useState([
    new Project('Esimerkkiprojekti', 'blaablaa', new Date()),
    new Project('Projekti 2', 'testi', new Date())
  ]);

  const addProject = //useCallback(
    () => {
      console.log('project added');
    };//,
    //[]
  //);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home projektit={projektit} />}/>
          <Route path="/addproject" element={<AddProject onProjectAdded={addProject} />}/>
          <Route path="/hours" element={<Hours />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
