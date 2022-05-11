import { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('George Washington');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  // navigate is a new feature
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // create new blog
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      // history.go(-1);
      history.push('/');
      // navigate('/')
    })
    
    
  }

    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required
            value={ title }
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea  
            required
            value={ body }
            onChange={(e) => setBody(e.target.value)}
          />
          <label>Blog author:</label>
          <select
            value={ author }
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="George Washington">George Washington</option>
            <option value="Noam Chomsky">Noam Chomsky</option>
            <option value="John Adams">John Adams</option>
          </select>
          { !isPending && <button>Add Blog</button>}
          { isPending && <button disabled>Adding Blog...</button>}
        </form>
      </div>
    );
}
   
  export default Create;