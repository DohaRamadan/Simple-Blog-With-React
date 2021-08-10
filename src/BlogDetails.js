import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () =>{
    const { id } = useParams();
    const { data:blog, error, isLoading} = useFetch('http://localhost:3000/blogs/' + id); 
    const history = useHistory();

    const handleDelete = () =>{
        fetch('http://localhost:3000/blogs/' + blog.id, {
            method : 'DELETE'
        }).then(() =>{
            history.push('/');
        })
        
    }

    return(
        <div className="blog-details">
           {isLoading && <div>Loading.... </div>}
           {error && <div>{error} </div>}
           {blog && (
               <article>
                   <h2>{ blog.title }</h2>
                   <p>Writtern by {blog.author}</p>
                   <div>{blog.body}</div>
                   <button onClick={handleDelete}>Delete</button>
               </article>
           )}
            
        </div>
    );
}
export default BlogDetails;