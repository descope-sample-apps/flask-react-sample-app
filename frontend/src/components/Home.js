import '../App.css';
import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className='page'>
            <h1 className='title'>Home</h1>
            <Link className='link btn' to="/login">Login</Link>
            <iframe src="https://giphy.com/embed/bKj0qEKTVBdF2o5Dgn" width="480" height="352" allowFullScreen></iframe>
        </div>
    )
}


export default Home;
