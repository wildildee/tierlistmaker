import './App.css';
import Tierlist from './pages/Tierlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  // Tierlist data 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/tierlist/:id" element={<Tierlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
