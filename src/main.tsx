import React from 'react'
import ReactDOM from 'react-dom/client'
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

// Inject Vercel Intelligence
inject();
injectSpeedInsights();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
