import { BarChart3, TrendingUp, Users, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Total Saved', value: '$12,450', change: '+12%', icon: Wallet, color: 'text-emerald-500' },
  { label: 'Wishlist', value: '24', change: '+2', icon: TrendingUp, color: 'text-amber-500' },
  { label: 'Companions', value: '8', change: '0', icon: Users, color: 'text-electric-blue' },
];

export function TravelStats() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" id="travel-stats">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className={`
            glass-card p-5 sm:p-6 rounded-xxl flex flex-col gap-4 group hover:shadow-hover transition-all duration-300
            ${i === 2 ? 'xs:col-span-2 md:col-span-1' : ''}
          `}
        >
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-xl bg-soft-grey group-hover:scale-110 transition-transform ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-ink/5 rounded-lg">
              <span className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-ink-muted'}`}>
                {stat.change}
              </span>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-ink">{stat.value}</p>
          </div>
          {/* Subtle Data Viz bar */}
          <div className="h-1 w-full bg-soft-grey rounded-full mt-2 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.random() * 50 + 50}%` }}
              className={`h-full ${stat.color.replace('text-', 'bg-')}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
