import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Scissors, Type, BrainCircuit } from 'lucide-react';
import './SmartCleanupSection.css';

const SmartCleanupSection: React.FC = () => {
  return (
    <section className="section-v4 cleanup-section-v4" style={{ paddingBottom: '40px' }}>
      <div className="content-v4" style={{ display: 'block', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
        <div className="cleanup-header-v4">
          <span className="label-v4">SMART CLEANUP</span>
          <h2 className="massive-v4">Messy speech to <br /><span className="italic-serif">perfect prose.</span></h2>
        </div>

        <div className="cleanup-visual-v4" style={{ display: 'block', width: '100%', position: 'relative', marginTop: '40px' }}>
          <div className="comparison-card-v4" style={{ display: 'block', width: '100%', height: '240px', position: 'relative', overflow: 'hidden' }}>

            {/* BEFORE LAYER (MESSY) */}
            <motion.div
              className="layer-v4 messy-layer-v4"
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
              animate={{ clipPath: [
                'inset(0 0% 0 0%)',
                'inset(0 0% 0 100%)',
                'inset(0 0% 0 0%)'
              ] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="card-label-v4">BEFORE</div>
              <p>
                "So, um, I was thinking that, uh, maybe we should, like, start the project on Monday? If that's, you know, okay with you? I mean, it's just, uh, a suggestion."
              </p>
            </motion.div>

            {/* AFTER LAYER (POLISHED) */}
            <motion.div
              className="layer-v4 polished-layer-v4"
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
              animate={{ clipPath: [
                'inset(0 100% 0 0%)',
                'inset(0 0% 0 0%)',
                'inset(0 100% 0 0%)'
              ] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="card-label-v4">AFTER</div>
              <p>
                "I suggest we start the project on Monday, if that works for you."
              </p>
              <CheckCircle2 className="success-icon-v4" style={{ color: '#30d158' }} size={20} />
            </motion.div>

            {/* MAGIC DIVIDER LINE */}
            <motion.div
              animate={{ left: ['0%', '100%', '0%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="magic-sweep-line-v4"
              style={{ position: 'absolute', top: 0, bottom: 0, width: '2px', zIndex: 100 }}
            >
              <div className="sweep-pill-v4">
                <Sparkles size={16} />
                Cleaning...
              </div>
            </motion.div>

          </div>
        </div>

        {/* INTEGRATED CLEANUP DETAILS GRID */}
        <div className="cleanup-details-grid-v4">
          <div className="details-item-v4">
            <div className="details-icon-v4"><Scissors size={20} /></div>
            <h4>Goodbye, fillers.</h4>
            <p>Surgically removes the words you say but never want to write.</p>
            <div className="filler-pills-wrap-v4">
              {['um', 'uh', 'so', 'like', 'basically'].map((w) => (
                <span key={w} className="filler-pill-v4">{w}</span>
              ))}
            </div>
          </div>

          <div className="details-item-v4">
            <div className="details-icon-v4"><Type size={20} /></div>
            <h4>Perfect Punctuation</h4>
            <p>Commas, periods, and dashes land exactly where they belong.</p>
            <div className="punct-preview-v4">
              <span className="raw-text-v4">what time...</span>
              <span className="arrow-v4">→</span>
              <span className="clean-text-v4">What time?</span>
            </div>
          </div>

          <div className="details-item-v4">
            <div className="details-icon-v4"><BrainCircuit size={20} /></div>
            <h4>Self-Corrections</h4>
            <p>Changed your mind? We catch the version you actually meant.</p>
            <div className="correction-pill-v4">
              <span className="strikethrough-v4">today</span>
              <span className="success-v4">tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCleanupSection;
