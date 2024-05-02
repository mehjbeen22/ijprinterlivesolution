import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/sections/NavigationBar';
import Home from './components/sections/Home';
import AboutPage from './components/pages/AboutPage';
import ShopPage from './components/pages/ShopPage';
import FaqPage from './components/pages/FaqPage';
import Contact from './components/pages/Contact';
import Disclaimer from './components/customer service/Disclaimer';
import PrivacyPolicy from './components/customer service/PrivacyPolicy';
import RefundandReturn from './components/customer service/RefundandReturn';
import TermAndCondition from './components/customer service/TermAndCondition';
import Login from './components/customer service/Login';
import Register from './components/customer service/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SetupProduct from './components/pages/setup/SetupProduct';
import CanonSetup from './components/pages/setup/CanonSetup';

const App = () => {
  return (
    <>
      <Login />
      <Register />
      <Router>
        <NavigationBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/refundandreturn" element={<RefundandReturn />} />
          <Route path="/t&c" element={<TermAndCondition />} />
          <Route path="/productsetup" element={<SetupProduct />} />
          <Route path="/canonsetup" element={<CanonSetup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
