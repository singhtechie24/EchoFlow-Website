import { motion } from 'framer-motion';
import { Zap, Cpu, MousePointer2, ShieldCheck, Clock, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap color="#007aff" />,
      title: "Ultra-Low Latency",
      desc: "Transcription that keeps up with your fastest thoughts. No lag, no waiting for the cloud."
    },
    {
      icon: <Cpu color="#af52de" />,
      title: "Hardware Accelerated",
      desc: "Optimized for your PC's CPU and GPU. Whisper-quiet performance that doesn't drain your battery."
    },
    {
      icon: <MousePointer2 color="#30d158" />,
      title: "Smart Auto-Paste",
      desc: "Your text appears exactly where your cursor is. No copy-pasting required."
    },
    {
      icon: <ShieldCheck color="#ff3b30" />,
      title: "Zero-Cloud Privacy",
      desc: "Not a single byte of audio leaves your machine. Ever."
    }
  ];

  return (
    <div className="page-features">
      <section className="features-hero-v3">
        <span className="label-v3">THE TECHNOLOGY</span>
        <h1>Engineered for <span className="italic-serif">power</span> users.</h1>
        <p>EchoFlow isn't just dictation—it's a productivity superpower. Discover the secret sauce behind the speed.</p>
      </section>

      <section className="features-grid-v3">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="feature-card-v3"
          >
            <div className="feature-icon-v3">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="deep-dive-v3">
        <div className="deep-dive-content-v3">
          <div className="text-v3">
            <span className="label-v3">SMART CONTEXT</span>
            <h2>Transcription with <span className="italic-serif">awareness</span>.</h2>
            <p>Standard dictation tools often fail on technical names and jargon. EchoFlow’s engine scans your surrounding text to provide the context the AI needs to spell every specialized term correctly.</p>
            <div className="feature-bullets-v3">
               <div className="bullet-v3"><Check size={16} /> Technical jargon support</div>
               <div className="bullet-v3"><Check size={16} /> Code-aware formatting</div>
               <div className="bullet-v3"><Check size={16} /> Personalized dictionary</div>
            </div>
          </div>
          <div className="visual-v3">
             <div className="img-placeholder-v3" style={{ height: '400px' }}>
                <Cpu size={80} color="var(--accent)" style={{ opacity: 0.1 }} />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Check = ({ size }: { size: number }) => (
  <ShieldCheck size={size} color="#30d158" />
);

export default Features;
