import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import appStoreImage from '../pages/images/appstore.jpg';
import pay from '../pages/images/pay.png';
import play from '../pages/images/play.jpg';
const Footer = () => {
  return (
    <footer className="section-p1" style={{ backgroundColor: '#E3E6F3' }}>
      <div className="col" >

        <h4>Contact</h4>
        <p style={{ fontSize: "13px" }}>
          <strong>Address: </strong> Mansehra, Pakistan
        </p>
        <p style={{ fontSize: "13px" }}>
          <strong>Phone:</strong> +92 888 8888888
        </p>
        <p style={{ fontSize: "13px" }}>
          <strong>Hours:</strong> 10.00am-5pm, Monday-Saturday
        </p>


        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <Link to="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
            <Link to="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            <Link to="https://www.pinterest.com">
              <FontAwesomeIcon icon={faPinterest} size="2x" />
            </Link>
            <Link to="https://www.youtube.com">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </Link>
            <Link to="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About Us</h4>
        <Link to="/about">About us</Link>
        <Link to="/delivery">Delivery Information</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <Link to="/signin">Sign In</Link>
        <Link to="/cart">View Cart</Link>
        <Link to="/wishlist">My Wishlist</Link>
        <Link to="/track-order">Track my order</Link>
        <Link to="/help">Help</Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <a href="https://www.apple.com/app-store/">
            <img src={appStoreImage} alt="App Store" />
          </a>
          <a href="https://www.apple.com/app-store/">
            <img src={play} alt="" />
          </a>
          {/* Add Google Play icon here */}
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay} alt="" />
      </div>

      <div className="copyright">
        <p>2023 HTML CSS Ecommerce Website</p>
      </div>
    </footer>
  );
};

export default Footer;
