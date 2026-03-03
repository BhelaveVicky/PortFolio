import React, { useEffect, useState } from 'react';
import { ArrowLeft, User, Code2, Layers, GraduationCap, Mail, X, Send, Award, ChevronRight, ExternalLink, CheckCircle2, Calendar, MapPin, Download, Eye, Phone, Facebook, Instagram, Linkedin, Twitter, Map, Github, MessageCircle, Cpu, FileCode, Palette, Monitor, Terminal, Table, ImageIcon, Grid, UploadCloud } from 'lucide-react';

const TypewriterText = ({ text, delay = 0, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout;
    
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      let currentString = "";
      setDisplayedText("");
      
      const typeChar = () => {
        if (currentIndex < text.length) {
          currentString += text[currentIndex];
          setDisplayedText(currentString);
          currentIndex++;
          timeout = setTimeout(typeChar, speed);
        }
      };
      
      typeChar();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  return <>{displayedText || "\u00A0"}</>;
};

const ContentPage = ({ sectionId, isDarkMode, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/bhelavevicky66@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          _subject: "New Portfolio Message!",
          _replyto: formData.email,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmittedData(formData);
        setShowSuccess(true);
        setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Error sending message.");
      console.error(error);
    }
  };

  const getSectionData = (id) => {
    switch (id) {
      case 'about':
        return {
          title: 'About Me',
          icon: User,
          color: 'from-blue-600 to-indigo-600',
          glow: 'bg-blue-500/20',
          description: 'Motivated and enthusiastic learner with a strong interest in technology and software development. Skilled in HTML, CSS, and JavaScript, with hands-on experience building real-world projects. Able to write clean, efficient code, create user-friendly interfaces, and solve problems logically. Strong in teamwork, communication, and quickly learning new technologies. Good understanding of AI tools and prompt engineering, enabling the creation of high-quality websites, designs, and solutions efficiently. Highly adaptable with a continuous learning mindset and strong ability to develop websites based on any requirement.',
          points: []
        };
      case 'skill':
        return {
          title: 'My Skills',
          icon: Code2,
          color: 'from-indigo-500 to-purple-500',
          glow: 'bg-purple-500/20',
          description: 'Technical arsenal I use to bring designs to life. I focus on modern, efficient, and maintainable codebases.',
          skillGroups: [
            {
              category: 'Frontend Skill',
              items: ['HTML', 'CSS', 'JavaScript']
            },
            {
              category: 'Tools',
              items: ['Vercel', 'GitHub', 'VS Code']
            },
            {
              category: 'Software Tools',
              items: ['Excel', 'Canva', 'Google Sheet']
            }
          ]
        };
      case 'project':
        return {
          title: 'Projects',
          icon: Layers,
          color: 'from-blue-500 to-indigo-500',
          glow: 'bg-indigo-500/20',
          description: 'Here are a few highlights of my work where I applied my technical knowledge to solve real problems.',
          points: [
            {
              title: 'Multiplayer Typing Game',
              text: 'Developed a real-time multiplayer typing race game where users can create or join rooms using a 4-character code. Implemented live database syncing for accurate WPM and accuracy tracking. Added host controls for starting races and automatic winner detection. Built with a fully responsive UI for smooth mobile and desktop experience.',
              link: 'https://typo-dash.vercel.app/',
              image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80'
            },
            {
              title: 'BrainQuest – Puzzle Web App',
              text: 'Created an interactive puzzle platform containing guessing games, logic puzzles, and tic-tac-toe. Designed a clean, simple, and highly responsive interface for all devices. Focused on smooth user experience, fast performance, and engaging gameplay. Hosted on Vercel for reliable and fast deployment.',
              link: 'https://puzzel-one.vercel.app/',
              image: 'https://images.unsplash.com/photo-1611996900188-3021b1977d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
            },
            {
              title: 'Chess Game – 2-Player Web Application',
              text: 'Built a fully interactive chess game supporting two players on the same device. Added multiple time controls (5, 10, 15 minutes and ∞ mode) with a glowing active timer. Implemented animated highlights for selected squares, legal moves, captures, and check alerts. Included move sounds, winner popup, and auto-promotion of pawns to queens for faster gameplay.',
              link: 'https://chess-game-bw7l.vercel.app/',
              image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80'
            }
          ]
        };
      case 'education':
        return {
          title: 'Education',
          icon: GraduationCap,
          color: 'from-[#2dd4bf] to-[#0891b2]',
          glow: 'bg-cyan-500/20',
          description: 'My academic background and professional growth journey.',
          points: [
            {
              title: 'Software Development Course',
              subtitle: 'Navgurukul Foundation | Himachal Pradesh',
              date: 'JULY 2025 - PRESENT'
            },
            {
              title: 'Secondary School Certificate ',
              subtitle: 'Z.P. High School & Jr. College, Tirora',
              date: 'June 2024 - April 2025'
            }
          ]
        };
      case 'certificate':
        return {
          title: 'Certificates',
          icon: Award,
          color: 'from-amber-500 to-orange-500',
          glow: 'bg-orange-500/20',
          description: 'Verified recognitions of my technical skills and achievements.',
          points: [
            {
              title: 'GenAI with AWS',
              text: 'Advanced certification covering Generative AI fundamentals and implementation on AWS infrastructure.',
              link: 'https://drive.google.com/file/d/1s6CYZojMYmSrDsdV2MkA2wAfyde30xV6/view?usp=sharing',
              image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
            },
            {
              title: 'Google Cloud',
              text: 'Certification validating proficiency in Google Cloud Platform services and core cloud computing concepts.',
              link: 'https://drive.google.com/file/d/1QeqqGizqAi7G6-27iRPrZ6aaY0b0rM84/view?usp=sharing',
              image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80'
            },
            {
              title: 'Responsive Web Design',
              text: 'Professional certification for mastering modern layout techniques including CSS Grid, Flexbox, and mobile-first architecture.',
              link: 'https://drive.google.com/file/d/1oCGj4ripHJc4p2tdnZgn3sy_6vsEZOgI/view?usp=sharing',
              image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
            },
            {
              title: 'HTML Developer Certificate',
              text: 'Certification validating expertise in semantic HTML5, web accessibility, and document structure best practices.',
              link: 'https://drive.google.com/file/d/1_Jolp6D_3nAjcqi87a3R_f8gTrEEIFQ8/view?usp=sharing',
              image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
            },
            {
              title: 'CSS Developer Certificate',
              text: 'Credential for advanced CSS styling, animations, and efficient UI design patterns.',
              link: 'https://drive.google.com/file/d/14hBslmZUmGPy_C6dejzvekHe3hOLWEz6/view?usp=sharing',
              image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
            }
          ]
        };
      case 'contact':
        return {
          title: 'Contact Us',
          icon: Mail,
          color: 'from-blue-600 to-cyan-600',
          glow: 'bg-blue-500/20',
          description: "Have questions? We're here to help you understand our vision better.",
          details: {
            address: "AT : Ghatkuroda, Tirora, Gondiya, Maharashtra – 441911",
            phone: {
              main: "+91 9272150600",
              admission: "+91 8007316645"
            },
            email: {
              general: "bhelavevicky66@gmail.com",
              support: "vickybhelave25@navgurukul.org"
            }
          },
          points: []
        };
      default:
        return { title: '', icon: User, color: '', glow: '', description: '', points: [] };
    }
  };

  const data = getSectionData(sectionId);
  const Icon = data.icon;

  const resumeViewLink = "https://drive.google.com/file/d/1gnwkXURTR_Qq6XlVxpKRj37ot5_7HRZl/view?usp=sharing";
  const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=1gnwkXURTR_Qq6XlVxpKRj37ot5_7HRZl";

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-0`}>
      <div
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
        onClick={onClose}
      />

      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vmin] h-[40vmin] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px] opacity-12 md:opacity-20 ${data.glow}`} />

      <div className={`modal-responsive relative overflow-hidden flex flex-col animate-page-flip shadow-2xl w-full h-full rounded-none p-0 ${isDarkMode ? 'bg-[#00040a] text-white' : 'bg-[#fcfcfc] text-slate-900'} border-0`}>
        <div className={`absolute inset-0 hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-[0.03] md:opacity-[0.05] blur-[6px]`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent)] md:opacity-40 opacity-0" />
        </div>

        {/* Success Message Overlay */}
        {showSuccess && (
          <div className={`absolute inset-0 z-50 flex items-center justify-center ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-md animate-fade-in transition-all`}>
            <div className="flex flex-col items-center gap-6 text-center p-8 animate-scale-up max-w-sm w-full">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-xl shadow-green-200 mb-2">
                <CheckCircle2 size={48} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Message Sent!</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-medium text-lg`}>Successfully sent message to Vicky Bhelave</p>
              </div>
            </div>
          </div>
        )}

        <div className={`flex justify-between items-center shrink-0 z-50 absolute top-0 left-0 w-full px-4 md:px-14 py-4 md:py-6 transition-all ${isDarkMode ? 'bg-[#00040a]/90 border-white/10' : 'bg-[#fcfcfc]/90 border-slate-200/50'} backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.03)] pointer-events-auto border-b`}>
          <button
            onClick={onClose}
            className={`flex items-center gap-3 border transition-all pointer-events-auto group px-5 py-2.5 rounded-full shadow-lg backdrop-blur-sm ${isDarkMode ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-800 border-black/10 hover:bg-black/10 hover:border-black/20'}`}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Back</span>
          </button>

          {/* Centered Title for Full Page Sections */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-[70%]">
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#1a1f36]'}`}>
              {sectionId === 'project' ? 'Featured Projects' : sectionId === 'education' ? 'My Education' : sectionId === 'certificate' ? 'My Certificates' : sectionId === 'contact' ? <span>Contact <span className="text-[#0891b2]">Us</span></span> : sectionId === 'about' ? 'About Me' : sectionId === 'skill' ? 'My Skills' : data.title}
            </h2>
            <p className={`text-[10px] sm:text-xs md:text-sm font-medium hidden sm:block mt-0.5 md:mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {sectionId === 'project' ? 'Here are some of my recent web development projects.' : sectionId === 'education' ? 'My academic background and professional growth journey.' : sectionId === 'certificate' ? 'Verified recognitions of my technical skills and achievements.' : sectionId === 'contact' ? 'Have any questions? I’m happy to help—just drop a message.' : sectionId === 'about' ? 'Discover my journey, passion, and what drives me.' : sectionId === 'skill' ? 'Technologies and tools I work with.' : data.description}
            </p>
          </div>

          <button onClick={onClose} className={`p-3 border rounded-full pointer-events-auto transition-all shadow-lg backdrop-blur-sm ${isDarkMode ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-800 border-black/10 hover:bg-black/10 hover:border-black/20'}`}>
            <X size={24} />
          </button>
        </div>

        <div className={`flex-1 overflow-y-auto custom-scroll relative z-20 w-full h-full p-4 md:p-14 pt-24 md:pt-32 ${isDarkMode ? 'bg-[#00040a]' : 'bg-[#fcfcfc]'}`}>
          {sectionId === 'contact' ? (
            <div className="flex flex-col h-full pt-4 md:pt-8 max-w-7xl mx-auto w-full">


              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left Column: Info */}
                <div className="flex-1 flex flex-col gap-8 pl-6 md:pl-32 pt-10">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Address</h3>
                      <p className={`text-sm leading-relaxed max-w-[250px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{data.details.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>📞 Contact Details</h3>
                      <div className="flex flex-col gap-1">
                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}><span className={`font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}> Call / WhatsApp:</span> {data.details.phone.main}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}><span className={`font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}> Call / WhatsApp:</span> {data.details.phone.admission}</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}> Email Support</h3>
                      <div className="flex flex-col gap-1">
                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}><span className={`font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Personal Email:</span> {data.details.email.general}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}><span className={`font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Support:</span> {data.details.email.support}</p>
                      </div>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="flex gap-4 mt-2">
                    {[
                      { Icon: Github, link: 'https://github.com/bhelavevicky66-ui' },
                      { Icon: Mail, link: 'mailto:bhelavevicky66@gmail.com' },
                      { Icon: Instagram, link: 'https://www.instagram.com/vicky_bhelave143/' },
                      { Icon: Linkedin, link: 'https://www.linkedin.com/in/vickybhelave' },
                      { Icon: MessageCircle, link: 'https://wa.me/919272150600' }
                    ].map(({ Icon, link }, i) => (
                      <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800'}`}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="flex-1">
                  <div className={`rounded-[2rem] p-8 h-fit relative transition-colors ${isDarkMode ? 'bg-[#0f172a] border border-slate-800' : 'bg-white shadow-[0_10px_60px_-10px_rgba(0,0,0,0.05)] border border-slate-100'}`}>
                    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Send us a Message</h3>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl px-6 py-4 outline-none border focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all font-medium ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:bg-slate-800' : 'bg-slate-50 border-slate-100 text-slate-700 placeholder:text-slate-400 focus:bg-white'}`}
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl px-6 py-4 outline-none border focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all font-medium ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:bg-slate-800' : 'bg-slate-50 border-slate-100 text-slate-700 placeholder:text-slate-400 focus:bg-white'}`}
                      />

                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile No."
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl px-6 py-4 outline-none border focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all font-medium ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:bg-slate-800' : 'bg-slate-50 border-slate-100 text-slate-700 placeholder:text-slate-400 focus:bg-white'}`}
                      />

                      <textarea
                        rows={4}
                        name="message"
                        placeholder="Message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl px-6 py-4 outline-none border focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all resize-none font-medium ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:bg-slate-800' : 'bg-slate-50 border-slate-100 text-slate-700 placeholder:text-slate-400 focus:bg-white'}`}
                      ></textarea>

                      <button
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-xl bg-[#1e2a5e] hover:bg-[#16204b] text-white font-bold text-lg transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98] flex items-center justify-center gap-3 mt-2 ${isSubmitting ? 'opacity-80' : ''}`}
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : sectionId === 'project' || sectionId === 'certificate' ? (
            <div className="flex flex-col min-h-screen w-full items-center pt-28 md:pt-36 px-6">
              <div className="w-full flex-1 px-4 lg:px-12 2xl:px-24 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full mx-auto pb-32">
                  {data.points.map((item, i) => (
                    <div key={i} className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full border ${isDarkMode ? 'bg-[#0f172a] border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.8)]' : 'bg-white border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]'}`}>
                      {/* Project/Certificate Image */}
                      <div className={`w-full h-48 sm:h-56 xl:h-64 relative overflow-hidden border-b p-3 pt-6 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-100'}`}>
                        {item.image ? (
                          <div className="w-full h-full rounded-t-xl overflow-hidden shadow-md">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                          </div>
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center rounded-t-xl ${isDarkMode ? 'bg-slate-800 text-slate-600' : 'bg-slate-50 text-slate-300'}`}>
                            {sectionId === 'certificate' ? <Award size={64} strokeWidth={1} /> : <Layers size={64} strokeWidth={1} />}
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className={`flex flex-col flex-1 p-6 md:p-8 z-10 relative ${isDarkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
                        <h3 className={`text-xl xl:text-2xl font-bold mb-3 line-clamp-1 ${isDarkMode ? 'text-white' : 'text-[#1a1f36]'}`}>
                          {item.title}
                        </h3>
                        
                        <p className={`text-sm xl:text-base leading-relaxed mb-6 flex-1 line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {item.text}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-4 sm:gap-6 mt-auto">
                          {sectionId === 'project' ? (
                            <>
                              {item.githubLink ? (
                                <a 
                                  href={item.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex-1 text-center py-3.5 px-6 rounded-xl border-2 font-bold text-base xl:text-lg transition-all active:scale-95 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-blue-400 hover:bg-slate-700 hover:text-blue-300' : 'bg-white border-slate-200 text-[#3b5998] hover:border-[#3b5998] hover:bg-blue-50/50'}`}
                                >
                                  View Code
                                </a>
                              ) : (
                                <button 
                                  disabled
                                  className={`flex-1 text-center py-3.5 px-6 rounded-xl border-2 font-bold text-base xl:text-lg cursor-not-allowed opacity-70 ${isDarkMode ? 'bg-slate-800/50 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'}`}
                                >
                                  View Code
                                </button>
                              )}

                              {item.link ? (
                                <a 
                                  href={item.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="flex-1 text-center py-3.5 px-6 rounded-xl bg-[#3b5998] hover:bg-[#2d4373] text-white font-bold text-base xl:text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-[#3b5998]/20 active:scale-95"
                                >
                                  Live Demo
                                </a>
                              ) : (
                                <button 
                                  disabled
                                  className={`flex-1 text-center py-3.5 px-6 rounded-xl text-white font-bold text-base xl:text-lg cursor-not-allowed ${isDarkMode ? 'bg-slate-800 text-slate-500' : 'bg-slate-300'}`}
                                >
                                  Live Demo
                                </button>
                              )}
                            </>
                          ) : (
                            item.link ? (
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`w-full text-center py-3.5 px-6 rounded-xl font-bold text-base xl:text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 ${isDarkMode ? 'bg-[#0891b2] hover:bg-[#06b6d4] text-white hover:shadow-cyan-500/20' : 'bg-[#0891b2] hover:bg-[#0e7490] text-white hover:shadow-cyan-500/20'}`}
                              >
                                View Certificate
                              </a>
                            ) : (
                              <button 
                                disabled
                                className={`w-full text-center py-3.5 px-6 rounded-xl font-bold text-base xl:text-lg cursor-not-allowed ${isDarkMode ? 'bg-slate-800 text-slate-500' : 'bg-slate-300 text-white'}`}
                              >
                                View Certificate
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {sectionId !== 'education' && sectionId !== 'about' && (
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${data.color} flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] shrink-0`}>
                    <Icon size={44} className={isDarkMode ? 'text-white' : 'text-white'} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                      {data.title}
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg max-w-3xl font-light leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                </div>
              )}
              
              {sectionId === 'about' ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh] w-full max-w-5xl mx-auto text-center px-4 md:px-12">
                  <div className={`w-28 h-28 md:w-36 md:h-36 rounded-full mb-8 flex items-center justify-center shadow-2xl bg-gradient-to-br ${data.color} ring-4 ring-offset-4 ${isDarkMode ? 'ring-blue-500/30 ring-offset-[#0f172a]' : 'ring-blue-500/20 ring-offset-white'}`}>
                    <Icon size={64} className="text-white" />
                  </div>
                  <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {data.title}
                  </h2>
                  <p className={`text-lg md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto mb-16 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    <TypewriterText text={data.description} delay={300} speed={15} />
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6 w-full">
                    <a
                      href={resumeViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-10 py-4 md:px-12 md:py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] transition-all shadow-xl shadow-blue-600/40 font-bold active:scale-95 text-white text-lg md:text-xl"
                    >
                      <Eye size={24} />
                      <span>Explore Resume</span>
                    </a>

                    <a
                      href={resumeDownloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 px-10 py-4 md:px-12 md:py-5 rounded-full border-2 transition-all font-bold active:scale-95 text-lg md:text-xl ${isDarkMode ? 'border-blue-500/50 hover:bg-blue-500/10 text-blue-400' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                    >
                      <Download size={24} />
                      <span>Download CV</span>
                    </a>
                  </div>
                </div>
              ) : sectionId === 'contact' ? (
                // Contact logic is now handled in the top conditional block
                null
              ) : sectionId === 'education' ? (
                <div className="flex flex-col min-h-screen w-full items-center pt-24 md:pt-32 px-4 md:px-8 pb-20">
                  {/* Hero Section */}
                  <div className="w-full max-w-[1100px] mx-auto mb-16 bg-transparent rounded-[2.5rem] md:rounded-[3.5rem] py-12 px-6 md:px-16 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Background Sparkles */}
                    <div className="absolute top-10 left-32 text-red-300 font-bold text-lg md:text-xl opacity-60">●</div>
                    <div className="absolute top-20 left-12 text-emerald-300 font-bold text-2xl md:text-3xl opacity-60">+</div>
                    <div className="absolute top-16 right-1/4 text-blue-300 font-bold text-xl md:text-2xl opacity-60">+</div>
                    <div className="absolute bottom-16 right-32 text-red-300 font-bold text-lg md:text-xl opacity-60">●</div>
                    <div className="absolute bottom-12 left-16 text-emerald-300 font-bold text-2xl md:text-3xl opacity-60">+</div>
                    <div className="absolute bottom-20 left-1/3 text-blue-400 font-bold text-lg md:text-xl opacity-60">★</div>
                    <div className="absolute top-24 right-24 text-blue-400 font-bold text-lg md:text-xl opacity-60">★</div>
                    <div className="absolute top-12 right-12 text-emerald-300 font-bold text-2xl md:text-3xl opacity-60">+</div>
                    <div className="absolute bottom-1/3 right-12 text-red-300 font-bold text-lg md:text-xl opacity-60">●</div>

                    {/* Illustration */}
                    <div className="w-full md:w-[60%] flex justify-center relative z-10">
                      <svg viewBox="0 25 400 250" className="w-[85%] sm:w-[70%] md:w-[85%] drop-shadow-xl z-20 mt-[-10px]">
                        {/* Diploma */}
                        <g transform="translate(30, 140) rotate(-22)">
                          <rect x="0" y="0" width="300" height="40" rx="3" fill="#f4f5f5" />
                          <rect x="0" y="0" width="25" height="40" rx="3" fill="#e8eced" />
                          {/* Ribbon body */}
                          <rect x="75" y="-5" width="22" height="50" fill="#f35627" />
                          {/* Ribbon tails */}
                          <polygon points="75,45 82,75 97,45" fill="#db471b" />
                          <polygon points="86,45 97,80 107,45" fill="#f35627" />
                        </g>

                        {/* Cap Base Front Flap */}
                        <path d="M 115 125 L 115 195 C 115 225, 305 225, 305 195 L 305 125 Z" fill="#126fb2" />
                        <path d="M 110 125 C 110 160, 310 160, 310 125 Z" fill="#0c568c" />

                        {/* Cap Top Rhombus */}
                        <polygon points="210,40 390,105 210,165 30,105" fill="#0f4577" />

                        {/* Tassel Button and String */}
                        <circle cx="210" cy="105" r="5" fill="#083057" />
                        <path d="M 300 95 Q 303 130 305 145" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                        {/* Tassel Bulb */}
                        <circle cx="306" cy="150" r="14" fill="#f8fafc" />
                        <path d="M 296 150 L 316 150" stroke="#cbd5e1" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>

                  {/* Education Timeline */}
                  <div className="w-full flex-1 px-4 lg:px-12 2xl:px-24">
                    <div className="relative max-w-5xl mx-auto pb-32 mt-10">
                      {/* Vertical Center Line */}
                      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-1 bg-[#ff8c42]" />

                      <div className="flex flex-col gap-12 md:gap-24">
                        {data.points.map((item, i) => {
                          const isLeft = i % 2 === 0;

                          return (
                            <div key={i} className="flex w-full relative">
                              {/* Desktop Layout */}
                              <div className="hidden md:flex w-full items-center justify-between">
                                {isLeft ? (
                                  <>
                                    {/* Left Content */}
                                    <div className={`w-[45%] flex flex-col items-end relative pt-4 opacity-0 animate-[slideInLeft_0.8s_ease-out_forwards]`} style={{ animationDelay: `${i * 0.3}s` }}>
                                      {/* Horizontal Connector Line Right */}
                                      <div className="absolute -right-[6.5%] top-14 w-[12%] h-[3px] bg-[#fb923c] z-0" />

                                      <div className="w-full relative rounded-[2rem] p-[4px] overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_50px_-5px_rgba(251,146,60,0.6)] shadow-[0_0_40px_-5px_rgba(251,146,60,0.3)] transition-all duration-300 cursor-pointer z-10 group">
                                        {/* Normal rotating single-color line */}
                                        <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_70%,#fb923c_100%)] animate-[spin_3s_linear_infinite] z-0 group-hover:opacity-0 transition-opacity duration-500" />
                                        
                                        {/* Colorful rotating gradient border on hover */}
                                        <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,#fb923c,#ec4899,#8b5cf6,#3b82f6,#10b981,#eab308,#fb923c)] animate-[spin_3s_linear_infinite] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className={`relative z-10 w-full h-full rounded-[calc(2rem-4px)] p-8 md:p-10 text-center flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#f6f7f8]'}`}>
                                          <h3 className={`text-xl sm:text-2xl md:text-[22px] lg:text-[24px] xl:text-[26px] font-black italic mb-4 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis w-full text-center ${isDarkMode ? 'text-white' : 'text-[#2d3748]'}`}>
                                            <TypewriterText text={item.title} delay={(i * 300) + 600} speed={40} />
                                          </h3>
                                          <p className={`text-[15px] lg:text-[17px] leading-[1.8] font-medium mb-3 ${isDarkMode ? 'text-slate-400' : 'text-[#4e5d78]'}`}>
                                            <TypewriterText text={item.subtitle} delay={(i * 300) + 1200} speed={20} />
                                          </p>
                                          <p className="text-[#fb923c] font-bold text-sm tracking-widest">{item.date}</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="w-[10%] flex justify-center relative">
                                        {/* Central Node */}
                                        <div className="w-[20px] h-[20px] bg-[#fb923c] rounded-full shadow-[0_0_15px_4px_rgba(251,146,60,0.5)] z-20 absolute top-[3.2rem]" />
                                    </div>
                                    <div className="w-[45%]" />
                                  </>
                                ) : (
                                  <>
                                    <div className="w-[45%]" />
                                    <div className="w-[10%] flex justify-center relative">
                                        {/* Central Node */}
                                        <div className="w-[20px] h-[20px] bg-[#fb923c] rounded-full shadow-[0_0_15px_4px_rgba(251,146,60,0.5)] z-20 absolute top-[3.2rem]" />
                                    </div>
                                    {/* Right Content */}
                                    <div className={`w-[45%] flex flex-col items-start relative pt-4 opacity-0 animate-[slideInRight_0.8s_ease-out_forwards]`} style={{ animationDelay: `${i * 0.3}s` }}>
                                      {/* Horizontal Connector Line Left */}
                                      <div className="absolute -left-[6.5%] top-14 w-[12%] h-[3px] bg-[#fb923c] z-0" />

                                      <div className="w-full relative rounded-[2rem] p-[4px] overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_50px_-5px_rgba(251,146,60,0.6)] shadow-[0_0_40px_-5px_rgba(251,146,60,0.3)] transition-all duration-300 cursor-pointer z-10 group">
                                        {/* Normal rotating single-color line */}
                                        <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_70%,#fb923c_100%)] animate-[spin_3s_linear_infinite] z-0 group-hover:opacity-0 transition-opacity duration-500" />
                                        
                                        {/* Colorful rotating gradient border on hover */}
                                        <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,#fb923c,#ec4899,#8b5cf6,#3b82f6,#10b981,#eab308,#fb923c)] animate-[spin_3s_linear_infinite] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className={`relative z-10 w-full h-full rounded-[calc(2rem-4px)] p-8 md:p-10 text-center flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#f6f7f8]'}`}>
                                          <h3 className={`text-xl sm:text-2xl md:text-[22px] lg:text-[24px] xl:text-[26px] font-black italic mb-4 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis w-full text-center ${isDarkMode ? 'text-white' : 'text-[#2d3748]'}`}>
                                            <TypewriterText text={item.title} delay={(i * 300) + 600} speed={40} />
                                          </h3>
                                          <p className={`text-[15px] lg:text-[17px] leading-[1.8] font-medium mb-3 ${isDarkMode ? 'text-slate-400' : 'text-[#4e5d78]'}`}>
                                            <TypewriterText text={item.subtitle} delay={(i * 300) + 1200} speed={20} />
                                          </p>
                                          <p className="text-[#fb923c] font-bold text-sm tracking-widest">{item.date}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>

                              {/* Mobile Layout */}
                              <div className={`md:hidden flex w-full items-start pl-12 relative pt-2 opacity-0 animate-[slideInRight_0.8s_ease-out_forwards]`} style={{ animationDelay: `${i * 0.3}s` }}>
                                <div className="absolute left-[18px] top-12 w-[15px] h-[15px] bg-[#fb923c] rounded-full shadow-[0_0_15px_4px_rgba(251,146,60,0.5)] z-20" />
                                
                                {/* Mobile Horizontal Connector */}
                                <div className="absolute left-[28px] top-[54px] w-[1rem] h-[3px] bg-[#fb923c] z-10" />

                                <div className="w-full relative rounded-[1.5rem] p-[3px] overflow-hidden mt-0 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(251,146,60,0.5)] shadow-[0_0_30px_-5px_rgba(251,146,60,0.2)] transition-all duration-300 cursor-pointer z-10 group">
                                  {/* Normal rotating single-color line */}
                                  <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_70%,#fb923c_100%)] animate-[spin_3s_linear_infinite] z-0 group-hover:opacity-0 transition-opacity duration-500" />
                                  
                                  {/* Colorful rotating gradient border on hover */}
                                  <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,#fb923c,#ec4899,#8b5cf6,#3b82f6,#10b981,#eab308,#fb923c)] animate-[spin_3s_linear_infinite] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                  <div className={`relative z-10 w-full h-full rounded-[calc(1.5rem-3px)] p-5 sm:p-6 text-center flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#f6f7f8]'}`}>
                                    <h3 className={`text-lg sm:text-xl font-black italic mb-3 whitespace-normal sm:whitespace-nowrap overflow-hidden text-ellipsis w-full ${isDarkMode ? 'text-white' : 'text-[#2d3748]'}`}>
                                      <TypewriterText text={item.title} delay={(i * 300) + 600} speed={40} />
                                    </h3>
                                    <p className={`text-[14px] sm:text-[15px] leading-relaxed font-medium mb-2 ${isDarkMode ? 'text-slate-400' : 'text-[#4e5d78]'}`}>
                                      <TypewriterText text={item.subtitle} delay={(i * 300) + 1200} speed={20} />
                                    </p>
                                    <p className="text-[#fb923c] font-bold text-xs tracking-widest">{item.date}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : sectionId === 'skill' ? (
                <div className="flex flex-col items-center justify-center min-h-[70vh] w-full overflow-hidden relative">
                  
                  {/* Orbit Animation Styles */}
                  <style>{`
                    @keyframes orbit {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    @keyframes orbit-reverse {
                      from { transform: rotate(360deg); }
                      to { transform: rotate(0deg); }
                    }
                    .orbit-radius-1 { transform: translateY(-90px); }
                    .orbit-radius-2 { transform: translateY(-135px); }
                    @media (min-width: 768px) {
                        .orbit-radius-1 { transform: translateY(-160px); }
                        .orbit-radius-2 { transform: translateY(-240px); }
                    }
                  `}</style>
                  
                  {/* Rotating System Container */}
                  <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center mt-20 md:mt-0">
                    
                    {/* Center Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_80px_rgba(79,70,229,0.3)] animate-[pulse_4s_ease-in-out_infinite]">
                         <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[ping_3s_linear_infinite]" />
                         <div className="absolute inset-0 rounded-full border border-indigo-400/10 animate-[spin_10s_linear_infinite]" />
                         <Cpu size={40} className="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] relative z-10 md:w-[50px] md:h-[50px]" />
                         <div className="absolute -bottom-12 text-center w-40">
                            <h3 className={`text-base font-black tracking-[0.3em] ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>SKILLS</h3>
                         </div>
                      </div>
                    </div>

                    {/* Orbit 1: Frontend (Inner) */}
                    <div className="absolute inset-0 animate-[orbit_30s_linear_infinite] z-10 pointer-events-none">
                        <div className="w-full h-full rounded-full border border-dashed border-indigo-500/10 absolute inset-0 scale-[0.6] md:scale-[0.53]" />
                        {[
                          { name: 'HTML', icon: FileCode, color: 'text-orange-500', glow: 'shadow-orange-500/50' },
                          { name: 'CSS', icon: Palette, color: 'text-blue-500', glow: 'shadow-blue-500/50' },
                          { name: 'JavaScript', icon: Code2, color: 'text-yellow-400', glow: 'shadow-yellow-400/50' },
                        ].map((item, index, arr) => (
                           <div key={index} className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-auto" 
                                style={{ transform: `rotate(${index * (360/arr.length)}deg)` }}> 
                                {/* 1. Rotate to angle */}
                                <div className="orbit-radius-1 absolute top-0 left-0 flex items-center justify-center">
                                   {/* 2. Translate out to radius - handled by class */}
                                   <div style={{ transform: `rotate(-${index * (360/arr.length)}deg)` }}>
                                      {/* 3. Counter-rotate placement */}
                                      <div className="animate-[orbit-reverse_30s_linear_infinite]">
                                          {/* 4. Counter-animate orbit */}
                                          <div className={`flex flex-col items-center gap-2 group cursor-pointer transition-all hover:scale-125`}>
                                              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center shadow-lg ${item.glow} group-hover:border-white/30 transition-colors`}>
                                                  <item.icon size={24} className={`${item.color} md:w-8 md:h-8`} />
                                              </div>
                                              <span className={`text-[10px] font-bold bg-black/40 px-2 py-0.5 rounded backdrop-blur-md text-white border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 whitespace-nowrap`}>{item.name}</span>
                                          </div>
                                      </div>
                                   </div>
                                </div>
                           </div>
                        ))}
                    </div>

                    {/* Orbit 2: Tools (Outer) */}
                    <div className="absolute inset-0 animate-[orbit_50s_linear_infinite] pointer-events-none">
                        <div className="w-full h-full rounded-full border border-dashed border-indigo-500/5 absolute inset-0 scale-[0.9] md:scale-[0.8]" />
                        {[
                          { name: 'Vercel', icon: UploadCloud, color: 'text-white', glow: 'shadow-white/50' },
                          { name: 'GitHub', icon: Github, color: 'text-gray-400', glow: 'shadow-gray-400/50' },
                          { name: 'VS Code', icon: Terminal, color: 'text-blue-400', glow: 'shadow-blue-400/50' },
                          { name: 'Excel', icon: Table, color: 'text-green-500', glow: 'shadow-green-500/50' },
                          { name: 'Canva', icon: ImageIcon, color: 'text-purple-400', glow: 'shadow-purple-400/50' },
                          { name: 'Google Sheet', icon: Grid, color: 'text-green-400', glow: 'shadow-green-400/50' },
                        ].map((item, index, arr) => (
                           <div key={index} className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-auto"
                                style={{ transform: `rotate(${index * (360/arr.length)}deg)` }}>
                                <div className="orbit-radius-2 absolute top-0 left-0 flex items-center justify-center">
                                   <div style={{ transform: `rotate(-${index * (360/arr.length)}deg)` }}>
                                      <div className="animate-[orbit-reverse_50s_linear_infinite]">
                                          <div className={`flex flex-col items-center gap-2 group cursor-pointer transition-all hover:scale-125`}>
                                              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center shadow-lg ${item.glow} group-hover:border-white/30 transition-colors`}>
                                                  <item.icon size={24} className={`${item.color} md:w-8 md:h-8`} />
                                              </div>
                                              <span className={`text-[10px] font-bold bg-black/40 px-2 py-0.5 rounded backdrop-blur-md text-white border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 whitespace-nowrap`}>{item.name}</span>
                                          </div>
                                      </div>
                                   </div>
                                </div>
                           </div>
                        ))}
                    </div>

                    {/* Floating Decorative Elements */}
                     <div className="absolute inset-0 animate-spin-slow pointer-events-none opacity-20">
                        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full blur-[1px]" />
                        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full blur-[2px]" />
                        <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full" />
                     </div>

                  </div>
                </div>
              ) : sectionId === 'project' ? (
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto pb-20">
                    {data.points.map((item, i) => (
                      <div key={i} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-slate-100 hover:-translate-y-1">
                        {/* Project Image */}
                        <div className="w-full h-48 sm:h-64 bg-slate-100 relative overflow-hidden border-b border-slate-100 p-2 pt-4">
                          {item.image ? (
                            <div className="w-full h-full rounded-t-lg overflow-hidden shadow-sm">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                            </div>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50 rounded-t-lg">
                              <Layers size={48} strokeWidth={1} />
                            </div>
                          )}
                        </div>
                        
                        {/* Project Content */}
                        <div className="flex flex-col flex-1 p-6 md:p-8 bg-white z-10 relative">
                          <h3 className="text-xl font-bold text-[#1a1f36] mb-3 line-clamp-1">
                            {item.title}
                          </h3>
                          
                          <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-1 line-clamp-3">
                            {item.text}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex gap-4 mt-auto">
                            {item.githubLink ? (
                               <a 
                                href={item.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center py-2.5 px-4 rounded-[6px] bg-white border border-slate-300 text-[#3b5998] font-semibold text-sm hover:border-[#3b5998] hover:bg-blue-50 transition-colors"
                              >
                                View Code
                              </a>
                            ) : (
                               <button 
                                disabled
                                className="flex-1 text-center py-2.5 px-4 rounded-[6px] bg-white border border-slate-200 text-slate-400 font-semibold text-sm cursor-not-allowed opacity-60"
                              >
                                View Code
                              </button>
                            )}

                            {item.link ? (
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex-1 text-center py-2.5 px-4 rounded-[6px] bg-[#3b5998] hover:bg-[#314a7e] text-white font-semibold text-sm transition-colors shadow-sm"
                              >
                                Live Demo
                              </a>
                            ) : (
                              <button 
                                disabled
                                className="flex-1 text-center py-2.5 px-4 rounded-[6px] bg-slate-300 text-white font-semibold text-sm cursor-not-allowed"
                              >
                                Live Demo
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-10 mt-4 pb-12">
                  {data.points.map((item, i) => (
                    <div key={i} className={`group relative p-8 rounded-[2rem] border-2 transition-all duration-500 ${sectionId === 'project' ? 'bg-indigo-950/20 border-indigo-500/10 hover:border-indigo-500/40 hover:bg-indigo-950/30 shadow-xl shadow-indigo-500/5' : 'bg-amber-950/10 border-amber-500/10 hover:border-amber-500/40 hover:bg-amber-950/20 shadow-xl shadow-amber-500/5'}`}>

                      <div className={`absolute left-[-10px] top-10 w-5 h-5 rounded-full shadow-lg ${sectionId === 'project' ? 'bg-blue-500 shadow-blue-500/50' : 'bg-amber-500 shadow-amber-500/50'} opacity-0 group-hover:opacity-100 transition-opacity`} />

                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                        <div className="flex flex-col gap-3">
                          <h4 className={`font-black text-2xl md:text-3xl tracking-tight flex items-center gap-3 transition-colors ${sectionId === 'project' ? 'text-white group-hover:text-blue-400' : 'text-white group-hover:text-amber-400'}`}>
                            <span className={`${sectionId === 'project' ? 'text-blue-500' : 'text-amber-500'} opacity-50`}><ChevronRight size={24} /></span>
                            {item.title}
                          </h4>
                          {item.subtitle && <p className={`${sectionId === 'project' ? 'text-blue-400/80' : 'text-amber-400/80'} font-black text-sm uppercase tracking-widest ml-10`}>{item.subtitle}</p>}

                          <div className="flex flex-wrap gap-5 ml-10 mt-2">
                            {item.date && (
                              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                                <Calendar size={14} className={sectionId === 'project' ? 'text-blue-500' : 'text-amber-500'} />
                                {item.date}
                              </div>
                            )}
                            {item.location && (
                              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                                <MapPin size={14} className={sectionId === 'project' ? 'text-blue-500' : 'text-amber-500'} />
                                {item.location}
                              </div>
                            )}
                          </div>
                        </div>

                        {item.link && item.link !== '#' && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 px-8 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest hover:scale-110 active:scale-95 transition-all shadow-xl w-fit shrink-0 ${sectionId === 'project' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-900/40' : 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-950/40'}`}>
                            <ExternalLink size={16} />
                            {sectionId === 'certificate' ? 'View Certificate' : 'Live Preview'}
                          </a>
                        )}
                      </div>

                      <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-4xl ml-10 border-l border-white/10 pl-8 py-2 italic group-hover:text-slate-300 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
