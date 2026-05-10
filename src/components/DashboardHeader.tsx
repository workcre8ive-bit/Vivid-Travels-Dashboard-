import { Search, Bell, Plus, Menu } from 'lucide-react';

interface DashboardHeaderProps {
  onMenuOpen: () => void;
}

export function DashboardHeader({ onMenuOpen }: DashboardHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4" id="dashboard-header">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <button 
          type="button"
          onClick={onMenuOpen}
          className="p-2 lg:hidden bg-surface border border-ink/5 rounded-xl text-ink-muted hover:text-electric-blue transition-all"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink mb-1">Explore the World</h1>
          <p className="text-xs sm:text-sm font-medium text-ink-muted">Welcome back, Alex. Your next adventure starts here.</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
        <div className="flex-1 sm:flex-none hidden md:flex items-center gap-3 bg-surface border border-ink/5 px-4 py-2.5 rounded-xl shadow-subtle w-full sm:w-80 focus-within:ring-2 focus-within:ring-electric-blue/20 transition-all">
          <Search size={18} className="text-ink-muted" />
          <input 
            type="text" 
            placeholder="Search trips..." 
            className="bg-transparent border-none outline-none text-sm w-full text-ink placeholder:text-ink-muted"
          />
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-0">
          <button type="button" className="w-10 h-10 sm:w-11 sm:h-11 bg-surface border border-ink/5 rounded-xl flex items-center justify-center text-ink-muted hover:text-electric-blue transition-all relative">
            <Bell size={18} />
            <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-surface" />
          </button>
          
          <button type="button" className="bg-electric-blue text-surface px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-electric-blue/30 hover:bg-electric-blue/90 transition-all flex items-center gap-2 group whitespace-nowrap">
            <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            <span className="hidden xs:inline">Create Plan</span>
            <span className="xs:hidden">Add</span>
          </button>
        </div>
      </div>
    </header>
  );
}
