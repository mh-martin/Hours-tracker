
import './App.css';
import Home from './components/Home';
import AddProject from './components/AddProject';
import Hours from './components/Hours';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addproject" element={<AddProject />}/>
          <Route path="/hours" element={<Hours />}/>
          <Route path="/project/:id" element={<ProjectDetails />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
