// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RedirectToExternalURL from './RedirectToExternalURL';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/paint" element={<RedirectToExternalURL url="https://lingonberryai.notion.site/Tanaki-Paint-d0feded0ddff410098d9841547c4dd47"/>} />
        {/* Redirect from any non-existing route to "/" */}
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
