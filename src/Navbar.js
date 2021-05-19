import {Link} from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
    <div>
        <nav className="navbar">
            <h1>The Doge Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    </div> );
}
 
export default Navbar;