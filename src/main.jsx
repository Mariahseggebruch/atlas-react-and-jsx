import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Make sure to import your App component
import './index.css';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component to the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
