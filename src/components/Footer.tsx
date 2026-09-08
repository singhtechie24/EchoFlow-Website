import React from 'react';
import logoImg from '../assets/echoflow-mark.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer-v4">
      <div className="footer-grid-v4">
        <div className="footer-brand-v4">
          <div className="brand-lockup-v4">
            <div className="footer-logo-nudge-v4">
              <img src={logoImg} alt="EchoFlow" className="footer-logo-v4-img" />
            </div>
            <h3 className="footer-title-v4">EchoFlow</h3>
          </div>
          <p className="footer-desc-v4">The elite dictation companion <br />built for privacy-first typing.</p>
        </div>
        
        <div className="footer-nav-col-v4">
          <h4>PRODUCT</h4>
          <a href="#features">Features</a>
          <a href="#demo">How it works</a>
          <a href="#privacy">Privacy</a>
        </div>
        
        <div className="footer-nav-col-v4">
          <h4>SUPPORT</h4>
          <a href="mailto:support@echoflow.ai">Email Support</a>
        </div>
      </div>
      
      <div className="footer-bottom-v4">
        <div className="footer-copyright-v4">
          © 2026 EchoFlow. All rights reserved.
        </div>
        <div className="footer-domain-v4">
          echoflow.ai
        </div>
      </div>
    </footer>
  );
};

export default Footer;
