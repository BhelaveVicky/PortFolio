import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, MessageSquare } from 'lucide-react';

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On mobile, we might want to show it differently or hide it if it clashes
      // For now, keeping the logic similar to before but matching design
      if (mobile) setIsVisible(true);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop auto show
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/vickybhelave',
      bgClass: 'bg-[#0077b5]', // LinkedIn Blue
      shadow: 'shadow-blue-500/30'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:bhelavevicky66@gmail.com',
      bgClass: 'bg-[#EA4335]', // Gmail Red-ish (simplified for solid circle look)
      shadow: 'shadow-red-500/30'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/bhelavevicky66-ui',
      bgClass: 'bg-[#1b1f23]', // GitHub Black
      shadow: 'shadow-gray-800/30'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/vicky_bhelave143/',
      bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]', // Insta Gradient
      shadow: 'shadow-pink-500/30'
    },
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      url: 'https://wa.me/919272150600',
      bgClass: 'bg-[#25D366]', // WhatsApp Green
      shadow: ''
    }
  ];

  if (!isVisible && !isMobile) return null;

  // Mobile Footer View (Horizontal)
  if (isMobile) {
    return (
      <div className="z-40 bg-transparent -md p-3 flex justify-evenly items-center">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-full text-white ${link.bgClass} shadow-lg ${link.shadow} transform active:scale-90 transition-all`}
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    );
  }

  // Desktop Sidebar (Vertical Line + Icons)
  return (
    <div className="fixed left-10 md:left-16 top-0 bottom-0 z-40 flex flex-col items-center justify-start pt-36 md:pt-[450px] lg:pt-44 pointer-events-none">

      {/* Top padding to lower icons visually (spacing handled via padding) */}

      <div className="flex flex-col gap-5 pointer-events-auto">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative group flex items-center justify-center w-10 h-10 rounded-full text-white 
              ${link.bgClass} ${link.name === 'WhatsApp' ? '' : 'shadow-lg'} ${link.shadow}
              hover:scale-110 hover:rotate-3 transition-all duration-300 ease-out cursor-pointer z-10
            `}
            style={{
              animation: `fade-slide-in 0.5s ease-out forwards ${index * 0.1 + 0.5}s`,
              opacity: 0,
              transform: 'translateY(20px)'
            }}
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />

            {/* Tooltip */}
            <span className="absolute left-14 px-3 py-1 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold rounded-md shadow-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100 dark:border-slate-700">
              {link.name}
              <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-white dark:bg-slate-800 rotate-45 border-l border-b border-slate-100 dark:border-slate-700"></div>
            </span>
          </a>
        ))}
      </div>

      {/* Bottom Line Segment */}
      <div className="w-[2px] flex-1 bg-gradient-to-b from-blue-500/50 via-blue-500/50 to-transparent mt-4 rounded-t-full"></div>

      <style>{`
        @keyframes fade-slide-in {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.88 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default SocialSidebar;
