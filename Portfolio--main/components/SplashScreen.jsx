
import React, { useEffect, useState } from 'react';
import vLogo from '../v-logo.png';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000b2a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[80vw] h-[80vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative flex flex-col items-center">
        {/* Hexagon Logo Container */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center animate-logo">
          {/* Hexagon Border SVG */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <path 
              d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" 
              fill="none" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinejoin="round"
              className="hexagon-draw"
            />
          </svg>
          <img src={vLogo} alt="V Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain relative z-10" />
        </div>

        {/* Welcome Text in Signature Font */}
        <div className="mt-8 text-center animate-text-reveal">
          <p className="font-signature text-3xl md:text-5xl text-white drop-shadow-lg">
            Welcome To My Portfolio
          </p>
        </div>
      </div>

      <style>{`
        .hexagon-draw {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw 2s ease-out forwards;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes logo-draw {
          0% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .animate-logo {
          animation: logo-draw 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-text-reveal {
          opacity: 0;
          animation: text-reveal 1.2s ease-out 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
