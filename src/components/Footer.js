import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaHome, FaInfo,FaBlog , FaServicestack, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 
import { IoIosMail } from "react-icons/io";
import { MdGroupWork } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import "./styles.css";

const Footer = ({ setIsOpen }) => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2 className="footer-heading">Have a Questions?</h2>
        <div className="block-23 mb-3">
          <ul>
            <li>
              <a href="#">
                <span className="icon ion-ios-pin"></span>
                <span className="text"><FaMapMarkerAlt /> 203 Fake St. Mountain View, San Francisco, California, USA</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon ion-ios-call"></span>
                <span className="text"><IoCall />+2 392 3929 210</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon ion-ios-send"></span>
                <span className="text"><IoIosMail />info@yourdomain.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="social-icons">
  <a href="https://facebook.com" className="social-icon facebook" aria-label="Facebook">
    <FaFacebookF />
  </a>
  <a href="https://twitter.com" className="social-icon twitter" aria-label="Twitter">
    <FaTwitter />
  </a>
  <a href="https://instagram.com" className="social-icon instagram" aria-label="Instagram">
    <FaInstagram />
  </a>
</div>
      </div>

      <div className="footer-section news">
        <h2>Recent Job Postings</h2>
        <div className="news-item">
          <img src="/img/Shutterstock_749265139-1.png" alt="News 1" />
          <a href="#">Even the all-powerful Pointing has no control about</a>
          <p>Feb 16, 2025 | Admin |</p>
        </div>
        <div className="news-item">
          <img src="/img/1692257440924.jpeg" alt="News 2" />
          <a href="#">Even the all-powerful Pointing has no control about</a>
          <p>Feb 16, 2025 | Admin |</p>
        </div>
      </div>

      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/pizza"><FaInfo /> About</Link></li>
          <li><Link to="#"><FaServicestack /> Services</Link></li>
          <li><Link to="#"><MdGroupWork />Works</Link></li>
          <li><Link to="#"><FaBlog />Blog</Link></li>
          <li>
            <Link to="#" onClick={(e) => { e.preventDefault(); setIsOpen(true); }}>
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2025 All rights reserved ❤️ by <a href="#">Teckleap</a></p>
      </div>
    </footer>
  );
};

export default Footer;
