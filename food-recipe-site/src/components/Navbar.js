import './Navbar.css'

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { useTheme } from '../hooks/useTheme';

// components
import SearchBar from './SearchBar'

const Navbar = () => {
    const { color } = useTheme();

    return ( 
        <div className="navbar" style={{ background: color }}>
            <nav>
                <NavLink to="/" className="brand"><h1>Recipe Wizard</h1></NavLink>
                <SearchBar />
                <NavLink to="/create">Create Recipe</NavLink>
            </nav>
        </div> 
    );
}
 
export default Navbar;