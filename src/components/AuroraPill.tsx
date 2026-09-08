import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Cpu, Sparkles, ArrowDownToLine, RefreshCcw, Power } from 'lucide-react';

type Phase = 'recording' | 'transcribing' | 'cleaning' | 'inserting' | 'loading' | 'idle';

const AuroraPill = () => {
  const [phase, setPhase] = useState<Phase>('recording');
  const [isAuto, setIsAuto] = useState(true);

  const phases: { id: Phase; label: string; color: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'recording', label: 'Recording', color: '#ff3b30', icon: <Mic size={14} />, desc: 'Capturing your voice with zero latency.' },
    { id: 'transcribing', label: 'Transcribing', color: '#007aff', icon: <Cpu size={14} />, desc: 'Converting speech into text locally on your GPU.' },
    { id: 'cleaning', label: 'Cleaning', color: '#af52de', icon: <Sparkles size={14} />, desc: 'AI-powered polishing: removing ums, ahs, and stutters.' },
    { id: 'inserting', label: 'Inserting', color: '#30d158', icon: <ArrowDownToLine size={14} />, desc: 'Pasting the perfect text directly into your active window.' },
    { id: 'loading', label: 'Loading', color: '#ff9500', icon: <RefreshCcw size={14} />, desc: 'Optimizing local models for your next session.' },
    { id: 'idle', label: 'Idle', color: '#555', icon: <Power size={14} />, desc: 'Ready to find your flow whenever you are.' }
  ];

  useEffect(() => {
    if (!isAuto) return;
    const interval = setInterval(() => {
      setPhase((current) => {
        const idx = phases.findIndex(p => p.id === current);
        return phases[(idx + 1) % phases.length].id;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isAuto]);

  const currentPhase = phases.find(p => p.id === phase) || phases[5];

  return (
    <div className="state-pill-container">
      <div className="section-header-v4">
        <span className="label-v4">INTERACTIVE DEMO</span>
        <h2 className="demo-massive-v4">The Anatomy of <span className="italic-serif">Flow.</span></h2>
        <p>Experience the 6 phases of the EchoFlow engine. Click each state to see the pill react in real-time.</p>
      </div>

      <div className="aurora-display">
        {/* THE PILL (ZEN ARCHITECTURE) */}
        <motion.div 
          animate={{ 
            width: phase === 'idle' ? 40 : 400,
            height: phase === 'idle' ? 4 : 80,
            borderRadius: phase === 'idle' ? 2 : 100,
            background: phase === 'idle' ? 'rgba(128,128,128,0.5)' : '#000',
            boxShadow: phase === 'idle' ? 'none' : `0 0 80px ${currentPhase.color}33`,
            borderColor: phase === 'idle' ? 'transparent' : `${currentPhase.color}66`
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="master-pill-v4"
        >
          <AnimatePresence>
            {phase !== 'idle' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pill-content-v4"
              >
                <div className="pill-inner-v4">
                  <div className="pill-status-icon" style={{ backgroundColor: currentPhase.color }}>
                     {currentPhase.icon}
                  </div>
                  <span className="pill-status-label">{currentPhase.label}...</span>
                </div>
                
                <div className="pill-waveform-v4">
                   {[...Array(16)].map((_, i) => (
                     <motion.div 
                       key={i}
                       animate={{ 
                         /* FLOWING LIQUID WAVES */
                         height: phase === 'recording' 
                           ? [8, 32, 8] 
                           : [8, 16, 8],
                         backgroundColor: phase === 'recording' 
                           ? (i < 8 ? '#ff3b30' : '#ff9500') 
                           : (phase === 'cleaning' ? (i < 8 ? '#af52de' : '#ff2d55') : currentPhase.color)
                       }}
                       transition={{ 
                         duration: phase === 'recording' ? 0.4 : 1.2, 
                         repeat: Infinity, 
                         delay: i * 0.05,
                         ease: "easeInOut"
                       }}
                       className="wave-bar-v4"
                     />
                   ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* PHASE SELECTOR */}
        <div className="phase-selector-v4">
           {phases.map((p) => (
             <button 
               key={p.id}
               onClick={() => {
                 setPhase(p.id as Phase);
                 setIsAuto(false);
               }}
               className={`phase-btn-v4 ${phase === p.id ? 'active' : ''}`}
             >
               <div className="phase-dot-v4" style={{ backgroundColor: p.color }} />
               {p.label}
             </button>
           ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.p 
            key={phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="phase-description-v4"
          >
            {currentPhase.desc}
          </motion.p>
        </AnimatePresence>
      </div>

      <style>{`
        .state-pill-container {
          padding: 80px 8%;
          text-align: center;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 80px;
          margin: 40px auto; /* Reduced from 100px */
          max-width: 1400px;
        }

        .demo-massive-v4 {
          font-size: clamp(32px, 5vw, 64px);
          line-height: 1.1;
          margin-bottom: 24px;
          color: #121212; /* Explicit Black */
          transition: color 0.5s ease;
        }

        [data-theme='dark'] .demo-massive-v4 {
          color: #FDFCF8; /* Explicit White */
        }

        .aurora-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          margin-top: 80px;
          min-height: 250px;
        }

        .master-pill-v4 {
          background: #000;
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 30px;
          overflow: hidden;
          z-index: 2;
        }

        .pill-content-v4 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          z-index: 3;
        }

        .pill-inner-v4 {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pill-status-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .pill-status-label {
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.02em;
        }

        .pill-waveform-v4 {
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .wave-bar-v4 {
          width: 4px;
          border-radius: 10px;
        }

        .phase-selector-v4 {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .phase-btn-v4 {
          padding: 12px 24px;
          background: rgba(0,0,0,0.05);
          border: 1px solid transparent;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
        }

        [data-theme='dark'] .phase-btn-v4 {
          background: rgba(255,255,255,0.05);
        }

        .phase-btn-v4.active {
          background: var(--text-main);
          color: var(--bg-cream);
        }

        .phase-dot-v4 {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .phase-description-v4 {
          font-size: 20px;
          color: #444; /* Force even deeper grey for Light */
          max-width: 600px;
          line-height: 1.5;
          transition: color 0.5s ease;
        }

        [data-theme='dark'] .phase-description-v4 {
          color: #a1a1a6; /* Dark mode grey */
        }

        .section-header-v4 p {
          color: #666;
          transition: color 0.5s ease;
        }

        [data-theme='dark'] .section-header-v4 p {
          color: #a1a1a6;
        }
      `}</style>
    </div>
  );
};

export default AuroraPill;
