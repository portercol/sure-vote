import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar-brand">
                <Link to="/">
                        SURE VOTE
            </Link>
            </div>
            <ul className="Navbar-links">
                <li className="Navbar-link">
                    <Link to="/todos">
                        Election Info
            </Link>
                </li>
                <li className="Navbar-link">
                    <Link to="/todos/new">
                        Log Out
            </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;