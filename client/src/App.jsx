import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Tierlist from './pages/Tierlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  
  let backend = process.env.NODE_ENV == "development" ? "http://localhost:9000" : "http://192.168.2.221:9000";
  console.log(process.env.NODE_ENV);

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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
