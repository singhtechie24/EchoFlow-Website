import React from 'react';
import { CheckCircle2, XCircle, MinusCircle } from 'lucide-react';
import AuroraPill from './AuroraPill';
import './EngineSection.css';

const tableRows = [
  { cap: "100% On-device processing", echo: true, std: false, cloud: false },
  { cap: "Sub-second Latency", echo: true, std: "Partial", cloud: false },
  { cap: "Choose your own model", echo: true, std: false, cloud: "Partial" },
  { cap: "No subscription required", echo: true, std: true, cloud: false },
  { cap: "Global Hotkey / PTT", echo: true, std: "Partial", cloud: "Partial" },
];

const EngineSection: React.FC = () => {
  return (
    <>
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
                {tableRows.map((row, i) => (
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
    </>
  );
};

export default EngineSection;
