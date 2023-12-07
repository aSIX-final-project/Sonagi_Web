import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.onload = function () {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    setTimeout(function () {
      const element = document.querySelector(window.location.hash);
      if (element) {
        window.scrollTo(0, element.offsetTop);
      }
    }, 0);
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
