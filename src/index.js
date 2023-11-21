import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
window.onload = function () {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    setTimeout(function () {
      window.scrollTo(0, document.querySelector(window.location.hash).offsetTop);
    }, 0);
  }
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
