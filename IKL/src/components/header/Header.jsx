import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <nav>
            <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="about">CONTACT US</Link></li>
            <li><Link to="contact">LEADERSHIP</Link></li>
            <li><Link to="/"><img src={logo} alt="Logo" /></Link></li>
            <li><Link to="about">EVENT & PHOTOS</Link></li>
            <li><Link to="contact">HELPFUL LINKS</Link></li>
            <li><Link to="contact"><i></i></Link></li>
            </ul>
        </nav>
    )
};

export default Header;