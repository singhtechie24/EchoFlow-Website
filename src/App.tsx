import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DashboardPreview from './components/DashboardPreview';
import WorkflowSection from './components/WorkflowSection';
import SmartCleanupSection from './components/SmartCleanupSection';
import IntegrationsSection from './components/IntegrationsSection';
import ManifestoSection from './components/ManifestoSection';
import EngineSection from './components/EngineSection';
import TrustSection from './components/TrustSection';
import SetupSection from './components/SetupSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

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
      <DashboardPreview />
      <WorkflowSection />
      <SmartCleanupSection />
      <IntegrationsSection />
      <ManifestoSection />
      <EngineSection />
      <TrustSection />
      <SetupSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
