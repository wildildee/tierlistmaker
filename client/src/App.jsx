import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Tierlist from './pages/Tierlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  
  let backend = "http://localhost:9000";
  if (process.env.BACKEND) {
    backend = process.env.BACKEND;
  }

  // Tierlist data 
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <BrowserRouter>
          <Routes>
            <Route exact path="" element={<Home backend={backend}/>} />
            <Route exact path="/view/:id" element={<Tierlist backend={backend}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
