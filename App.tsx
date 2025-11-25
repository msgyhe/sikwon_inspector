import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Career from './pages/Career';
import Program from './pages/Program';
import About from './pages/About';
import Contact from './pages/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="career" element={<Career />} />
            <Route path="program" element={<Program />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;