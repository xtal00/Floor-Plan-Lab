import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FloorPlan from './FloorPlan';

function App() {
  return (
    <FloorPlan />
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

