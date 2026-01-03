import React, { useState, useEffect } from 'react';
import {
  User,
  Code2,
  Layers,
  GraduationCap,
  Mail,
  Download,
  Award
} from 'lucide-react';
import Navbar from './components/Navbar';
import DiamondMenu from './components/DiamondMenu';
import SocialSidebar from './components/SocialSidebar';
import ContentPage from './components/ContentPage';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const meshLineCount = isSmallScreen || prefersReducedMotion ? 3 : 10;

  useEffect(() => {
    const update = () => setIsSmallScreen(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);
    const onChange = () => setPrefersReducedMotion(media.matches);
    media.addEventListener('change', onChange);
    return () => { window.removeEventListener('resize', update); media.removeEventListener('change', onChange); };
  }, []);

  const fullText = "Frontend Developer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const RESUME_DOWNLOAD_LINK = "https://drive.google.com/uc?export=download&id=1gnwkXURTR_Qq6XlVxpKRj37ot5_7HRZl";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      handleTyping();
    }, typingSpeed);
    return () => { clearInterval(ticker) };
  }, [typedText, typingSpeed, isDeleting]);

  const handleTyping = () => {
    let updatedText = isDeleting
      ? fullText.substring(0, typedText.length - 1)
      : fullText.substring(0, typedText.length + 1);

    setTypedText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setTypingSpeed(150);
    } else if (isDeleting) {
      setTypingSpeed(100);
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const menuItems = [
    { id: 'about', label: 'ABOUT', icon: User, color: 'from-blue-600 to-indigo-600' },
    { id: 'skill', label: 'SKILLS', icon: Code2, color: 'from-indigo-500 to-purple-500' },
    { id: 'project', label: 'PROJECTS', icon: Layers, color: 'from-blue-500 to-indigo-500' },
    { id: 'education', label: 'EDUCATION', icon: GraduationCap, color: 'from-teal-400 to-gray-900' },
    { id: 'certificate', label: 'CERTIFICATES', icon: Award, color: 'from-pink-500 to-gray-500' },
    { id: 'contact', label: 'CONTACT', icon: Mail, color: 'from-blue-400 to-indigo-400' },
  ];

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className={`min-h-screen lg:h-screen lg:overflow-hidden w-full transition-colors duration-1000 relative overflow-x-hidden ${isDarkMode ? 'bg-[#00040a]' : 'bg-white'}`}>
      {activeSection !== 'contact' && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation={isDarkMode ? "8" : "4"} result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0">
                <stop offset="0%" stopColor={isDarkMode ? "#0ea5e9" : "#1d4ed8"} stopOpacity="0" />
                <stop offset="50%" stopColor={isDarkMode ? "#38bdf8" : "#2563eb"} stopOpacity={isDarkMode ? "0.8" : "0.5"} />
                <stop offset="100%" stopColor={isDarkMode ? "#0ea5e9" : "#1d4ed8"} stopOpacity="0" />
              </linearGradient>
            </defs>

            <g filter="url(#glow)" className={`transition-opacity duration-1000 ${isDarkMode ? 'opacity-40' : 'opacity-25'} mesh-animate-slow`}>
              <path d="M0,600 Q360,450 720,600 T1440,600" fill="none" stroke="url(#waveGrad)" strokeWidth="1" />
              <path d="M0,610 Q360,460 720,610 T1440,610" fill="none" stroke="url(#waveGrad)" strokeWidth="0.5" strokeDasharray="5,5" />
              <path d="M0,620 Q360,470 720,620 T1440,620" fill="none" stroke="url(#waveGrad)" strokeWidth="0.3" />
            </g>

            <g filter="url(#glow)" className={`transition-opacity duration-1000 ${isDarkMode ? 'opacity-60' : 'opacity-35'} mesh-animate-fast`}>
              <path d="M0,700 Q360,500 720,700 T1440,700" fill="none" stroke={isDarkMode ? "#0ea5e9" : "#3b82f6"} strokeWidth="2" />
              {Array.from({ length: meshLineCount }).map((_, i) => (
                <path
                  key={i}
                  d={`M0,${700 + i * 2} Q360,${500 + i * 2} 720,${700 + i * 2} T1440,${700 + i * 2}`}
                  fill="none"
                  stroke={isDarkMode ? "#38bdf8" : "#2563eb"}
                  strokeWidth="0.1"
                  strokeOpacity={isDarkMode ? Math.max(0.2, 0.5 - i * 0.05) : Math.max(0.12, 0.3 - i * 0.03)}
                />
              ))}
            </g>

            <circle
              cx="50%"
              cy="80%"
              r="300"
              fill="url(#waveGrad)"
              className="transition-opacity duration-1000"
              opacity={isDarkMode ? "0.15" : "0.05"}
            />
          </svg>

          <div className={`absolute bottom-0 left-0 w-full h-1/2 transition-colors duration-1000 pointer-events-none ${isDarkMode ? 'bg-gradient-to-t from-blue-900/20 to-transparent' : 'bg-gradient-to-t from-blue-100/30 to-transparent'}`} />
        </div>
      )}

      <Navbar isDarkMode={isDarkMode || activeSection !== null} toggleTheme={toggleTheme} onHome={() => setActiveSection(null)} />

      {activeSection && (
        <ContentPage
          sectionId={activeSection}
          isDarkMode={isDarkMode}
          onClose={() => setActiveSection(null)}
        />
      )}

      <main className="relative z-10 lg:min-h-screen w-full flex flex-col lg:flex-row items-center justify-start lg:justify-center p-4 md:p-12 lg:p-24 overflow-x-hidden animate-scale-up pt-28 pb-8 md:pt-36 md:pb-12 lg:py-0">
        {!activeSection && (
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
            <div className="w-full relative z-20 flex justify-center items-center order-2 lg:order-1 drop-shadow-lg py-2">
              <DiamondMenu items={menuItems} onSelect={setActiveSection} />
            </div>

            <div className="flex flex-col space-y-2 md:space-y-8 animate-fade-in-right order-1 lg:order-2 text-center lg:text-left mt-2 lg:mt-0">
              <div className="space-y-1">
                <h3 className={`text-xl sm:text-4xl lg:text-5xl font-medium tracking-tight ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Hello !
                </h3>

                <h1 className={`text-3xl sm:text-4xl lg:text-6xl lg:text-7xl font-black tracking-tighter leading-none transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
                  I'M <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-2xl">Vicky Bhelave</span>
                </h1>

                <div className="pt-1">
                  <h2 className={`text-lg sm:text-2xl lg:text-3xl font-medium tracking-wide transition-colors duration-1000 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span>{typedText}</span>
                    <span className="cursor-blink text-blue-600 ml-1">|</span>
                  </h2>
                </div>
              </div>

              <p className={`text-sm sm:text-base lg:text-lg transition-colors duration-1000 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-xl leading-relaxed font-light`}>
                "I am an enthusiastic Frontend Developer from Navgurukul. My expertise lies in creating attractive and responsive websites using HTML, CSS, and JavaScript."
              </p>

              <div className="flex flex-wrap gap-5 pt-4 justify-center lg:justify-start">
                <button
                  onClick={() => setActiveSection('about')}
                  className="flex items-center gap-2 px-5 sm:px-8 lg:px-12 py-2.5 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] transition-all shadow-xl shadow-blue-600/30 font-bold active:scale-95 text-white"
                >
                  <User size={18} />
                  <span className="text-sm sm:text-base lg:text-lg">Explore More</span>
                </button>
                <a
                  href={RESUME_DOWNLOAD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 sm:px-10 lg:px-12 py-2.5 sm:py-4 rounded-full transition-all font-bold active:scale-95 border-2 ${isDarkMode ? 'border-white/20 text-white hover:bg-white/5 bg-white/5' : 'border-blue-500/30 text-blue-700 hover:bg-blue-50/50 bg-white shadow-md'}`}
                >
                  <Download size={18} />
                  <span className="text-sm sm:text-base lg:text-lg">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {activeSection !== 'contact' && <SocialSidebar />}

      {activeSection !== 'contact' && (
        <footer className="w-full text-center text-slate-500 text-xs z-10 tracking-widest uppercase opacity-60 pb-8 relative">
          <p>&copy; 2025 All Rights Reserved By <span className="text-blue-600 font-bold">Vicky Bhelave</span></p>
        </footer>
      )}

      <style>{`
        .mesh-animate-slow { animation: mesh-float 12s infinite ease-in-out; }
        .mesh-animate-fast { animation: mesh-float 7s infinite ease-in-out alternate; }

        @keyframes mesh-float {
          0% { transform: translateY(0) scaleX(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scaleX(1.05); opacity: 0.8; }
          100% { transform: translateY(0) scaleX(1); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default App;
