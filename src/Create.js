import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added');
            setIsPending(false);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              setIsPending(false);
              setError(err.message);
              console.log(error)
            }
          });
        history.push('/');
    }

    return ( 
        <div className="create">
            <h2>Add a Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <label>Blog title:</label>
                    <input
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="body">
                    <label>Blog body:</label>
                    <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}>
                        
                    </textarea>
                </div>
                <div className="author">
                    <label>Blog Author:</label>
                    <select
                    required
                    value={author}
                    onChange={e => setAuthor(e.target.value)}>
                        <option value="">----</option>
                        <option value="B. Tully">B. Tully</option>
                        <option value="S. Ainsworth">S. Ainsworth</option>
                        <option value="M. Loxley">M. Loxley</option>
                    </select>
                </div>
                {!isPending && <button>Add blog</button>}    
                {isPending && <button disabled>Adding Blog...</button>}    
            </form>
        </div>
     );
}
 
export default Create;