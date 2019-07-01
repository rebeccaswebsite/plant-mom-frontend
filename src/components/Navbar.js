import React from 'react'

const Navbar = props => {
	return (
        <div className="ui stackable menu">
            <div className="item">
                <img src="/logo.png" alt="Logo" />
            </div>
            <a href='my-rooms' className="item">My Plant Rooms</a>
            <a href='plants' className="item">Plants</a>
            <a href='login' className="item active">Signin</a>
            <a onClick={props.logout} className="item">Signout</a>
        </div>
	)
}

export default Navbar


