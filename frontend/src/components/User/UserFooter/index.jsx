import React from 'react';
import './Footer.css'; // CSS faylını import edirik

const UserFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="logo.png" alt="Dental Logo" />
          <p>Dental Clinic</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p><strong>Contact Us:</strong></p>
          <p>Email: contact@dentalclinic.com</p>
          <p>Phone: +994 50 123 45 67</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Dental Clinic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default UserFooter;
