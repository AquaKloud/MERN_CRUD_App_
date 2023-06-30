import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = document.getElementById('root'); // Define the 'root' variable

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root // Use the 'root' variable here
  
);

reportWebVitals();
