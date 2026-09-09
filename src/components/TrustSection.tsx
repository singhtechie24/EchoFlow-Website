import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './TrustSection.css';

const TrustSection: React.FC = () => {
  return (
    <section id="privacy" className="section-v4 privacy-bg-v4 no-padding-bottom">
      <div className="content-v4" style={{ display: 'block', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
        <div className="trust-unified-card-v4">
          <div className="center-text-v4">
            <span className="label-v4">TRUST</span>
            <h2>Dictation without <span className="italic-serif">surveillance.</span></h2>
            <p className="large-p-v4">Most AI companies sell your data to train their models. We don't even have a server to send it to.</p>
            <div className="trust-badge-v4">
              <ShieldCheck size={20} /> 100% Local Processing Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
