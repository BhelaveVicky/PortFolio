import React, { useState, useEffect } from 'react';
import vLogo from '../v-logo.png';

const Navbar = ({ isDarkMode, toggleTheme, onHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}>
      <nav
        className={`
          relative flex items-center justify-between
          px-4 sm:px-6 py-3 rounded-full
          ${isScrolled
            ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg shadow-lg w-[95%] sm:w-[85%] md:w-[70%] border border-slate-200/50 dark:border-slate-800/50'
            : 'bg-transparent dark:bg-transparent backdrop-blur-none border-transparent w-[95%] sm:w-[90%] shadow-none'
          }
          transition-all duration-500 ease-out
        `}
      >
        {/* Logo Section */}
        <button
          onClick={onHome}
          className="flex items-center gap-2 sm:gap-4 group sm:-ml-12"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/30 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
            <img src={vLogo} alt="V Logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
          </div>
          <div className="text-xl sm:text-3xl font-extrabold tracking-tight flex items-center">
            <span className={`${isDarkMode ? 'text-white' : 'text-slate-900'} transition-colors`}>PORT</span>
            <span className="text-blue-600 ml-1">FOLIO</span>
          </div>
        </button>

        {/* Toggle Section */}
        <div className="flex items-center gap-3">
          <span
            className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase hidden sm:block ${!isDarkMode ? 'text-blue-600' : 'text-slate-500'} transition-colors duration-300`}
          >
            Light
          </span>

          <button
            onClick={() => toggleTheme(!isDarkMode)}
            className={`
              relative w-14 h-7 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50
              ${isDarkMode ? 'bg-slate-800 ring-1 ring-slate-700' : 'bg-slate-200 ring-1 ring-slate-300'}
            `}
            aria-label="Toggle Theme"
          >
            <div
              className={`
                w-5 h-5 rounded-full shadow-sm transform transition-transform duration-300 flex items-center justify-center text-[10px]
                ${isDarkMode ? 'translate-x-7 bg-blue-600 text-white' : 'translate-x-0 bg-white text-yellow-500'}
              `}
            >
            </div>
          </button>

          <span
            className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase hidden sm:block ${isDarkMode ? 'text-blue-500' : 'text-slate-400'} transition-colors duration-300`}
          >
            Dark
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
