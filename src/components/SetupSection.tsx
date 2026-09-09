import React from 'react';
import { motion } from 'framer-motion';
import { Download, Settings, PlayCircle } from 'lucide-react';
import './SetupSection.css';

const SetupSection: React.FC = () => {
  return (
    <section id="docs" className="section-v4 setup-master-v4" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="content-v4 center-text-v4">
        <span className="label-v4">GET STARTED</span>
        <h2 className="massive-v4">Your voice. <span className="italic-serif">Your control.</span></h2>
        <p className="large-p-v4" style={{ maxWidth: '700px', margin: '20px auto 60px' }}>
          Install EchoFlow in seconds and start dictating with 100% privacy.
          Built for Windows, engineered for you.
        </p>

        {/* THE HORIZONTAL 3-STEP FLOW */}
        <div className="onboarding-grid-v4">
          <motion.div whileHover={{ y: -10 }} className="onboard-card-v4">
            <div className="onboard-icon-v4"><Download size={24} /></div>
            <h3>01. Install</h3>
            <p>Run <strong>EchoFlow_Setup.exe</strong> to install the app on your PC.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="onboard-card-v4">
            <div className="onboard-icon-v4"><Settings size={24} /></div>
            <h3>02. Permit</h3>
            <p>Allow Mic access so our local AI can hear your voice.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="onboard-card-v4">
            <div className="onboard-icon-v4"><PlayCircle size={24} /></div>
            <h3>03. Flow</h3>
            <p>Hold <strong>Win + Alt</strong> to speak. Release to paste text instantly.</p>
          </motion.div>
        </div>

        {/* SECONDARY TECH & SUPPORT GRID */}
        <div className="onboarding-support-grid-v4" style={{ marginTop: '32px' }}>
          <motion.div whileHover={{ scale: 1.02 }} className="support-card-v4">
            <div className="support-badge-v4">THE ENGINE</div>
            <h4>Universal Compatibility</h4>
            <p>We detect your hardware automatically. CUDA for NVIDIA GPUs, CPU fallback for everything else.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="support-card-v4 accent-support-v4">
            <div className="support-badge-v4">FIX</div>
            <h4>Troubleshooting</h4>
            <p>If auto-paste fails, simply run EchoFlow as Administrator to grant it focus permissions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
