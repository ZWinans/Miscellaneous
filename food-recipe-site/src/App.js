// styles
import './App.css';

// imports
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useTheme } from './hooks/useTheme';

// page components
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

function App() {

  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>

      <Navbar />
      <ThemeSelector />

      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      
    </div>
  );
}

export default App;
