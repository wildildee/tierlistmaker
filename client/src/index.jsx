import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IconContext } from 'react-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tierlist from './pages/Tierlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: "#1f2023" }} >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/view/:id" element={<Tierlist />} />
          </Routes>
        </BrowserRouter>
      </div>
    </IconContext.Provider>
  </React.StrictMode>
);