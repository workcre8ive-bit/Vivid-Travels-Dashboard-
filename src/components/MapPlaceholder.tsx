import { 
  Search, 
  Bell, 
  Plus, 
  MapPin,
  Layers,
  Navigation2,
  Maximize2
} from 'lucide-react';
import { motion } from 'motion/react';

export function MapPlaceholder() {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] rounded-xxl overflow-hidden shadow-subtle group" id="map-placeholder">
      {/* Stylized Map Background */}
      <div className="absolute inset-0 bg-[#E8EEF5]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-40">
          {/* Mock Map Lines */}
          <path d="M0,20 Q20,25 40,20 T80,25 T100,20" fill="none" stroke="#D1D9E6" strokeWidth="0.5" />
          <path d="M0,50 Q25,45 50,50 T100,55" fill="none" stroke="#D1D9E6" strokeWidth="0.5" />
          <path d="M20,0 Q25,20 20,40 T25,100" fill="none" stroke="#D1D9E6" strokeWidth="0.5" />
          <path d="M60,0 Q55,40 60,70 T55,100" fill="none" stroke="#D1D9E6" strokeWidth="0.5" />
        </svg>
        
        {/* Animated Map Pins */}
        {[
          { top: '30%', left: '40%', color: 'electric-blue' },
          { top: '60%', left: '75%', color: 'ink' },
          { top: '45%', left: '20%', color: 'electric-blue' },
          { top: '70%', left: '55%', color: 'electric-blue' },
        ].map((pin, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`absolute flex items-center justify-center`}
            style={{ top: pin.top, left: pin.left }}
          >
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${pin.color === 'electric-blue' ? 'bg-electric-blue/20' : 'bg-ink/20'} animate-ping absolute`} />
            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${pin.color === 'electric-blue' ? 'bg-electric-blue' : 'bg-ink'} ring-2 sm:ring-4 ring-white shadow-sm z-10`} />
          </motion.div>
        ))}
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-start">
        <div className="flex gap-2">
          <div className="bg-surface/80 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/50 shadow-subtle flex items-center gap-2 sm:gap-3">
            <Search size={14} className="text-ink-muted" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-xs sm:text-sm w-24 sm:w-48 text-ink placeholder:text-ink-muted"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {[
            { icon: Navigation2, tooltip: 'Locate' },
            { icon: Maximize2, tooltip: 'Full Screen' },
          ].map((btn, i) => (
            <button 
              type="button"
              key={i}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-surface/80 backdrop-blur-md rounded-xl border border-white/50 shadow-subtle flex items-center justify-center text-ink-muted hover:text-electric-blue transition-all"
            >
              <btn.icon size={16} />
            </button>
          ))}
        </div>
      </div>

      {/* Map Bottom Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-surface/80 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/50 shadow-subtle flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric-blue rounded-lg sm:rounded-xl flex items-center justify-center text-surface shadow-lg shadow-electric-blue/20">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">Active Route</p>
              <p className="text-sm sm:text-base font-bold text-ink">Santorini</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-right hidden xs:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">Est. Time</p>
              <p className="text-sm sm:text-base font-bold text-ink whitespace-nowrap">3h 45m</p>
            </div>
            <button type="button" className="bg-electric-blue text-surface px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-electric-blue/30 hover:bg-electric-blue/90 transition-all whitespace-nowrap">
              Start
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
