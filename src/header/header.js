import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header(){
    return(
        <header className='header'>
            <h1 className='header-title'>
                <Link to={process.env.PUBLIC_URL + "/"}>
                    Noteful
                </Link>
            </h1>
        </header>
    )
}

export default Header;