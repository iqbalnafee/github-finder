import React from 'react'
// import PropTypes from 'prop-types'


const  Navbar = ({icon,title})  => {


    
    return (
        <nav className="navbar bg-primary">
            <h1> <i className={icon}></i> {title}</h1>
        </nav>
    )
    
}

export default Navbar
