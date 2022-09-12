// styles
import './App.css';

// pages
import Home from './pages/Home'
import Cooking from './pages/Cooking'

// imports
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
