import { StrictMode } from 'react';
import { Buffer } from 'buffer';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Polyfill Buffer for libraries like @react-pdf/renderer in the browser
if (typeof globalThis.Buffer === 'undefined') {
  globalThis.Buffer = Buffer;
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
);
