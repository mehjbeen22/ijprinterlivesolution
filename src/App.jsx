import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/sections/NavigationBar';
import Home from './components/sections/Home';
import Footer from './components/sections/Footer';
import AboutPage from './components/pages/AboutPage';
import ShopPage from './components/pages/ShopPage';
import FaqPage from './components/pages/FaqPage';
import Contact from './components/pages/Contact';
import LastSection from './components/sections/LastSection';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <LastSection />
      <Footer />
    </Router>
  );
};

export default App;
