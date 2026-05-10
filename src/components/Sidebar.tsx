import { 
  Home, 
  Map as MapIcon, 
  Calendar, 
  Settings, 
  Compass, 
  Heart, 
  User,
  LogOut,
  Plane,
  Navigation,
  Globe,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'trips', label: 'My Trips', icon: Plane },
  { id: 'discover', label: 'Discover', icon: Compass },
  { id: 'favorites', label: 'Favorites', icon: Heart },
  { id: 'map', label: 'World Map', icon: Globe },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`
        fixed left-0 top-0 h-screen bg-surface border-r border-ink/5 p-8 flex flex-col z-[70] transition-transform duration-300 ease-in-out
        w-72 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between mb-12 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-electric-blue rounded-xl flex items-center justify-center text-surface shadow-lg shadow-electric-blue/20">
              <Navigation size={22} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-ink">Vivid</span>
          </div>
          <button type="button" onClick={onClose} className="lg:hidden text-ink-muted hover:text-ink">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted mb-4 px-2">Main Menu</p>
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (window.innerWidth < 1024) onClose();
              }}
              className={`
                relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                ${activeTab === item.id ? 'text-electric-blue' : 'text-ink-muted hover:text-ink hover:bg-soft-grey'}
              `}
              id={`nav-${item.id}`}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-electric-blue/5 rounded-xl border border-electric-blue/10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon size={20} className={activeTab === item.id ? 'text-electric-blue' : 'group-hover:scale-110 transition-transform'} />
              <span className="font-medium text-sm z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2 border-t border-ink/5 pt-8">
          <button type="button" className="flex items-center gap-4 px-4 py-3 rounded-xl text-ink-muted hover:text-ink transition-colors group" id="nav-settings">
            <Settings size={20} className="group-hover:rotate-45 transition-transform" />
            <span className="font-medium text-sm">Settings</span>
          </button>
          <div className="flex items-center gap-3 px-4 py-4 mt-4 bg-soft-grey rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-ink/10 overflow-hidden ring-2 ring-white shadow-sm shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="User" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ink truncate">Alex Rivera</p>
              <p className="text-[10px] text-ink-muted font-medium uppercase tracking-wider">Explorer</p>
            </div>
            <button type="button" className="text-ink-muted hover:text-red-500 transition-colors shrink-0" id="nav-logout">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
