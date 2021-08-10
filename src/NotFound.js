import { Link } from 'react-router-dom'

const NotFound = () =>{
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <br />
            <p>That Page cannot be found</p>
            <br />
            <Link to="/">Back to the homepage?</Link>
        </div>
    )
}
export default NotFound;