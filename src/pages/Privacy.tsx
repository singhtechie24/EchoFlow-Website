import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, ServerOff, CheckCircle } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="page-privacy">
      <section className="privacy-hero-v3">
        <div className="privacy-badge-v3">100% DATA SOVEREIGNTY</div>
        <h1>Your data. Your machine. <span className="italic-serif">Period.</span></h1>
        <p>In an age of AI surveillance, EchoFlow is your sanctuary. We believe your thoughts, your audio, and your history belong to you—and only you.</p>
      </section>

      <section className="manifesto-v3">
        <div className="manifesto-content-v3">
          <div className="manifesto-visual-v3">
            <div className="img-placeholder-v3" style={{ height: '500px' }}>
                <Shield size={120} color="var(--accent)" style={{ opacity: 0.1 }} />
            </div>
          </div>
          <div className="manifesto-text-v3">
            <div className="manifesto-item-v3">
               <div className="m-icon-v3"><ServerOff color="#ff3b30" /></div>
               <div>
                  <h3>Zero-Cloud Architecture</h3>
                  <p>EchoFlow uses highly optimized Whisper models that run on your local hardware. Not a single byte of audio is ever sent to a remote server.</p>
               </div>
            </div>
            <div className="manifesto-item-v3">
               <div className="m-icon-v3"><EyeOff color="#007aff" /></div>
               <div>
                  <h3>No Tracking. No Analytics.</h3>
                  <p>We don’t track what you say, who you talk to, or how often you use the app. We don’t even know you exist.</p>
               </div>
            </div>
            <div className="manifesto-item-v3">
               <div className="m-icon-v3"><Lock color="#30d158" /></div>
               <div>
                  <h3>Offline by Design</h3>
                  <p>EchoFlow works perfectly in Airplane Mode. Your privacy shouldn't depend on an internet connection.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="security-audit-v3">
        <h2>Trust through transparency.</h2>
        <p>Our core logic is open and verifiable. We believe that privacy tools should be auditable by the community. Join our GitHub to see exactly how we handle your data.</p>
        <div className="audit-points-v3">
           <div className="a-point-v3"><CheckCircle size={18} /> Verifiable Rust Core</div>
           <div className="a-point-v3"><CheckCircle size={18} /> Local History Encryption</div>
           <div className="a-point-v3"><CheckCircle size={18} /> No Third-Party SDKs</div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
