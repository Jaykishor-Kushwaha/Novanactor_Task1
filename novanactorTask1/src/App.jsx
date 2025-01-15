import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenets/header' ;
import Home from './componenets/home';
import Footer from './componenets/Footer';
import About from './componenets/About';
import Contact from './componenets/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App
