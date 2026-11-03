import React, { useState } from 'react';
import { Check, X, ArrowUpDown, Filter, Sparkles, MapPin, Clock, Star, HelpCircle } from 'lucide-react';
import { SAFARI_PACKAGES, SafariPackage } from '../data/safariData';
import { DualBookNow } from './DualBookNow';

interface PackageComparisonProps {
  onSelectPackage: (pkg: SafariPackage) => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

export const PackageComparison: React.FC<PackageComparisonProps> = ({
  onSelectPackage,
  onOpenBooking,
}) => {
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<'budget' | 'midrange' | 'luxury'>('budget');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'duration'>('price-asc');

  const filteredPackages = SAFARI_PACKAGES.filter((pkg) => {
    if (countryFilter === 'all') return true;
    return pkg.country.toLowerCase() === countryFilter.toLowerCase();
  }).sort((a, b) => {
    const priceA = a.tierPricing[selectedTier] || a.basePrice;
    const priceB = b.tierPricing[selectedTier] || b.basePrice;
    if (sortBy === 'price-asc') return priceA - priceB;
    if (sortBy === 'price-desc') return priceB - priceA;
    if (sortBy === 'duration') return a.durationDays - b.durationDays;
    return 0;
  });

  return (
    <section className="space-y-8">
      {/* Intro & Strategy Note */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#0e3022] uppercase tracking-widest">
              Transparent Travel Planning
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              All Safari Packages & Price Comparison ({filteredPackages.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Compare all circuits across Tanzania, Kenya, Uganda, Zanzibar, South Africa, and UAE side-by-side. All Flyo package prices are 100% preserved and benchmarked against realistic park entry fees, vehicle operations, and lodge tiers.
            </p>
          </div>

          {/* Tier Switcher Control */}
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 flex items-center shrink-0">
            <span className="text-xs text-slate-500 px-3 font-medium">Show Tier:</span>
            <button
              onClick={() => setSelectedTier('budget')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedTier === 'budget'
                  ? 'bg-[#0e3022] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Budget
            </button>
            <button
              onClick={() => setSelectedTier('midrange')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedTier === 'midrange'
                  ? 'bg-[#0e3022] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mid-Range
            </button>
            <button
              onClick={() => setSelectedTier('luxury')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedTier === 'luxury'
                  ? 'bg-[#0e3022] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Luxury
            </button>
          </div>
        </div>

        {/* Filter & Sort Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          {/* Destination Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'tanzania', label: 'Tanzania' },
              { id: 'kenya', label: 'Kenya' },
              { id: 'uganda', label: 'Uganda' },
              { id: 'zanzibar', label: 'Zanzibar' },
              { id: 'south africa', label: 'South Africa' },
              { id: 'uae', label: 'UAE' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCountryFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  countryFilter === tab.id
                    ? 'bg-[#0e3022] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ArrowUpDown size={14} className="text-[#0e3022]" />
            <span className="font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-[#0e3022]"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration">Duration (Days)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Comparison Table / Matrix View (Desktop) */}
      <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="bg-[#0e3022] text-white text-[11px] uppercase tracking-wider font-semibold">
                <th className="py-4 px-5">Safari Package</th>
                <th className="py-4 px-4">Destination</th>
                <th className="py-4 px-4">Duration</th>
                <th className="py-4 px-4 text-center">Budget Tier</th>
                <th className="py-4 px-4 text-center">Mid-Range Tier</th>
                <th className="py-4 px-4 text-center">Luxury Tier</th>
                <th className="py-4 px-4 text-center">Price / Day</th>
                <th className="py-4 px-5 text-right">Instant Booking</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPackages.map((pkg) => {
                const pricePerDay = Math.round(
                  (pkg.tierPricing[selectedTier] || pkg.basePrice) / (pkg.durationDays || 1)
                );
                return (
                  <tr
                    key={pkg.id}
                    className="hover:bg-slate-50 transition-colors group"
                  >
                    {/* Package Title & Highlights */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={pkg.heroImage}
                          alt={pkg.title}
                          className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200"
                        />
                        <div>
                          <button
                            onClick={() => onSelectPackage(pkg)}
                            className="font-serif font-bold text-sm text-slate-900 group-hover:text-[#0e3022] transition-colors text-left block"
                          >
                            {pkg.title}
                          </button>
                          <span className="text-[11px] text-slate-500 block mt-0.5">
                            {pkg.category} • Rating: {pkg.rating.toFixed(2)} ★ ({pkg.reviewsCount})
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Destination */}
                    <td className="py-4 px-4">
                      <span className="font-semibold text-slate-900 block">{pkg.country}</span>
                      <span className="text-[11px] text-slate-500 truncate max-w-[140px] block">
                        {pkg.destination}
                      </span>
                    </td>

                    {/* Duration */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="text-slate-900 font-medium">{pkg.durationLabel}</span>
                    </td>

                    {/* Budget Tier */}
                    <td className={`py-4 px-4 text-center font-mono tabular-nums ${
                      selectedTier === 'budget' ? 'font-bold text-[#0e3022] bg-[#0e3022]/5 rounded-lg' : 'text-slate-600'
                    }`}>
                      ${pkg.tierPricing.budget.toLocaleString()}
                    </td>

                    {/* Mid-Range Tier */}
                    <td className={`py-4 px-4 text-center font-mono tabular-nums ${
                      selectedTier === 'midrange' ? 'font-bold text-[#0e3022] bg-[#0e3022]/5 rounded-lg' : 'text-slate-600'
                    }`}>
                      ${pkg.tierPricing.midrange.toLocaleString()}
                    </td>

                    {/* Luxury Tier */}
                    <td className={`py-4 px-4 text-center font-mono tabular-nums ${
                      selectedTier === 'luxury' ? 'font-bold text-[#0e3022] bg-[#0e3022]/5 rounded-lg' : 'text-slate-600'
                    }`}>
                      ${pkg.tierPricing.luxury.toLocaleString()}
                    </td>

                    {/* Price / Day */}
                    <td className="py-4 px-4 text-center font-mono tabular-nums text-slate-900 font-semibold">
                      ${pricePerDay}
                      <span className="text-[10px] text-slate-400 block font-normal">/ day</span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <DualBookNow
                          packageItem={pkg}
                          size="sm"
                          onOpenBookingModal={onOpenBooking}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card Grid for Comparison */}
      <div className="lg:hidden space-y-4">
        {filteredPackages.map((pkg) => {
          const currentPrice = pkg.tierPricing[selectedTier] || pkg.basePrice;
          return (
            <div
              key={pkg.id}
              className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] text-[#0e3022] font-bold uppercase tracking-wider">
                    {pkg.country} • {pkg.category}
                  </span>
                  <h3
                    onClick={() => onSelectPackage(pkg)}
                    className="font-serif text-base font-bold text-slate-900 mt-0.5 cursor-pointer"
                  >
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Clock size={12} className="text-[#0e3022]" />
                    <span>{pkg.durationLabel}</span>
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] uppercase text-slate-400 font-semibold">
                    {selectedTier} Tier
                  </span>
                  <div className="text-lg font-bold font-mono text-[#0e3022] tabular-nums">
                    ${currentPrice.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Tier Comparison Row */}
              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block">Budget</span>
                  <span className="font-mono font-bold text-slate-800 tabular-nums">
                    ${pkg.tierPricing.budget.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Mid-Range</span>
                  <span className="font-mono font-bold text-[#0e3022] tabular-nums">
                    ${pkg.tierPricing.midrange.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Luxury</span>
                  <span className="font-mono font-bold text-slate-800 tabular-nums">
                    ${pkg.tierPricing.luxury.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-2">
                <DualBookNow
                  packageItem={pkg}
                  size="sm"
                  className="w-full justify-between"
                  onOpenBookingModal={onOpenBooking}
                />
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full py-2 text-xs text-[#0e3022] hover:underline text-center cursor-pointer font-semibold"
                >
                  View Day-by-Day Itinerary & Inclusions →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
