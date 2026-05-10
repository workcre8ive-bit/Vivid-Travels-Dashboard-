import { Calendar, MapPin, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

interface TripProps {
  title: string;
  location: string;
  date: string;
  progress: number;
  image: string;
  status: 'Upcoming' | 'In Progress' | 'Completed';
}

export function TripCard({ title, location, date, progress, image, status }: TripProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass-card rounded-xxl overflow-hidden group transition-all duration-500 hover:shadow-hover"
      id={`trip-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`
            px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border 
            ${status === 'In Progress' ? 'bg-electric-blue/20 border-electric-blue/30 text-electric-blue' : 'bg-white/20 border-white/30 text-white'}
          `}>
            {status}
          </span>
        </div>
        <button type="button" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-ink transition-all">
          <MoreHorizontal size={18} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-ink mb-1 group-hover:text-electric-blue transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-ink-muted text-xs">
              <MapPin size={12} className="text-electric-blue" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="flex items-center gap-1.5 text-ink-muted text-xs bg-soft-grey px-2 py-1 rounded-lg">
            <Calendar size={12} />
            <span>{date}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[11px] font-bold text-ink-muted uppercase tracking-wider">
            <span>Trip Progress</span>
            <span className="text-electric-blue">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-ink/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-electric-blue rounded-full relative"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
