import React from 'react';
import { motion } from 'framer-motion';
import dashboardImg from '../assets/dashboard.png';
import './DashboardPreview.css';

const DashboardPreview: React.FC = () => {
  return (
    <section className="section-v4 dashboard-reveal-v4">
      <div className="content-v4 center-text-v4">
        <div className="dashboard-perspective-v4">
          <motion.div
            initial={{ opacity: 0, rotateX: 25, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 12, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              rotateX: 6,
              y: -15,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="dashboard-container-v4"
          >
            <motion.div
              className="dashboard-aurora-glow-v4"
              whileHover={{ opacity: 0.6, scale: 1.2 }}
            />
            <img src={dashboardImg} alt="EchoFlow Dashboard" className="dashboard-mockup-v4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
