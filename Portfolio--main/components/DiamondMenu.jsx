import React from 'react';

const DiamondMenu = ({ items, onSelect }) => {
  const positions = [
    { top: '18%', left: '20%' },      // ABOUT
    { top: '35%', left: '40%' },     // SKILL
    { top: '53%', left: '63%' },    // project
    { top: '18%', left: '62%' },    // Education
    { top: '52%', left: '18%' },    // CERTIFICATE
    { top: '67%', left: '40%' },    // content
    { top: '90%', left: '30%' },    // education
  ];

  const [selectedId, setSelectedId] = React.useState(null);
  const [rotatingId, setRotatingId] = React.useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    setRotatingId(id);
    // Wait for animation to finish before opening content
    setTimeout(() => {
      onSelect(id);
      setRotatingId(null);
    }, 800);
  };

  return (
    <div>
      <style>{`
        @keyframes spin-open {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(0.9) rotate(180deg); opacity: 0.8; }
          100% { transform: scale(3) rotate(360deg); opacity: 0; }
        }
        .animate-spin-open {
          animation: spin-open 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
          z-index: 50 !important;
        }
      `}</style>

      <div className="lg:hidden w-fit mx-auto my-20 p-2 scale-900 mb-8">
        <div className="grid grid-cols-3 gap-9">
          {items.slice(0, 6).map((item) => (
            <div key={item.id} className="w-20 h-20 sm:w-24 sm:h-24 shadow-2xl">
              <DiamondItem 
                item={item} 
                onSelect={handleSelect} 
                selected={selectedId === item.id} 
                rotate={false}
                isRotating={rotatingId === item.id} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block relative w-[340px] h-[340px] lg:w-[600px] lg:h-[600px]">
        {items.slice(0, 6).map((item, idx) => (
          <div
            key={item.id}
            className="absolute w-[29%] aspect-square transition-all duration-500"
            style={{
              top: positions[idx].top,
              left: positions[idx].left,
            }}
          >
            <DiamondItem 
              item={item} 
              onSelect={handleSelect} 
              selected={selectedId === item.id}
              isRotating={rotatingId === item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const DiamondItem = ({ item, onSelect, selected = false, rotate = true, isRotating = false }) => {
  const Icon = item.icon;
  const colorClass = selected ? 'text-black dark:text-white' : 'text-white';
  return (
    <button
      onClick={() => onSelect(item.id)}
      aria-pressed={selected}
      className={`group relative w-full h-full transform transition-all duration-300 hover:scale-105 active:scale-95 z-10 ${isRotating ? 'animate-spin-open pointer-events-none' : ''}`}
    >
      <div className={`absolute inset-0 ${rotate ? 'rotate-45 scale-[0.71]' : 'rotate-0'} rounded-[12%] bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden shadow-lg border border-white/10`}>
        <div className={`-rotate-45 flex flex-col items-center justify-center p-1 ${colorClass}`}>
          <Icon size={24} className={`mb-1.5 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all w-6 h-6 lg:w-9 lg:h-9 ${colorClass}`} strokeWidth={2} />
          <span className={`${colorClass} text-[9px] sm:text-[10px] lg:text-[13px] font-black tracking-widest uppercase text-center`}>{item.label}</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>
    </button>
  );
};

export default DiamondMenu;
