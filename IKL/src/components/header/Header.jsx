import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className='navbar'>
            <ul className='header list'>
            <li className='header home'><Link to="/">HOME</Link></li>
            <li className='header contact'><Link to="contact-us">CONTACT US</Link></li>
            <li className='header leadership'><Link to="leadership">LEADERSHIP</Link></li>
            <li className='header logo'><Link to="/"><img src={logo} alt="Logo" className='logo-img' /></Link></li>
            <li className='header events'><Link to="events-and-photos">EVENT & PHOTOS</Link></li>
            <li className='header help'><Link to="help">HELPFUL LINKS</Link></li>
            <li className='header profile'><Link to="profile"><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /></Link></li>
            </ul>
        </nav>
    )
};

export default Header;