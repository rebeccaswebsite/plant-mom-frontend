import React from 'react'
import { Link } from "react-router-dom";

const Navbar = props => {
	return (
		<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
            Plant Mom
            </a>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/login">
                    Login
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/my-rooms">
                    My Plant Rooms
                    </Link>
                </li>
                <li onClick={props.logout} className="nav-item">
                    Logout
                </li>
                </ul>
            </div>
            </nav>
        </div>
	)
}

export default Navbar


