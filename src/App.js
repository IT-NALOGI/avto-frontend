// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AvtoList from './components/AvtoList';
import AvtoDetail from './components/AvtoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/avto/:id" element={<AvtoDetail />} />
        <Route path="/" element={<AvtoList />} />
        {/* Other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
