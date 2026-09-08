import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Zap, Shield, Cpu, 
  Sparkles, ArrowDownToLine, RefreshCcw, Power,
  Lock, EyeOff, ServerOff, ShieldCheck, 
  Github, Twitter, Mail, Moon, Sun, Mic, CheckCircle2,
  Terminal, MessageSquare, Mail as MailIcon, Code, FileText, Globe, XCircle, MinusCircle,
  ToggleLeft, Scissors, Type, BrainCircuit, Download, Settings, PlayCircle, Plus,
  Play, WifiOff
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// ASSETS
import logoImg from './assets/echoflow-mark.svg';
import dashboardImg from './assets/dashboard.png';
import asset3D from './assets/2.png';

import AuroraPill from './components/AuroraPill';
import './App.css';

// OFFICIAL DOWNLOAD LINK (Public GitHub Release Asset)
const DOWNLOAD_URL = "https://github.com/singhtechie24/EchoFlow-Public/releases/download/v1.0.0/EchoFlow_1.0.0_x64-setup.exe";

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-v4 ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-pill-v4">
        <div className="nav-logo-v4">
          <img src={logoImg} alt="EchoFlow" className="nav-logo-square-v4" />
          <span>EchoFlow</span>
        </div>
        <div className="nav-links-pill">
          <a href="#features">Features</a>
          <a href="#docs">Docs</a>
          <a href="#privacy">Privacy</a>
        </div>
        <div className="nav-actions-pill">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#setup" 
            className="nav-cta-pill" 
            style={{ textDecoration: 'none' }}
          >
            Get Free
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-row-v4 ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-header-v4">
        <h3>{question}</h3>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="faq-icon-v4"
        >
          <Plus size={20} />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-body-v4"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="app-v4" style={{ boxSizing: 'border-box' }}>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* HERO */}
      <section className="hero-v4 elite-hero-v4">
        <div className="hero-content-v4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pill-badge-v4"
          >
            ✨ On-device AI. Free forever.
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Talk. We’ll do <br />
            <span className="italic-serif">the writing.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            EchoFlow turns your speech into perfect text <span className="italic-serif">instantly</span>. <br />
            Built for the privacy-first generation, right on your Windows desktop.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-actions-v4"
          >
            <div className="cta-wrapper-v4">
               <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="cta-glow-v4"
               />
               <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  href={DOWNLOAD_URL} 
                  className="primary-btn-v4 elite-download-btn-v4"
               >
                  Download for Windows 
                  <motion.div 
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDownToLine size={18} />
                  </motion.div>
               </motion.a>
            </div>
            
            <motion.a 
              href="#demo" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="secondary-btn-v4" 
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
               Watch the flow <Play size={16} fill="currentColor" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="section-v4 dashboard-reveal-v4">
         <div className="content-v4 center-text-v4">
            <div className="dashboard-perspective-v4">
               <motion.div 
                  initial={{ opacity: 0, rotateX: 25, y: 100 }}
                  whileInView={{ opacity: 1, rotateX: 12, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.04, 
                    rotateX: 6, 
                    y: -15,
                    transition: { type: "spring", stiffness: 400, damping: 25 } 
                  }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="dashboard-container-v4"
               >
                  <motion.div 
                    className="dashboard-aurora-glow-v4" 
                    whileHover={{ opacity: 0.6, scale: 1.2 }}
                  />
                  <img src={dashboardImg} alt="EchoFlow Dashboard" className="dashboard-mockup-v4" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* THREE STEPS WORKFLOW */}
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

      {/* SMART CLEANUP */}
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

      {/* WRITE EVERYWHERE */}
      <section className="section-v4 apps-v4 no-padding-bottom" style={{ paddingTop: '40px' }}>
         <div className="content-v4">
            <div className="center-text-v4">
               <span className="label-v4">INTEGRATIONS</span>
               <h2 className="massive-v4">Write everywhere <br /><span className="italic-serif">you type.</span></h2>
            </div>
            
            <div className="apps-grid-v4">
               {[
                  { icon: <MailIcon />, title: "Email & Replies", desc: "Dictate full emails in seconds. Sound natural, not robotic." },
                  { icon: <Code />, title: "Code Comments", desc: "Capture intent for reviewers without breaking your flow." },
                  { icon: <MessageSquare />, title: "Slack & Messaging", desc: "Reply to messages 3x faster than typing." },
                  { icon: <FileText />, title: "Docs & Notes", desc: "Notion, Obsidian, or Word — anywhere a cursor blinks." },
                  { icon: <Globe />, title: "Forms & Browsers", desc: "Fill in search bars or address fields with a hotkey." },
                  { icon: <Terminal />, title: "Terminal Commands", desc: "Speak the long flag-heavy commands you always forget." }
               ].map((app, i) => (
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

      {/* MANIFESTO */}
      <section className="section-v4 manifesto-v4 no-padding-bottom">
        <div className="content-v4">
          <span className="label-v4">THE MANIFESTO</span>
          <h2 className="massive-v4">Your data is <span className="italic-serif">sacred</span>.</h2>
          <div className="manifesto-grid-v4">
             <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                className="manifesto-card-v4"
             >
                <Lock size={24} className="accent-icon-v4" />
                <h3>Local-First</h3>
                <p>Everything stays on your machine. No cloud, no leaks, no compromises.</p>
             </motion.div>
             <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                className="manifesto-card-v4"
             >
                <EyeOff size={24} className="accent-icon-v4" />
                <h3>Zero Tracking</h3>
                <p>We don't track what you say, what you write, or who you are.</p>
             </motion.div>
             <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                className="manifesto-card-v4 manifesto-accent-card-v4"
             >
                <WifiOff size={24} className="accent-icon-v4" />
                <h3>Offline by Design</h3>
                <p>Works in the basement, in the air, and everywhere in between.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO (THE BRIDGE) */}
      <section id="demo" className="section-v4 no-padding-top no-padding-bottom">
         <div className="content-v4 center-text-v4 bridge-header-v4">
            <span className="label-v4">THE ENGINE</span>
            <h2 className="massive-v4">Engineered for <span className="italic-serif">speed.</span></h2>
         </div>
         <AuroraPill />
      </section>

      {/* COMPARISON TABLE */}
      <section className="section-v4 comparison-v4 no-padding-bottom">
         <div className="content-v4">
            <div className="center-text-v4">
               <span className="label-v4">WHY ECHOFLOW</span>
               <h2 className="massive-v4">Built for the way <br /><span className="italic-serif">you actually work.</span></h2>
            </div>
            
            <div className="table-container-v4">
               <table className="comparison-table-v4">
                  <thead>
                     <tr>
                        <th>Capability</th>
                        <th className="highlight-v4">EchoFlow</th>
                        <th>Standard Dictation</th>
                        <th>Cloud Apps</th>
                     </tr>
                  </thead>
                  <tbody>
                     {[
                        { cap: "100% On-device processing", echo: true, std: false, cloud: false },
                        { cap: "Sub-second Latency", echo: true, std: "Partial", cloud: false },
                        { cap: "Choose your own model", echo: true, std: false, cloud: "Partial" },
                        { cap: "No subscription required", echo: true, std: true, cloud: false },
                        { cap: "Global Hotkey / PTT", echo: true, std: "Partial", cloud: "Partial" }
                     ].map((row, i) => (
                        <tr key={i}>
                           <td>{row.cap}</td>
                           <td className="highlight-v4">{row.echo === true ? <CheckCircle2 className="check-v4" /> : row.echo}</td>
                           <td>{row.std === true ? <CheckCircle2 /> : row.std === false ? <XCircle className="x-v4" /> : <MinusCircle className="m-v4" />}</td>
                           <td>{row.cloud === true ? <CheckCircle2 /> : row.cloud === false ? <XCircle className="x-v4" /> : <MinusCircle className="m-v4" />}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* CHOOSE YOUR ENGINE */}
      <section className="section-v4 engine-v4 no-padding-bottom">
         <div className="content-v4">
            <div className="center-text-v4">
               <span className="label-v4">MODELS & PROVIDERS</span>
               <h2 className="massive-v4">Choose your <span className="italic-serif">engine.</span></h2>
            </div>
            
            <div className="engine-grid-v4">
               <div className="engine-card-v4 local-v4">
                  <div className="engine-tag-v4">AVAILABLE NOW</div>
                  <h3>Local Models</h3>
                  <p>Run entirely on your machine. Private & Fast.</p>
                  <div className="model-list-v4">
                     <div className="model-row-v4"><span>Whisper Tiny</span> <span className="model-badge-v4">Fastest</span></div>
                     <div className="model-row-v4"><span>Whisper Base</span> <span className="model-badge-v4 rec">Recommended</span></div>
                     <div className="model-row-v4"><span>Whisper Small</span> <span className="model-badge-v4">Balanced</span></div>
                     <div className="model-row-v4"><span>Whisper Medium</span> <span className="model-badge-v4">Accurate</span></div>
                  </div>
               </div>
               
               <div className="engine-card-v4 cloud-v4">
                  <div className="engine-tag-v4 coming-soon-tag-v4">COMING SOON</div>
                  <div className="coming-soon-overlay-v4" />
                  <h3>Cloud Providers</h3>
                  <p>Bring your own API key for ultimate power.</p>
                  <div className="model-list-v4">
                     <div className="model-row-v4"><span>OpenAI GPT-4o</span></div>
                     <div className="model-row-v4"><span>Groq (Whisper-v3)</span></div>
                     <div className="model-row-v4"><span>Deepgram Nova-2</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* TRUST */}
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

      {/* THE SETUP & SPECS SECTION */}
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
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="support-card-v4"
               >
                  <div className="support-badge-v4">THE ENGINE</div>
                  <h4>Universal Compatibility</h4>
                  <p>We detect your hardware automatically. CUDA for NVIDIA GPUs, CPU fallback for everything else.</p>
               </motion.div>

               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="support-card-v4 accent-support-v4"
               >
                  <div className="support-badge-v4">FIX</div>
                  <h4>Troubleshooting</h4>
                  <p>If auto-paste fails, simply run EchoFlow as Administrator to grant it focus permissions.</p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="section-v4 faq-section-v4" style={{ paddingBottom: '40px' }}>
         <div className="content-v4 center-text-v4">
            <span className="label-v4">FAQ</span>
            <h2 className="massive-v4">Got questions? <br /><span className="italic-serif">We've got answers.</span></h2>
            <p className="large-p-v4">If you don't see your question, <a href="mailto:support@echoflow.ai" className="faq-link-v4">get in touch</a>.</p>
            
            <div className="faq-container-v4">
               <FAQItem 
                 question="Is EchoFlow really free?" 
                 answer="Yes, EchoFlow is 100% free. We believe privacy-first dictation should be accessible to everyone. There are no hidden subscriptions or cloud processing fees." 
               />
               <FAQItem 
                 question="What is Smart Cleanup?" 
                 answer="Smart Cleanup is our proprietary AI engine that removes fillers like 'um' and 'uh', corrects grammar, and transforms messy dictation into polished text instantly." 
               />
               <FAQItem 
                 question="Why does it require Windows 10 or 11?" 
                 answer="EchoFlow is built for the modern Windows desktop environment to ensure the highest performance and deepest integration with your favorite applications." 
               />
               <FAQItem 
                 question="Does EchoFlow send my voice or transcripts to the cloud?" 
                 answer="Never. EchoFlow is offline-by-design. All transcription and AI processing happens locally on your own machine. Your data never leaves your computer." 
               />
               <FAQItem 
                 question="Can I use my own AI models?" 
                 answer="Yes! EchoFlow supports choosing from different local Whisper models, and soon you'll be able to bring your own cloud API keys (like OpenAI) for maximum power." 
               />
               <FAQItem 
                 question="Can I change the hotkey?" 
                 answer="Absolutely. While Win + Alt is the default, you can customize the hotkey in the EchoFlow settings menu to whatever fits your personal workflow best." 
               />
            </div>
         </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-v4" style={{ padding: '0 8%' }}>
         <div className="cta-box-v4 refined-cta-box-v4">
            <h2>Ready to find your <span className="italic-serif">flow</span>?</h2>
            <p>Join thousands of writers, coders, and thinkers using EchoFlow.</p>
            <div className="cta-wrapper-v4" style={{ marginTop: '24px' }}>
               <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="cta-glow-v4 dynamic-glow-v4"
               />
               <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  href={DOWNLOAD_URL} 
                  className="primary-btn-v4 elite-download-btn-v4 bottom-cta-btn-v4"
               >
                  Get Started Free
                  <motion.div 
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDownToLine size={18} />
                  </motion.div>
               </motion.a>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-v4">
         <div className="footer-grid-v4">
            <div className="footer-brand-v4">
               <div className="brand-lockup-v4">
                  <div className="footer-logo-nudge-v4">
                     <img src={logoImg} alt="EchoFlow" className="footer-logo-v4-img" />
                  </div>
                  <h3 className="footer-title-v4">EchoFlow</h3>
               </div>
               <p className="footer-desc-v4">The elite dictation companion <br />built for privacy-first typing.</p>
            </div>
            
            <div className="footer-nav-col-v4">
               <h4>PRODUCT</h4>
               <a href="#features">Features</a>
               <a href="#demo">How it works</a>
               <a href="#privacy">Privacy</a>
            </div>
            
            <div className="footer-nav-col-v4">
               <h4>SUPPORT</h4>
               <a href="mailto:support@echoflow.ai">Email Support</a>
            </div>
         </div>
         
         <div className="footer-bottom-v4">
            <div className="footer-copyright-v4">
               © 2026 EchoFlow. All rights reserved.
            </div>
            <div className="footer-domain-v4">
               echoflow.ai
            </div>
         </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        
        .nav-logo-square-v4 { width: 24px; height: 24px; border-radius: 6px; }
        
        .no-padding-top { padding-top: 0 !important; }
        .no-padding-bottom { padding-bottom: 0 !important; }
        
        .bridge-header-v4 {
          padding-top: 120px;
          margin-bottom: 80px;
          position: relative;
          z-index: 10;
        }

        .cta-wrapper-v4 { position: relative; display: inline-block; }
        .cta-glow-v4 {
          position: absolute;
          top: 5px; left: 5px; right: 5px; bottom: 5px;
          background: var(--accent);
          filter: blur(14px);
          border-radius: 100px;
          z-index: 0;
          opacity: 0.2;
          transition: opacity 0.3s ease; /* Smooth glow transition */
        }

        /* TIGHTER GLOW ON HOVER VIA WRAPPER HOVER SELECTOR */
        .cta-wrapper-v4:hover .cta-glow-v4 {
          opacity: 0.4;
          filter: blur(18px);
        }

        /* DYNAMIC GLOW FIX */
        .dynamic-glow-v4 {
          background: #fff;
          opacity: 0.15;
          filter: blur(18px);
        }
        [data-theme='dark'] .dynamic-glow-v4 {
          background: var(--accent);
          opacity: 0.25;
          filter: blur(20px);
        }

        /* REFINED CTA BOX */
        .cta-v4 {
          padding: 0 8% 60px !important; 
        }
        .refined-cta-box-v4 {
          padding: 80px 40px !important; 
          border-radius: 50px !important;
          max-width: 1000px;
          margin: 0 auto;
        }
        .refined-cta-box-v4 h2 {
          margin-bottom: 12px !important;
        }

        .elite-download-btn-v4 {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 36px;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .elite-download-btn-v4:active { transform: scale(0.95); }

        .bottom-cta-btn-v4 {
          background: #fff !important;
          color: #000 !important;
        }
        [data-theme='dark'] .bottom-cta-btn-v4 {
           background: #FDFCF8 !important;
           color: #000 !important;
        }

        /* FOOTER REFINED ALIGNMENT */
        .footer-v4 {
          padding: 80px 8% 40px;
          background: var(--bg);
          border-top: 1px solid var(--border);
        }
        .footer-grid-v4 {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 80px;
          margin-bottom: 80px;
        }
        
        .brand-lockup-v4 {
          display: flex;
          flex-direction: row;
          align-items: center; 
          gap: 14px;
          margin-bottom: 20px;
        }

        .footer-logo-nudge-v4 {
          position: relative;
          top: 7px; 
          width: 42px;
          height: 42px;
          flex-shrink: 0;
        }
        .footer-logo-v4-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .footer-title-v4 {
          font-size: 30px; 
          font-weight: 700;
          letter-spacing: -0.03em;
          margin: 0 !important;
          padding: 0 !important;
          line-height: 1;
          color: #121212;
          display: block;
        }
        [data-theme='dark'] .footer-title-v4 { color: #FDFCF8; }

        .footer-desc-v4 {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          opacity: 0.8;
        }
        [data-theme='dark'] .footer-desc-v4 { color: #888; }
        
        .footer-nav-col-v4 h4 {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: #999;
          margin-bottom: 24px;
          text-transform: uppercase;
        }
        .footer-nav-col-v4 {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-nav-col-v4 a {
          font-size: 14px;
          color: #444;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        [data-theme='dark'] .footer-nav-col-v4 a { color: #aaa; }
        .footer-nav-col-v4 a:hover { color: var(--accent); }

        .footer-bottom-v4 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }
        .footer-copyright-v4, .footer-domain-v4 {
          font-size: 13px;
          color: #999;
          font-weight: 500;
        }

        /* CLEANUP DETAILS VISIBILITY FIXES */
        .cleanup-details-grid-v4 { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 24px; 
          margin-top: 40px; 
        }
        .details-item-v4 { 
          padding: 32px; 
          background: var(--glass); 
          border: 1px solid var(--border); 
          border-radius: 32px; 
          text-align: left; 
        }
        .details-icon-v4 { color: var(--accent); margin-bottom: 20px; }
        .details-item-v4 h4 { font-size: 20px; margin-bottom: 8px; color: #121212; transition: color 0.5s ease; }
        [data-theme='dark'] .details-item-v4 h4 { color: #FDFCF8; }
        .details-item-v4 p { color: #444; font-size: 14px; margin-bottom: 24px; transition: color 0.5s ease; line-height: 1.5; }
        [data-theme='dark'] .details-item-v4 p { color: #a1a1a6; }

        .filler-pills-wrap-v4 {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .filler-pill-v4 {
          font-size: 11px;
          padding: 4px 10px;
          background: rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.1);
          color: #444;
          border-radius: 100px;
          font-weight: 600;
        }
        [data-theme='dark'] .filler-pill-v4 {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.1);
          color: #aaa;
        }

        .punct-preview-v4 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          margin-top: 12px;
        }
        .raw-text-v4 { color: #999; text-decoration: line-through; }
        .arrow-v4 { color: var(--accent); opacity: 0.6; }
        .clean-text-v4 { color: #121212; }
        [data-theme='dark'] .clean-text-v4 { color: #FDFCF8; }

        .correction-pill-v4 {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 700;
          margin-top: 12px;
        }
        .strikethrough-v4 {
          color: #ff3b30;
          text-decoration: line-through;
          opacity: 0.6;
        }
        .success-v4 {
          color: #30d158;
          background: rgba(48, 209, 88, 0.1);
          padding: 2px 8px;
          border-radius: 6px;
        }

        /* ELITE HERO */
        .elite-hero-v4 {
           min-height: 90vh !important;
           display: flex;
           align-items: center;
           justify-content: center;
           padding-bottom: 20px !important;
        }

        /* DASHBOARD REVEAL */
        .dashboard-reveal-v4 { 
          padding: 60px 8% 40px !important; 
          overflow: visible;
          perspective: 2000px;
          border-top: none !important;
          margin-top: 0px !important; 
        }
        .dashboard-perspective-v4 {
          transform-style: preserve-3d;
        }
        .dashboard-container-v4 {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .dashboard-mockup-v4 {
          width: 100%;
          height: auto;
          border-radius: 32px;
          border: 1px solid var(--border);
          box-shadow: 0 80px 150px rgba(0,0,0,0.3);
          z-index: 2;
          position: relative;
        }
        .dashboard-aurora-glow-v4 {
          position: absolute;
          top: -20%;
          left: -10%;
          right: -10%;
          bottom: -20%;
          background: radial-gradient(circle at 50% 50%, #af52de33 0%, #007aff22 40%, transparent 80%);
          filter: blur(100px);
          z-index: 1;
          pointer-events: none;
          opacity: 0.3;
          transition: opacity 0.5s ease;
        }
        
        .manifesto-accent-card-v4 { position: relative; overflow: hidden; }
        .manifesto-asset-wrap-v4 { width: 80px; height: 80px; background: #000; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .manifesto-asset-v4 { width: 50px; height: 50px; }

        /* WORKFLOW */
        .workflow-v4 {
          padding-top: 40px !important;
        }

        /* STEPS */
        .steps-container-v4 { display: flex; gap: 40px; margin-top: 80px; justify-content: center; position: relative; }
        .step-item-v4 { flex: 1; max-width: 300px; position: relative; z-index: 2; }
        .step-icon-wrap-v4 { width: 64px; height: 64px; background: var(--accent); color: #fff; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; box-shadow: 0 10px 30px rgba(0,122,255,0.2); transition: all 0.3s ease; }
        
        .workflow-master-line-v4 {
          position: absolute;
          top: 32px;
          left: 15%;
          right: 15%;
          height: 4px;
          background: #f0f0f0;
          z-index: 1;
          border-radius: 4px;
          overflow: hidden;
        }
        [data-theme='dark'] .workflow-master-line-v4 { background: rgba(255,255,255,0.1); }
        
        .workflow-fill-line-v4 {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), #af52de);
          box-shadow: 0 0 10px var(--accent);
        }
        
        .step-label-v4 { 
          font-size: 10px; 
          font-weight: 900; 
          color: #888; 
          letter-spacing: 0.2em; 
          transition: color 0.5s ease;
          display: block;
          margin-top: 12px;
        }
        [data-theme='dark'] .step-label-v4 { color: rgba(255,255,255,0.4); }

        .step-item-v4 h3 { 
          margin: 12px 0; 
          color: #121212; 
          transition: color 0.5s ease;
          font-size: 24px;
        }
        [data-theme='dark'] .step-item-v4 h3 { color: #FDFCF8; }

        .step-item-v4 p { color: #444; font-size: 15px; line-height: 1.6; transition: color 0.5s ease; }
        [data-theme='dark'] .step-item-v4 p { color: #a1a1a6; }

        /* CLEANUP PIXEL-PERFECT RESET */
        .cleanup-visual-v4 { 
          position: relative; 
          margin-top: 40px;
        }
        .comparison-card-v4 {
          position: relative;
          overflow: hidden;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 40px;
          padding: 0 !important;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        .layer-v4 {
          position: absolute !important;
          top: 0; left: 0; right: 0; bottom: 0;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-align: left;
        }
        .messy-layer-v4 p { color: #666; font-size: 17px; line-height: 1.5; margin-top: 24px; }
        [data-theme='dark'] .messy-layer-v4 p { color: #888; }
        
        .polished-layer-v4 p { color: #121212; font-size: 17px; font-weight: 600; line-height: 1.5; margin-top: 24px; }
        [data-theme='dark'] .polished-layer-v4 p { color: #FDFCF8; }

        .card-label-v4 { font-size: 10px; font-weight: 900; letter-spacing: 0.2em; opacity: 0.5; margin-bottom: 8px; }

        .magic-sweep-line-v4 {
          position: absolute, top: 0, bottom: 0,
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--accent), transparent);
          z-index: 100 !important;
          pointer-events: none;
        }
        .sweep-pill-v4 {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
          background: var(--accent);
          color: #fff;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 900;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 10px 30px var(--accent-soft);
          white-space: nowrap;
        }

        /* TRUST UNIFIED CARD */
        .trust-unified-card-v4 {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 40px;
          padding: 80px 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        /* FAQ ELITE ACCORDION */
        .faq-section-v4 { padding-top: 40px; }
        .faq-container-v4 {
          max-width: 900px;
          margin: 40px auto 0;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
        }
        .faq-row-v4 {
          border-bottom: 1px solid var(--border);
          padding: 32px 40px;
          cursor: pointer;
          transition: background 0.3s ease;
          text-align: left;
        }
        .faq-row-v4:last-child { border-bottom: none; }
        .faq-row-v4:hover { background: rgba(0,0,0,0.02); }
        [data-theme='dark'] .faq-row-v4:hover { background: rgba(255,255,255,0.02); }
        
        .faq-header-v4 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }
        .faq-header-v4 h3 { font-size: 18px; font-weight: 600; color: #121212; transition: color 0.5s ease; margin: 0; }
        [data-theme='dark'] .faq-header-v4 h3 { color: #FDFCF8; }
        .faq-icon-v4 { color: var(--accent); opacity: 0.6; flex-shrink: 0; }
        
        .faq-body-v4 p { 
          margin-top: 16px; 
          color: #444; 
          font-size: 15px; 
          line-height: 1.6; 
          transition: color 0.5s ease;
        }
        [data-theme='dark'] .faq-body-v4 p { color: #a1a1a6; }
        .faq-link-v4 { color: var(--accent); text-decoration: none; border-bottom: 1px solid var(--accent-soft); }

        /* SETUP SECTION */
        .setup-v4 { padding-top: 80px; }
        .setup-card-v4 {
          max-width: 900px;
          margin: 60px auto 0;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 40px;
          padding: 60px;
          position: relative;
          text-align: left;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
        }
        .setup-badge-v4 {
          position: absolute;
          top: 40px;
          right: 60px;
          padding: 6px 14px;
          background: var(--accent-soft);
          color: var(--accent);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        .setup-step-row-v4 {
          display: flex;
          gap: 32px;
          margin-bottom: 48px;
        }
        .setup-step-row-v4:last-child { margin-bottom: 0; }
        
        .setup-step-icon-v4 {
          width: 56px;
          height: 56px;
          background: rgba(0,0,0,0.03);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          position: relative;
          flex-shrink: 0;
        }
        [data-theme='dark'] .setup-step-icon-v4 { background: rgba(255,255,255,0.05); }
        
        .step-num-v4 {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 10px;
          font-weight: 900;
          opacity: 0.4;
          letter-spacing: 0.1em;
        }
        
        .setup-step-content-v4 h3 { font-size: 22px; margin-bottom: 8px; color: #121212; transition: color 0.5s ease; }
        [data-theme='dark'] .setup-step-content-v4 h3 { color: #FDFCF8; }
        .setup-step-content-v4 p { color: #444; font-size: 15px; line-height: 1.6; transition: color 0.5s ease; }
        [data-theme='dark'] .setup-step-content-v4 p { color: #a1a1a6; }

        /* ENGINES */
        .engine-grid-v4 { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 60px; }
        .engine-card-v4 { padding: 48px; border-radius: 40px; background: var(--glass); border: 1px solid var(--border); position: relative; overflow: hidden; text-align: left; }
        .engine-tag-v4 { position: absolute; top: 32px; right: 32px; padding: 4px 12px; border-radius: 100px; background: var(--accent-soft); color: var(--accent); font-size: 10px; font-weight: 900; }
        .coming-soon-tag-v4 { background: rgba(0,0,0,0.05); color: #666; }
        [data-theme='dark'] .coming-soon-tag-v4 { background: rgba(255,255,255,0.1); color: #aaa; }
        
        .coming-soon-overlay-v4 {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255,255,255,0.02);
          backdrop-filter: grayscale(1);
          z-index: 1;
          pointer-events: none;
          opacity: 0.5;
        }

        .engine-card-v4 h3 { 
          font-size: 32px; 
          margin-bottom: 12px; 
          color: #121212; 
          transition: color 0.5s ease;
        }
        [data-theme='dark'] .engine-card-v4 h3 { color: #FDFCF8; }

        .engine-card-v4 p { color: #444; margin-bottom: 32px; transition: color 0.5s ease; }
        [data-theme='dark'] .engine-card-v4 p { color: #a1a1a6; }
        .model-list-v4 { display: flex; flex-direction: column; gap: 16px; }
        
        .model-row-v4 { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: 12px 0; 
          border-bottom: 1px solid var(--border); 
          font-weight: 600; 
          color: #121212; 
          transition: color 0.5s ease;
        }
        [data-theme='dark'] .model-row-v4 { color: #FDFCF8; }
        .model-badge-v4 { font-size: 11px; padding: 4px 10px; background: rgba(0,0,0,0.05); border-radius: 100px; opacity: 0.6; }
        [data-theme='dark'] .model-badge-v4 { background: rgba(255,255,255,0.1); }
        .model-badge-v4.rec { background: #30d15822; color: #30d158; opacity: 1; }

        /* APPS GRID */
        .apps-grid-v4 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 60px; }
        .app-card-v4 { padding: 40px; background: var(--glass); border: 1px solid var(--border); border-radius: 32px; text-align: left; transition: all 0.3s ease; }
        .app-card-v4:hover { transform: translateY(-5px); border-color: var(--accent); }
        .app-icon-v4 { color: var(--accent); margin-bottom: 24px; }
        .app-card-v4 h4 { font-size: 20px; margin-bottom: 12px; }
        .app-card-v4 p { color: #444; font-size: 15px; line-height: 1.6; transition: color 0.5s ease; }
        [data-theme='dark'] .app-card-v4 p { color: #a1a1a6; }

        /* TABLE */
        .table-container-v4 { margin-top: 80px; background: var(--glass); border: 1px solid var(--border); border-radius: 40px; overflow: hidden; }
        .comparison-table-v4 { width: 100%; border-collapse: collapse; text-align: left; }
        .comparison-table-v4 th, .comparison-table-v4 td { 
          padding: 32px; 
          border-bottom: 1px solid var(--border); 
          color: #121212; 
          transition: color 0.5s ease;
        }
        [data-theme='dark'] .comparison-table-v4 th, [data-theme='dark'] .comparison-table-v4 td { color: #FDFCF8; }
        .comparison-table-v4 th { font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.6; }
        .comparison-table-v4 td { font-weight: 600; font-size: 17px; }
        .highlight-v4 { background: var(--accent-soft); color: var(--accent); }
        .check-v4 { color: #30d158; }
        .x-v4 { color: #ff3b30; }
        .m-v4 { opacity: 0.3; }

        /* SYMMETRIC ONBOARDING */
        .onboarding-grid-v4 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }
        .onboard-card-v4 {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 32px;
          padding: 40px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .onboard-icon-v4 {
          width: 56px;
          height: 56px;
          background: var(--accent-soft);
          color: var(--accent);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }
        .onboard-card-v4 h3 { font-size: 22px; margin-bottom: 12px; }
        .onboard-card-v4 p { font-size: 14px; color: #666; line-height: 1.6; }
        [data-theme='dark'] .onboard-card-v4 p { color: #a1a1a6; }

        .onboarding-support-grid-v4 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .support-card-v4 {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 32px;
          padding: 40px;
          text-align: left;
          position: relative;
        }
        .accent-support-v4 { border-color: var(--accent); background: var(--accent-soft); }
        .support-badge-v4 {
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 16px;
          display: block;
        }
        .support-card-v4 h4 { font-size: 20px; margin-bottom: 8px; }
        .support-card-v4 p { font-size: 14px; color: #666; line-height: 1.6; }
        [data-theme='dark'] .support-card-v4 p { color: #a1a1a6; }

        @media (max-width: 900px) {
           .onboarding-grid-v4, .onboarding-support-grid-v4 { grid-template-columns: 1fr; }
           .workflow-master-line-v4 { display: none; }
           .setup-card-v4 { padding: 30px; }
           .setup-step-row-v4 { flex-direction: column; gap: 16px; }
           .setup-badge-v4 { position: static; margin-bottom: 20px; display: inline-block; }
           .trust-unified-card-v4 { padding: 40px 20px; }
           .faq-row-v4 { padding: 24px; }
           .footer-grid-v4 { grid-template-columns: 1fr; gap: 40px; }
           .footer-bottom-v4 { flex-direction: column; gap: 16px; text-align: center; }
           .elite-hero-v4 { min-height: auto !important; padding-top: 140px; }
           .dashboard-reveal-v4 { margin-top: 0 !important; padding-top: 40px !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
