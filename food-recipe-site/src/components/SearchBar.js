import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// styles
import './SearchBar.css'

const SearchBar = () => {
    const [term, setTerm] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?q=${term}`);
    };

    return ( 
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input 
                    type="text" 
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
     );
}
 
export default SearchBar;