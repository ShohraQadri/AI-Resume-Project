import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3>AI Resume Builder</h3>
        <p>Design your career. Build a resume that gets noticed.</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaGithub /></a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} AI Resume Builder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
