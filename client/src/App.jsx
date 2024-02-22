import './App.css';
import Header from './components/General/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Tierlist from './pages/Tierlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  let backend = process.env.NODE_ENV == "development" ? "http://localhost:9000" : "https://anime.kobenibestgirl.ca";

  // Tierlist data 
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <BrowserRouter>
          <Routes>
            <Route exact path="" element={<Home backend={backend}/>} />
            <Route exact path="/view/:id" element={<Tierlist backend={backend}/>} />
            <Route exact path="/view" element={<Search backend={backend}/>} />
            <Route exact path="/profile/:id" element={<Profile backend={backend}/>} />
            <Route exact path="/login" element={<Login backend={backend} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
