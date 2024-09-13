import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import About from './components/About/About';
// import Services from './components/Services/Services';
// import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx';
import Garden from './components/Garden/Garden.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/garden" element={<Garden />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
