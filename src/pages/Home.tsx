import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Cpu, MessageSquare, Layers } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-home">
      {/* HERO SECTION */}
      <section className="hero-v3">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-badge-v3"
        >
          ✨ Version 1.0.0 is officially live
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Speak naturally.<br />
          <span className="italic-serif">Write perfectly.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          EchoFlow is the world’s most advanced <span className="italic-serif">local</span> AI dictation engine for Windows. 
          Built for speed, engineered for absolute privacy.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="hero-cta-v3"
        >
          <button className="btn-primary-v3">
            Download EchoFlow Free <ArrowRight size={20} />
          </button>
          <span className="cta-subtext-v3">No account needed. 100% On-Device.</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-visual-v3"
        >
          <div className="img-placeholder-v3" style={{ height: '500px' }}>
            <div className="wave-animation-v3">
              <div className="wave-bar-v3" />
              <div className="wave-bar-v3" />
              <div className="wave-bar-v3" />
              <div className="wave-bar-v3" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="section-comparison-v3">
        <div className="section-header-v3">
          <span className="label-v3">THE MAGIC</span>
          <h2>Engineered for <span className="italic-serif">clarity</span>.</h2>
          <p>We don't just transcribe. We polish. EchoFlow understands the messiness of human speech and turns it into professional prose instantly.</p>
        </div>

        <div className="comparison-grid-v3">
          <motion.div 
            whileHover={{ y: -10 }}
            className="comp-card messy-card-v3"
          >
            <span className="comp-label-v3">TRADITIONAL DICTATION</span>
            <p>"Uh, hello... so I was thinking that, um, maybe we should, uh, talk about the project today?"</p>
          </motion.div>
          <div className="comp-arrow-v3">
            <ArrowRight size={32} color="var(--accent)" />
          </div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="comp-card active-card-v3"
          >
            <span className="comp-label-v3">ECHOFLOW AI</span>
            <p>"Hello. I was thinking we should discuss the project today."</p>
          </motion.div>
        </div>
      </section>

      {/* INTEGRATION SECTION */}
      <section className="section-integration-v3">
        <div className="integration-content-v3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Works <span className="italic-serif">everywhere</span> you do.</h2>
          <p>EchoFlow is an invisible layer that makes every app better. Slack, Notion, Gmail, Cursor—your voice keyboard is always just one hotkey away.</p>
          <div className="img-placeholder-v3" style={{ height: '300px', maxWidth: '800px', marginTop: '40px' }}>
             <Layers size={48} color="var(--accent)" style={{ opacity: 0.3 }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
