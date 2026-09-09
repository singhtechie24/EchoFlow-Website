import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mic, CheckCircle2 } from 'lucide-react';
import './WorkflowSection.css';

const WorkflowSection: React.FC = () => {
  return (
    <section id="features" className="section-v4 workflow-v4 no-padding-bottom">
      <div className="content-v4 center-text-v4">
        <span className="label-v4">HOW IT WORKS</span>
        <h2 className="massive-v4">Three steps. <br /><span className="italic-serif">No setup required.</span></h2>

        <div className="steps-container-v4">
          <div className="workflow-master-line-v4">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="workflow-fill-line-v4"
            />
          </div>

          <div className="step-item-v4">
            <motion.div
              whileHover={{ scale: 1.15, rotate: -5, backgroundColor: '#0056b3' }}
              className="step-icon-wrap-v4"
            >
              <Zap size={24} />
            </motion.div>
            <span className="step-label-v4">STEP 1</span>
            <h3>Hold</h3>
            <p>Press and hold your hotkey (Win + Alt by default).</p>
          </div>
          <div className="step-item-v4">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5, backgroundColor: '#0056b3' }}
              className="step-icon-wrap-v4"
            >
              <Mic size={24} />
            </motion.div>
            <span className="step-label-v4">STEP 2</span>
            <h3>Speak</h3>
            <p>Talk naturally while the aurora pill glows.</p>
          </div>
          <div className="step-item-v4">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 0, backgroundColor: '#30d158' }}
              className="step-icon-wrap-v4"
            >
              <CheckCircle2 size={24} />
            </motion.div>
            <span className="step-label-v4">STEP 3</span>
            <h3>Release</h3>
            <p>Your words are transcribed and pasted instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
