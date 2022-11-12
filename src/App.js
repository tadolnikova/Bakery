import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import About from './About';
import Recipes from './Recipes';
import Teaching from './Teaching';
import Home from './Home';
import './App.css';


function App() {
return (
  <Router>
  <nav>
    <Link to="/" className="link">Site</Link>
    <Link to="/about" className="link">About</Link>
    <Link to="/recipes" className="link">Recipes</Link>
    <Link to="/teaching" className="link">Teaching</Link>
  </nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/recipes" element={<Recipes />} />
  <Route path="/teaching" element={<Teaching />} />
</Routes>

  </Router>
)

}

export default App;
