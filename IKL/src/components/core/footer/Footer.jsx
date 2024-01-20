import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="copyright">Copyright © 2023 Iota Kappa Lambda <br /> All Rights Reserved.</div>
        <div className="connect-box">
            <p className="connect-text">Connect with us!</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/ikl1906" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="social-icon fb" /></a>
                <a href="https://www.instagram.com/ikl1906?igshid=1550m1ewr69ws" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className="social-icon insta" /></a>
            </div>
        </div>
        <div className="contact-info">
            <a href="tel:1234567890" className="tel-num">Tel: +1234567890</a>
            <p className="email-footer">Email: email@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
