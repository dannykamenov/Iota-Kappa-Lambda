import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <nav className='navbar'>
            <ul className='header list'>
            <li className='header home'><Link to="/">HOME</Link></li>
            <li className='header contact'><Link to="about">CONTACT US</Link></li>
            <li className='header leadership'><Link to="contact">LEADERSHIP</Link></li>
            <li className='header logo'><Link to="/"><img src={logo} alt="Logo" /></Link></li>
            <li className='header events'><Link to="about">EVENT & PHOTOS</Link></li>
            <li className='header help'><Link to="contact">HELPFUL LINKS</Link></li>
            <li className='header profile'><Link to="contact"><FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#ffffff",}} /></Link></li>
            </ul>
        </nav>
    )
};

export default Header;