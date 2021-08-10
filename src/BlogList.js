// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;
//     //const handleDelete = props.handleDelete;
//     return(
//         <div className="blog-List">
//         <h2>{title}</h2>
//         {blogs.map((blog) => ( 
//             <div className="blog-preview" key={blog.id}>
               
//                 <h2>{ blog.title }</h2>
//                 <p>Written by { blog.author }</p>
//                 <button> Delete</button>
//                 <br />

//             </div>
//           ))}
//           </div>
//     );

// }
// export default BlogList;

import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title }) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;
