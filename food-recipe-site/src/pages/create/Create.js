import { useEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

// styles
import './Create.css'

const Create = () => {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const navigate = useNavigate();

    const { postData, data, error } = useFetch("http://localhost:3000/recipes", "POST");

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ title, ingredients, method, cookingTime: cookingTime + " minutes" });
    }

    // redirect user after post
    useEffect(() => {
        if(data){
            navigate("/");
        }
    }, [data])

    const handleAdd = (e) => {
        e.preventDefault();
        const ingredient = newIngredient.trim();

        if(ingredient && !ingredients.includes(ingredient)){
            setIngredients(prevIngredients => [...prevIngredients, ingredient]);
        }

        setNewIngredient('');
        ingredientInput.current.focus();
        
    }

    return ( 
        <div className="create">
            <h2 className="page-title">Add a new recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        <input 
                            type="text" 
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button className="btn" onClick={handleAdd}>add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(ingredient => <em key={ingredient}>{ingredient}, </em>)}</p>

                <label>
                    <span>Recipe method:</span>
                    <textarea 
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>

                <label>
                    <span>Cooking time (minutes):</span>
                    <input 
                    type="number" 
                    onChange={(e) => setCookingTime(e.target.value)}
                    value={cookingTime}
                    required
                    />
                </label>

                <button className="btn">submit</button>

            </form>
        </div> 
    );
}
 
export default Create;