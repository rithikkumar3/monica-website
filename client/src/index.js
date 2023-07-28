import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
App.get('/colors',(req,res)=>{
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json(colors)
  })
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
