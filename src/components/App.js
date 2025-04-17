import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaCog, FaInfo } from 'react-icons/fa';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Footer from './Footer';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ toggleSidebar, isOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <nav className={`navbar navbar-dark bg-dark ${isOpen ? "sidebar-open" : ""}`}>
        {!isOpen && (
          <button className="btn btn-outline-light" onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}

        <li className="text-white">United States, Canada & India</li>
        <li className="text-white">Email: info@teckleap.com</li>
        <li className="text-white">Office: +1 (469) 277-7001</li>
        <li className="text-white">Mon-Fri, 9:00am – 5:00pm</li>
      </nav>
    </>
  );
};
// 👉 App Component
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="app-wrapper">
      {/* Sidebar */}
      <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>

        {/* Logo Above Home Link */}
        <img
          src="./img/tecklogo.png"
          alt="Logo"
          className="sidebar-image"
          style={{ height: '50px', marginBottom: '20px' }}
        />

        <nav className="nav d-flex flex-column">
          <Link to="/" className="nav-link" onClick={toggleSidebar}>
            <FaHome className="nav-icon" /> Home
          </Link>
          <Link to="/pizza"  className="nav-link" onClick={toggleSidebar}>
              <FaInfo className="nav-icon" /> About
            </Link>
          <Link to="/settings" className="nav-link" onClick={toggleSidebar}>
            <FaCog className="nav-icon" /> Dashboard
          </Link>
          <Link to="/" className="nav-link" onClick={toggleSidebar}>
            <FaHome className="nav-icon" /> Industries
          </Link>
          <Link to="/pizza"  className="nav-link" onClick={toggleSidebar}>
              <FaInfo className="nav-icon" /> Workforce
            </Link>
          <Link to="/settings" className="nav-link" onClick={toggleSidebar}>
            <FaCog className="nav-icon" /> Contact
          </Link>
          <Link to="/settings" className="nav-link" onClick={toggleSidebar}>
            <FaCog className="nav-icon" /> Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'shift' : ''}`}>
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<h2>Settings Page</h2>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
