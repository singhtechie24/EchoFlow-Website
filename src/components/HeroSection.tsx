import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Play } from 'lucide-react';
import { DOWNLOAD_URL } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-v4 elite-hero-v4">
      <div className="hero-content-v4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pill-badge-v4"
        >
          ✨ On-device AI. Free forever.
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Talk. We’ll do <br />
          <span className="italic-serif">the writing.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          EchoFlow turns your speech into perfect text <span className="italic-serif">instantly</span>. <br />
          Built for the privacy-first generation, right on your Windows desktop.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="hero-actions-v4"
        >
          <div className="cta-wrapper-v4">
             <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="cta-glow-v4"
             />
             <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href={DOWNLOAD_URL} 
                className="primary-btn-v4 elite-download-btn-v4"
             >
                Download for Windows 
                <motion.div 
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDownToLine size={18} />
                </motion.div>
             </motion.a>
          </div>
          
          <motion.a 
            href="#demo" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="secondary-btn-v4" 
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
             Watch the flow <Play size={16} fill="currentColor" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
