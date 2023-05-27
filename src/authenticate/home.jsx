import React from 'react'
import './auth.css';
import { Link } from 'react-router-dom';


const Home = () => {
  
    return (
        <div>
            <div className='body'></div>
            <div className="container">
                <h1>Welcome!</h1>
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Signup</Link>
            </div>
        </div>
    )
}

export default Home