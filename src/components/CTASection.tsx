import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';
import { DOWNLOAD_URL } from '../constants';
import './CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-v4" style={{ padding: '0 8%' }}>
      <div className="cta-box-v4 refined-cta-box-v4">
        <h2>Ready to find your <span className="italic-serif">flow</span>?</h2>
        <p>Join thousands of writers, coders, and thinkers using EchoFlow.</p>
        <div className="cta-wrapper-v4" style={{ marginTop: '24px' }}>
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="cta-glow-v4 dynamic-glow-v4"
          />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={DOWNLOAD_URL}
            className="primary-btn-v4 elite-download-btn-v4 bottom-cta-btn-v4"
          >
            Get Started Free
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDownToLine size={18} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
