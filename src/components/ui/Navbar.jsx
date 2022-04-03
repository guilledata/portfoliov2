import React from 'react'
import { Link, Navlink } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav className="navbar">
        
        <Link className="navbar-item"  to="/">
            HOME
        </Link>
        <Link className="navbar-item" to="/projects">
            PROJECTS
        </Link>
        <Link className="navbar-item" to="/aboutme">
            ABOUT ME
        </Link>
        <Link className="navbar-item" to="/blog">
            BLOG
        </Link>
        <Link className="navbar-item" to="/contact">
            CONTACT
        </Link>


    </nav>
    )
}
