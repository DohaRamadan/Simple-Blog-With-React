import { useState} from "react";
import { useHistory } from "react-router";

const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoding] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author};
        setIsLoding(true)
        fetch('http://localhost:3000/blogs', {
            method: 'POST', 
            headers : {"Content-Type": "application/json" },
            body : JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added')
            setIsLoding(false)
            history.push('/')
        }) 

    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input type="text" 
                required
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                />

                <label >Blog title:</label>
                <textarea
                required
                value={ body } 
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label >Blog author:</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isLoading && <button>Add Blog</button>}
                { isLoading && <button disabled>Adding Blog...</button>}
                
                
            </form>
        </div>
    )
}
export default Create;