import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home';
import Products from '../src/Components/Products';
import About from '../src/Components/About';
import Contact from '../src/Components/Contact';
import './App.css';

function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}
