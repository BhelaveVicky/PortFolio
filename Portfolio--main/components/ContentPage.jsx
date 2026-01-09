import React, { useEffect, useState } from 'react';
import { ArrowLeft, User, Code2, Layers, GraduationCap, Mail, X, Send, Award, ChevronRight, ExternalLink, CheckCircle2, Calendar, MapPin, Download, Eye, Phone, Facebook, Instagram, Linkedin, Twitter, Map, Github, MessageCircle } from 'lucide-react';

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
              link: 'https://typo-dash.vercel.app/'
            },
            {
              title: 'BrainQuest – Puzzle Web App',
              text: 'Created an interactive puzzle platform containing guessing games, logic puzzles, and tic-tac-toe. Designed a clean, simple, and highly responsive interface for all devices. Focused on smooth user experience, fast performance, and engaging gameplay. Hosted on Vercel for reliable and fast deployment.',
              link: 'https://puzzel-one.vercel.app/'
            },
            {
              title: 'Chess Game – 2-Player Web Application',
              text: 'Built a fully interactive chess game supporting two players on the same device. Added multiple time controls (5, 10, 15 minutes and ∞ mode) with a glowing active timer. Implemented animated highlights for selected squares, legal moves, captures, and check alerts. Included move sounds, winner popup, and auto-promotion of pawns to queens for faster gameplay.',
              link: 'https://chess-game-bw7l.vercel.app/'
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
              title: 'Web Development Course',
              subtitle: 'Navgurukul | Himachal Pradesh',
              date: 'July 2025 - Present'
            },
            {
              title: 'Secondary Education',
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
              link: 'https://drive.google.com/file/d/1s6CYZojMYmSrDsdV2MkA2wAfyde30xV6/view?usp=sharing'
            },
            {
              title: 'Google Cloud',
              text: 'Certification validating proficiency in Google Cloud Platform services and core cloud computing concepts.',
              link: 'https://drive.google.com/file/d/1QeqqGizqAi7G6-27iRPrZ6aaY0b0rM84/view?usp=sharing'
            },
            {
              
              title: 'Responsive Web Design',
              text: 'Professional certification for mastering modern layout techniques including CSS Grid, Flexbox, and mobile-first architecture.',
              link: 'https://drive.google.com/file/d/1oCGj4ripHJc4p2tdnZgn3sy_6vsEZOgI/view?usp=sharing'
            },
            {
              title: 'HTML Developer Certificate',
              text: 'Certification validating expertise in semantic HTML5, web accessibility, and document structure best practices.',
              link: 'https://drive.google.com/file/d/1_Jolp6D_3nAjcqi87a3R_f8gTrEEIFQ8/view?usp=sharing'
            },
            {
              title: 'CSS Developer Certificate',
              text: 'Credential for advanced CSS styling, animations, and efficient UI design patterns.',
              link: 'https://drive.google.com/file/d/14hBslmZUmGPy_C6dejzvekHe3hOLWEz6/view?usp=sharing'
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
    <div className={`fixed inset-0 z-[100] flex items-center justify-center ${sectionId === 'contact' ? 'p-0' : 'p-4 md:p-8'}`}>
      <div
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
        onClick={onClose}
      />

      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vmin] h-[40vmin] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px] opacity-12 md:opacity-20 ${data.glow}`} />

      <div className={`modal-responsive relative overflow-hidden flex flex-col animate-scale-up shadow-2xl ${sectionId === 'contact'
        ? 'w-full h-full rounded-none p-4 sm:p-6 md:p-14 bg-[#fcfcfc] text-slate-800'
        : 'w-full max-w-full sm:max-w-2xl md:max-w-4xl h-[92vh] sm:h-[90vh] md:h-[85vh] rounded-xl sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-14 bg-black border border-white/10 text-white'
        }`}>
        <div className={`absolute inset-0 rounded-[2.5rem] pointer-events-none z-0 md:z-0`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-[0.03] md:opacity-[0.05] blur-[6px]`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent)] md:opacity-40 opacity-0" />
        </div>

        {/* Success Message Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md animate-fade-in transition-all">
            <div className="flex flex-col items-center gap-6 text-center p-8 animate-scale-up max-w-sm w-full">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-xl shadow-green-200 mb-2">
                <CheckCircle2 size={48} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 font-medium text-lg">Successfully sent message to Vicky Bhelave</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-8 mt-4 shrink-0 z-20 relative">
          <button
            onClick={onClose}
            className={`flex items-center gap-3 border transition-all group px-5 py-2.5 rounded-full shadow-lg backdrop-blur-sm ${sectionId === 'contact'
              ? 'bg-black/5 text-slate-800 border-black/10 hover:bg-black/10 hover:border-black/20'
              : 'text-white bg-white/10 border-white/5 hover:bg-white/20 hover:border-white/20'
              }`}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Back</span>
          </button>

          <button onClick={onClose} className={`p-3 border rounded-full transition-all shadow-lg backdrop-blur-sm ${sectionId === 'contact' ? 'bg-black/5 text-slate-800 border-black/10 hover:bg-black/10 hover:border-black/20' : 'text-white bg-white/10 border-white/5 hover:bg-white/20 hover:border-white/20'}`}>
            <X size={24} />
          </button>
        </div>

        {/* Title for Contact Section */}
        {sectionId === 'contact' && (
          <div className="absolute top-0 left-0 w-full text-center pt-5 z-0 pointer-events-none">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Contact <span className="text-[#0891b2]">Us</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base">Have any questions? I’m happy to help—just drop a message.</p>
          </div>
        )}

        <div className="flex-1 overflow-y-auto custom-scroll pr-2 md:pr-6 relative z-20">
          {sectionId === 'contact' ? (
            <div className="flex flex-col h-full pt-4 md:pt-0">


              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left Column: Info */}
                <div className="flex-1 flex flex-col gap-8 pl-6 md:pl-32 pt-10">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Address</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-[250px]">{data.details.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">📞 Contact Details</h3>
                      <div className="flex flex-col gap-1">
                        <p className="text-slate-500 text-sm"><span className="font-semibold text-slate-700"> Call / WhatsApp:</span> {data.details.phone.main}</p>
                        <p className="text-slate-500 text-sm"><span className="font-semibold text-slate-700"> Call / WhatsApp:</span> {data.details.phone.admission}</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1"> Email Support</h3>
                      <div className="flex flex-col gap-1">
                        <p className="text-slate-500 text-sm"><span className="font-semibold text-slate-700">Personal Email:</span> {data.details.email.general}</p>
                        <p className="text-slate-500 text-sm"><span className="font-semibold text-slate-700">Support:</span> {data.details.email.support}</p>
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
                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 cursor-pointer transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="flex-1">
                  <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.05)] border border-slate-100 h-fit relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-700 placeholder:text-slate-400 font-medium"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-700 placeholder:text-slate-400 font-medium"
                      />

                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile No."
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-700 placeholder:text-slate-400 font-medium"
                      />

                      <textarea
                        rows={4}
                        name="message"
                        placeholder="Message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all resize-none text-slate-700 placeholder:text-slate-400 font-medium"
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
          ) : (
            <div className="flex flex-col gap-12">
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

              {sectionId === 'about' ? (
                <div className="mt-8 pb-12 w-full flex justify-center">
                  <div className="flex flex-wrap justify-center gap-6 mt-6">
                    <a
                      href={resumeViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-12 py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] transition-all shadow-xl shadow-blue-600/40 font-bold active:scale-95 text-white text-xl"
                    >
                      <Eye size={24} />
                      <span>Explore Resume</span>
                    </a>

                    <a
                      href={resumeDownloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-12 py-5 rounded-full border-2 border-blue-500/50 hover:bg-blue-500/10 transition-all font-bold active:scale-95 text-blue-400 text-xl"
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
                <div className="flex flex-col gap-10 mt-10 pb-16 items-center w-full">
                  {data.points.map((item, i) => (
                    <div key={i} className="w-full max-w-2xl relative group">
                      <div className="relative w-full bg-gradient-to-br from-teal-900/40 via-emerald-950/40 to-black rounded-[2.5rem] py-14 px-10 flex flex-col items-center justify-center text-center border-2 border-teal-500/30 shadow-[0_0_40px_rgba(45,212,191,0.15)] hover:border-teal-400/60 transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.1),transparent)]" />

                        <h3 className="relative z-10 text-teal-400 text-3xl md:text-4xl lg:text-5xl font-black mb-5 tracking-tight leading-tight group-hover:scale-105 transition-transform">{item.title}</h3>
                        <div className="relative z-10 space-y-3">
                          <p className="text-slate-300 text-xl md:text-2xl font-semibold tracking-tight leading-snug">{item.subtitle}</p>
                          <p className="text-teal-500/70 text-lg md:text-xl font-bold uppercase tracking-widest">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : sectionId === 'skill' ? (
                <div className="flex flex-col gap-16 mt-10 pb-16 w-full">
                  {data.skillGroups.map((group, i) => (
                    <div key={i} className="flex flex-col items-center w-full relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-8 py-2 rounded-full bg-indigo-950/50 border border-indigo-500/20 backdrop-blur-sm z-20">
                        <h3 className="text-indigo-400 text-sm md:text-base font-black tracking-widest uppercase text-center">{group.category}</h3>
                      </div>

                      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl p-10 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative">
                        {group.items.map((skill, idx) => (
                          <div key={idx} className="relative group cursor-default overflow-hidden rounded-2xl">
                            <div className="relative z-10 bg-slate-900 border-2 border-slate-700/50 shadow-lg px-12 py-5 text-slate-300 font-black text-xl md:text-2xl transition-all duration-500 tracking-tight text-center flex items-center justify-center min-w-[180px] group-hover:text-white group-hover:border-green-400 group-hover:shadow-green-500/20">
                              <span className="relative z-20">{skill}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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
