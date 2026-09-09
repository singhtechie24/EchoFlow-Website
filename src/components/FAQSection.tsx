import React from 'react';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  return (
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
  );
};

export default FAQSection;
