import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    margin: '0 1rem',
    padding: '0.5rem 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    alignItems: 'center',
    color:'#ffffff',
};

const Header = () => {


    return (
        <header className='navbar'>
            <ul className='header list'>
            <li className='header home link'><Link to="/" style={linkStyle} className='link-comp'>HOME</Link></li>
            <li className='header contact link'><Link to="contact-us" style={linkStyle} className='link-comp'>CONTACT US</Link></li>
            <li className='header leadership link'><Link to="leadership" style={linkStyle} className='link-comp'>LEADERSHIP</Link></li>
            <li className='header logo'><Link to="/"><img src={logo} alt="Logo" className='logo-img' /></Link></li>
            <li className='header events link'><Link to="events-and-photos" style={linkStyle} className='link-comp'>EVENT & PHOTOS</Link></li>
            <li className='header help link'><Link to="help" style={linkStyle} className='link-comp'>HELPFUL LINKS</Link></li>
            <li className='header profile link'><Link to="profile" style={linkStyle} ><FontAwesomeIcon icon={faUser} style={linkStyle} className='link-comp'/></Link></li>
            </ul>
        </header>
    )
};

export default Header;