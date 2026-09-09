import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';
import logoImg from '../assets/echoflow-mark.svg';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-v4 ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-pill-v4">
        <div className="nav-logo-v4">
          <img src={logoImg} alt="EchoFlow" className="nav-logo-square-v4" />
          <span>EchoFlow</span>
        </div>
        <div className="nav-links-pill">
          <a href="#features">Features</a>
          <a href="#docs">Docs</a>
          <a href="#privacy">Privacy</a>
        </div>
        <div className="nav-actions-pill">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#setup" 
            className="nav-cta-pill" 
            style={{ textDecoration: 'none' }}
          >
            Get Free
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
