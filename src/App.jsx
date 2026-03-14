import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Precos from './pages/Precos';
import Cursor from './components/Cursor';
import './App.css';

function App() {
  return (
    <Router>
      <Cursor />
      <div className="noise-overlay"></div>
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/precos" element={<Precos />} />
      </Routes>
    </Router>
  );
}

export default App;
