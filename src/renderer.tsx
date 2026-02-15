import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

console.log('👋 This message is being logged by "renderer.tsx", included via Vite');
