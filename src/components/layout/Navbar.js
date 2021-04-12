import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Link } from 'react-router-dom'


const  Navbar = ({icon,title})  => {


    
    return (
        <nav className="navbar bg-primary">
            <h1> <i className={icon}></i> {title}</h1>

            

            <ul>
                <li>
                    
                    <a href='/'>Home</a>

                </li>

                <li>
                
                    <a href='/about'>About</a>

                </li>

            </ul>
            

        </nav>
    )
    
}

export default Navbar
