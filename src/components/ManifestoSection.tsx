import React from 'react';
import { motion } from 'framer-motion';
import { Lock, EyeOff, WifiOff } from 'lucide-react';
import './ManifestoSection.css';

const ManifestoSection: React.FC = () => {
  return (
    <section className="section-v4 manifesto-v4 no-padding-bottom">
      <div className="content-v4">
        <span className="label-v4">THE MANIFESTO</span>
        <h2 className="massive-v4">Your data is <span className="italic-serif">sacred</span>.</h2>
        <div className="manifesto-grid-v4">
          <motion.div whileHover={{ y: -10, scale: 1.05 }} className="manifesto-card-v4">
            <Lock size={24} className="accent-icon-v4" />
            <h3>Local-First</h3>
            <p>Everything stays on your machine. No cloud, no leaks, no compromises.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10, scale: 1.05 }} className="manifesto-card-v4">
            <EyeOff size={24} className="accent-icon-v4" />
            <h3>Zero Tracking</h3>
            <p>We don't track what you say, what you write, or who you are.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10, scale: 1.05 }} className="manifesto-card-v4 manifesto-accent-card-v4">
            <WifiOff size={24} className="accent-icon-v4" />
            <h3>Offline by Design</h3>
            <p>Works in the basement, in the air, and everywhere in between.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
