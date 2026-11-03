import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown, LayoutGrid, Table, SlidersHorizontal, Sparkles } from 'lucide-react';
import { SAFARI_PACKAGES, SafariPackage } from '../data/safariData';
import { PackageCard } from '../components/PackageCard';
import { PackageComparison } from '../components/PackageComparison';

interface PackagesViewProps {
  initialFilter?: string;
  onSelectPackage: (pkg: SafariPackage) => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({
  initialFilter,
  onSelectPackage,
  onOpenBooking,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>(initialFilter || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhysical, setSelectedPhysical] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'comparison'>('grid');

  const filteredPackages = SAFARI_PACKAGES.filter((pkg) => {
    // Search
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      const match =
        pkg.title.toLowerCase().includes(term) ||
        pkg.destination.toLowerCase().includes(term) ||
        pkg.overview.toLowerCase().includes(term) ||
        pkg.highlights.some((h) => h.toLowerCase().includes(term));
      if (!match) return false;
    }

    // Country
    if (selectedCountry !== 'all') {
      if (pkg.country.toLowerCase() !== selectedCountry.toLowerCase()) return false;
    }

    // Category
    if (selectedCategory !== 'all') {
      if (pkg.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    }

    // Physical
    if (selectedPhysical !== 'all') {
      if (pkg.physicalRating.toLowerCase() !== selectedPhysical.toLowerCase()) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.basePrice - b.basePrice;
    if (sortBy === 'price-desc') return b.basePrice - a.basePrice;
    if (sortBy === 'duration') return a.durationDays - b.durationDays;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#faf9f5]">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
            Complete Safari & Holiday Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
            All Safari & Holiday Packages ({SAFARI_PACKAGES.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Browse all verified circuits from our Flyo catalog across Tanzania, Kenya, Uganda, Zanzibar, South Africa, and UAE with transparent pricing.
          </p>
        </div>

        {/* View Mode Toggle: Grid vs Comparison */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm shrink-0">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#0e3022] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LayoutGrid size={14} />
            <span>Cards Grid</span>
          </button>
          <button
            onClick={() => setViewMode('comparison')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'comparison'
                ? 'bg-[#0e3022] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Table size={14} />
            <span>Price Comparison</span>
          </button>
        </div>
      </div>

      {viewMode === 'comparison' ? (
        <PackageComparison
          onSelectPackage={onSelectPackage}
          onOpenBooking={onOpenBooking}
        />
      ) : (
        <>
          {/* Filter & Search Bar */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Search Input */}
              <div className="relative">
                <Search size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search parks, migration, gorillas..."
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl pl-9 pr-3 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                />
              </div>

              {/* Destination Filter */}
              <div>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                >
                  <option value="all">All Destinations</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Kenya">Kenya (3 Packages)</option>
                  <option value="Uganda">Uganda (2 Packages)</option>
                  <option value="Zanzibar">Zanzibar Island</option>
                  <option value="South Africa">South Africa (3 Packages)</option>
                  <option value="UAE">UAE (2 Packages)</option>
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                >
                  <option value="all">All Categories</option>
                  <option value="Wildlife Safari">Wildlife Safari</option>
                  <option value="Mountain Trek">Mountain Trek (Kilimanjaro)</option>
                  <option value="Beach Holiday">Beach Holiday (Zanzibar)</option>
                  <option value="Cultural Safari">Cultural Safari</option>
                  <option value="Grand Circuit">Grand Circuit (8–14 Days)</option>
                  <option value="City & Desert Tour">City & Desert Tour (UAE)</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration">Duration (Days)</option>
                </select>
              </div>
            </div>

            {/* Quick Filter Counts */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span>
                Showing <strong className="text-slate-900">{filteredPackages.length}</strong> of{' '}
                <strong className="text-slate-900">{SAFARI_PACKAGES.length}</strong> packages
              </span>
              {(searchTerm || selectedCountry !== 'all' || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCountry('all');
                    setSelectedCategory('all');
                    setSelectedPhysical('all');
                  }}
                  className="text-[#0e3022] font-semibold hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  packageItem={pkg}
                  onSelect={onSelectPackage}
                  onOpenBooking={onOpenBooking}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-4">
              <p className="text-slate-600 text-sm">
                No packages matched your filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCountry('all');
                  setSelectedCategory('all');
                  setSelectedPhysical('all');
                }}
                className="px-4 py-2 rounded-xl bg-[#0e3022] text-white text-xs font-semibold cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
