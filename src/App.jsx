import Home from "./contentProvider/pages/Home";
import Navbar from "./contentProvider/pages/Navbar";
import Footer from "./contentProvider/pages/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import PrinterSetup from "./contentProvider/pages/PrinterOffline";
import PrinterSetupIssue from "./contentProvider/pages/PrinterSetupIssue";
import PrivacyPolicy from "./contentProvider/pages/PrivacyPolicy";
import Contact from "./contentProvider/pages/Contact";
import DownloadPage from "./contentProvider/pages/download/DownloadPage";
import ScannerSetup from "./contentProvider/pages/ScannerSetup";
// import JivoChatWidget from "./pages/JivochatWidget";

// // Component to conditionally render JivoChatWidget
// const RenderJivoChat = ({ children }) => {
//   // Get the current location using useLocation hook
//   const location = useLocation();

//   // Define an array of paths where JivoChatWidget should be rendered
//   const allowedPaths = ["/", "/printeroffline", "/printersetupissue"];

//   // Check if the current pathname is one of the allowed paths
//   const shouldRenderJivoChat = allowedPaths.includes(location.pathname);

//   // Render children along with JivoChatWidget if shouldRenderJivoChat is true
//   return shouldRenderJivoChat ? (
//     <>
//       <JivoChatWidget />
//       {children}
//     </>
//   ) : (
//     children
//   );
// };

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // <RenderJivoChat>
            <Home />
            // </RenderJivoChat>
          }
        />
        <Route
          path="/printeroffline"
          element={
            // <RenderJivoChat>
            <PrinterSetup />
            // </RenderJivoChat>
          }
        />
        <Route
          path="/printersetupissue"
          element={
            // <RenderJivoChat>
            <PrinterSetupIssue />
            // </RenderJivoChat>
          }
        />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/scannersetup" element={<ScannerSetup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloadDrivers" element={<DownloadPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from 'react-router-dom';
// import NavigationBar from './components/sections/NavigationBar';
// import Home from './components/sections/Home';
// import AboutPage from './components/pages/AboutPage';
// import ShopPage from './components/pages/ShopPage';
// import FaqPage from './components/pages/FaqPage';
// import Contact from './components/pages/Contact';
// import Disclaimer from './components/customer service/Disclaimer';
// import PrivacyPolicy from './components/customer service/PrivacyPolicy';
// import RefundandReturn from './components/customer service/RefundandReturn';
// import TermAndCondition from './components/customer service/TermAndCondition';
// import Login from './components/customer service/Login';
// import Register from './components/customer service/Register';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import SetupProduct from './components/pages/setup/SetupProduct';
// import CanonSetup from './components/pages/setup/CanonSetup';
// import SupportSetup from './components/pages/setup/SupportSetup';
// import JivoChatWidget from './components/JivoChatWidget ';

// const App = () => {
//   return (
//     <>
//       <Login />
//       <Register />
//       <Router>
//         <NavigationBar />
//         <Routes>
//           {/* Wrap the Route components with RenderJivoChat */}
//           <Route
//             path="/"
//             element={
//               <RenderJivoChat>
//                 <Home />
//               </RenderJivoChat>
//             }
//           />
//           <Route
//             path="/productsetup"
//             element={
//               <RenderJivoChat>
//                 <SetupProduct />
//               </RenderJivoChat>
//             }
//           />
//           <Route
//             path="/canonsetup"
//             element={
//               <RenderJivoChat>
//                 <CanonSetup />
//               </RenderJivoChat>
//             }
//           />
//           <Route
//             path="/supportsetup"
//             element={
//               <RenderJivoChat>
//                 <SupportSetup />
//               </RenderJivoChat>
//             }
//           />

//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/shop" element={<ShopPage />} />
//           <Route path="/faqs" element={<FaqPage />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/disclaimer" element={<Disclaimer />} />
//           <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//           <Route path="/refundandreturn" element={<RefundandReturn />} />
//           <Route path="/t&c" element={<TermAndCondition />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// // Component to conditionally render JivoChatWidget
// const RenderJivoChat = ({ children }) => {
//   // Get the current location using useLocation hook
//   const location = useLocation();

//   // Define an array of paths where JivoChatWidget should be rendered
//   const allowedPaths = ['/', '/productsetup', '/canonsetup', '/supportsetup'];

//   // Check if the current pathname is one of the allowed paths
//   const shouldRenderJivoChat = allowedPaths.includes(location.pathname);

//   // Render children along with JivoChatWidget if shouldRenderJivoChat is true
//   return shouldRenderJivoChat ? (
//     <>
//       <JivoChatWidget />
//       {children}
//     </>
//   ) : (
//     children
//   );
// };

// export default App;
