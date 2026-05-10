/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sidebar } from './components/Sidebar';
import { DashboardHeader } from './components/DashboardHeader';
import { TripCard } from './components/TripCard';
import { MapPlaceholder } from './components/MapPlaceholder';
import { TravelStats } from './components/TravelStats';
import { motion } from 'motion/react';
import { useState } from 'react';

const upcomingTrips = [
  {
    title: 'Santorini Sunset',
    location: 'Oia, Greece',
    date: 'Jun 12 - 18, 2026',
    progress: 75,
    status: 'Upcoming' as const,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Kyoto Cherry Blossom',
    location: 'Higashiyama, Japan',
    date: 'Apr 02 - 10, 2026',
    progress: 100,
    status: 'Completed' as const,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Swiss Alps Hiking',
    location: 'Zermatt, Switzerland',
    date: 'Aug 15 - 22, 2026',
    progress: 25,
    status: 'In Progress' as const,
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-soft-grey overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className={`
        flex-1 p-6 md:p-8 lg:p-10 max-w-[1600px] mx-auto w-full transition-all duration-300
        lg:ml-72
      `}>
        <DashboardHeader onMenuOpen={() => setIsSidebarOpen(true)} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-12 xl:col-span-8 space-y-8 sm:space-y-10">
            {/* Travel Stats Section */}
            <section>
              <div className="flex items-center justify-between mb-4 sm:mb-6 px-2">
                <h2 className="text-lg sm:text-xl font-bold text-ink">My Insights</h2>
                <button type="button" className="text-xs sm:text-sm font-bold text-electric-blue hover:underline">View Reports</button>
              </div>
              <TravelStats />
            </section>

            {/* Map Section */}
            <section>
              <div className="flex items-center justify-between mb-4 sm:mb-6 px-2">
                <h2 className="text-lg sm:text-xl font-bold text-ink">Interactive Route</h2>
                <div className="flex gap-2">
                  <span className="hidden sm:inline px-3 py-1 bg-surface border border-ink/5 rounded-full text-[10px] font-bold text-ink-muted uppercase">Satellite</span>
                  <span className="px-3 py-1 bg-electric-blue text-white rounded-full text-[10px] font-bold uppercase ring-2 ring-electric-blue/20">Planning</span>
                </div>
              </div>
              <MapPlaceholder />
            </section>
          </div>

          {/* Right Sidebar / Secondary Content */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-8 sm:space-y-10">
            {/* Planned Trips Section */}
            <section>
              <div className="flex items-center justify-between mb-4 sm:mb-6 px-2">
                <h2 className="text-lg sm:text-xl font-bold text-ink">Planned Trips</h2>
                <button type="button" className="text-xs sm:text-sm font-bold text-electric-blue hover:underline">See All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
                {upcomingTrips.map((trip, idx) => (
                  <motion.div
                    key={trip.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <TripCard {...trip} />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Quick Actions / Tips */}
            <section className="bg-ink text-surface p-6 sm:p-8 rounded-xxl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Ready for Swiss Alps?</h3>
                <p className="text-sm text-surface/70 mb-6 leading-relaxed">
                  Don't forget to check the mountain weather forecasts and book guides 2 weeks in advance.
                </p>
                <button type="button" className="w-full bg-surface text-ink font-bold py-3 rounded-xl transition-all hover:bg-electric-blue hover:text-surface shadow-xl shadow-black/20 text-sm">
                  Read Travel Guide
                </button>
              </div>
              
              {/* Abstract Background for Tip Card */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-electric-blue/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-white/5 blur-2xl rounded-full" />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

