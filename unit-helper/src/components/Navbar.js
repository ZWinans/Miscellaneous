import './Navbar.css'

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    let distButton = document.querySelector('.distance-button');
    let cookButton = document.querySelector('.cooking-button');

    return ( 
        <div className='navbar'>
            <NavLink to="/" className="distance-button">Distance</NavLink>
            <NavLink to="/cooking" className="cooking-button">Cooking</NavLink>
        </div>
     );
}
 
export default Navbar;