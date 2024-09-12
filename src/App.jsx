import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import About from './components/About/About';
// import Services from './components/Services/Services';
// import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Uncomment and add your other routes as needed */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
