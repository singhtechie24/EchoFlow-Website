import { motion } from 'framer-motion';
import { Mail, MessageCircle, HelpCircle, FileText } from 'lucide-react';

const Support = () => {
  return (
    <div className="page-support">
      <section className="support-hero-v3">
        <h1>Here to help you find your <span className="italic-serif">flow</span>.</h1>
        <p>Everything you need to get the most out of EchoFlow.</p>
      </section>

      <div className="support-grid-v3">
        <div className="support-card-v3">
           <HelpCircle size={32} color="#007aff" />
           <h3>FAQ</h3>
           <p>Common questions about setup, hotkeys, and AI models.</p>
           <button className="support-link-v3">Browse Articles</button>
        </div>
        <div className="support-card-v3">
           <FileText size={32} color="#af52de" />
           <h3>Docs</h3>
           <p>Detailed technical documentation for power users.</p>
           <button className="support-link-v3">Read the Docs</button>
        </div>
        <div className="support-card-v3">
           <Mail size={32} color="#30d158" />
           <h3>Contact</h3>
           <p>Need specialized help? Reach out to our team.</p>
           <button className="support-link-v3">Email Support</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
