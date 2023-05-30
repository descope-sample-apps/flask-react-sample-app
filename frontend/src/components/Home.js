import '../App.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSession } from '@descope/react-sdk'
import { useNavigate } from "react-router-dom";

function Home() {
    const { isAuthenticated } = useSession()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            return navigate("/profile");
        }
    }, [isAuthenticated]) // listen for when isAuthenticated has changed

    return (
        <div className='page'>
            <h1 className='title'>Home</h1>
            <Link className='link btn' to="/login">Login</Link>
            <iframe src="https://giphy.com/embed/bKj0qEKTVBdF2o5Dgn" width="480" height="352" allowFullScreen></iframe>
        </div>
    )
}


export default Home;
