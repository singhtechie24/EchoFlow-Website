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

import Navbar from './components/Navbar';
import FAQItem from './components/FAQItem';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import { DOWNLOAD_URL } from './constants';

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

      <HeroSection />

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

      <Footer />

      
    </div>
  );
}

export default App;
