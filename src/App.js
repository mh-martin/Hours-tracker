
import './App.css';
import Home from './components/Home';
import AddProject from './components/AddProject';
import Hours from './components/Hours';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = //useCallback(
    () => {
      console.log('project added');
    };//,
    //[]
  //);

  useEffect(() => {
    axios
      .get("/projects")
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home projects={projects} />}/>
          <Route path="/addproject" element={<AddProject onProjectAdded={addProject} />}/>
          <Route path="/hours" element={<Hours />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
