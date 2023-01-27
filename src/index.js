import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {NombreCompleto as Name} from './components/NombreCompleto';
import { Mascota } from './components/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App />
    <Name name="pedro 2" age={15} />
    <Mascota name="Solovino" age={10} />
    <Name name="pedro 3" age={35} />
    <Name name="pedro 4" age={28} />
  </React.StrictMode>
);

