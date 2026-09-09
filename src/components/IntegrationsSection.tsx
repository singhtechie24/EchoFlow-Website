import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MessageSquare, Mail, Code, FileText, Globe } from 'lucide-react';
import './IntegrationsSection.css';

const apps = [
  { icon: <Mail size={24} />, title: "Email & Replies", desc: "Dictate full emails in seconds. Sound natural, not robotic." },
  { icon: <Code size={24} />, title: "Code Comments", desc: "Capture intent for reviewers without breaking your flow." },
  { icon: <MessageSquare size={24} />, title: "Slack & Messaging", desc: "Reply to messages 3x faster than typing." },
  { icon: <FileText size={24} />, title: "Docs & Notes", desc: "Notion, Obsidian, or Word — anywhere a cursor blinks." },
  { icon: <Globe size={24} />, title: "Forms & Browsers", desc: "Fill in search bars or address fields with a hotkey." },
  { icon: <Terminal size={24} />, title: "Terminal Commands", desc: "Speak the long flag-heavy commands you always forget." },
];

const IntegrationsSection: React.FC = () => {
  return (
    <section className="section-v4 apps-v4 no-padding-bottom" style={{ paddingTop: '40px' }}>
      <div className="content-v4">
        <div className="center-text-v4">
          <span className="label-v4">INTEGRATIONS</span>
          <h2 className="massive-v4">Write everywhere <br /><span className="italic-serif">you type.</span></h2>
        </div>

        <div className="apps-grid-v4">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02, borderColor: 'var(--accent)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="app-card-v4"
            >
              <div className="app-icon-v4">{app.icon}</div>
              <h4>{app.title}</h4>
              <p>{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
