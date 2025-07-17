import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <h2 className={styles.logo}>Dribbble</h2>
        <nav className={styles.footerNav}>
          <a href="#">For designers</a>
          <a href="#">Hire talent</a>
          <a href="#">Inspiration</a>
          <a href="#">Advertising</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Support</a>
        </nav>
        <div className={styles.footerSocial}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterestP />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLeft}>
          <p>© 2025 Dribbble</p>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
        <div className={styles.footerRight}>
          <a href="#">Jobs</a>
          <a href="#">Designers</a>
          <a href="#">Freelancers</a>
          <a href="#">Tags</a>
          <a href="#">Places</a>
          <a href="#">Resources</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
