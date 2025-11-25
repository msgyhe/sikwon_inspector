import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, Instagram, Linkedin, Mail, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-sky text-white p-1.5 rounded-full transition-transform group-hover:rotate-45 duration-500">
              <Plane size={24} fill="currentColor" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              Sky<span className="text-sky">Mentor</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-sky ${
                  location.pathname === item.path
                    ? 'text-sky'
                    : isScrolled
                    ? 'text-gray-200'
                    : 'text-white drop-shadow-sm'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full border transition-all ${
                 isScrolled 
                 ? 'border-white/30 text-white hover:bg-white/10' 
                 : 'border-white/30 text-white backdrop-blur-sm hover:bg-white/20'
              }`}
            >
              <Globe size={14} />
              <span>{language === 'ko' ? 'EN' : 'KR'}</span>
            </button>

            <Link
              to="/contact"
              className="bg-sky hover:bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-sky-500/30"
            >
              {language === 'ko' ? '상담 신청' : 'Contact'}
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-md ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              {language === 'ko' ? 'EN' : 'KR'}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${isScrolled ? 'text-white' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-navy z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_ITEMS[language].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-2xl font-bold ${
              location.pathname === item.path ? 'text-sky' : 'text-white'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="mt-4 bg-sky text-white px-8 py-3 rounded-full text-lg font-bold shadow-xl"
        >
          {language === 'ko' ? '상담 신청하기' : 'Contact Me'}
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-12 border-t border-navy-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">SkyMentor</h3>
              <p className="text-gray-400 text-sm">
                {language === 'ko' ? (
                  <>
                    안전하고 전문적인 비행 교육의 시작.<br />
                    당신의 꿈을 현실로 만들어 드립니다.
                  </>
                ) : (
                  <>
                    The start of safe and professional flight training.<br />
                    Making your dreams a reality.
                  </>
                )}
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="p-2 bg-navy-800 rounded-full hover:bg-sky transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-navy-800 rounded-full hover:bg-sky transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@skymentor.kr" className="p-2 bg-navy-800 rounded-full hover:bg-sky transition-colors text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-navy-800 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SkyMentor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;