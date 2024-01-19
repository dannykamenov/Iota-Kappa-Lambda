import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    margin: '0 1rem',
    padding: '0.5rem 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        color: '#938807',
    },
    alignItems: 'center',
};

const Header = () => {
    return (
        <nav className='navbar'>
            <ul className='header list'>
            <li className='header home link'><Link to="/" style={linkStyle}>HOME</Link></li>
            <li className='header contact link'><Link to="contact-us" style={linkStyle}>CONTACT US</Link></li>
            <li className='header leadership link'><Link to="leadership" style={linkStyle}>LEADERSHIP</Link></li>
            <li className='header logo'><Link to="/"><img src={logo} alt="Logo" className='logo-img' /></Link></li>
            <li className='header events link'><Link to="events-and-photos" style={linkStyle}>EVENT & PHOTOS</Link></li>
            <li className='header help link'><Link to="help" style={linkStyle}>HELPFUL LINKS</Link></li>
            <li className='header profile link'><Link to="profile" style={linkStyle}><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /></Link></li>
            </ul>
        </nav>
    )
};

export default Header;