import React, { useState } from 'react';
import { Star, Clock, MapPin, Eye, ShieldCheck, Check } from 'lucide-react';
import { SafariPackage } from '../data/safariData';
import { DualBookNow } from './DualBookNow';

interface PackageCardProps {
  packageItem: SafariPackage;
  onSelect: (pkg: SafariPackage) => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  packageItem,
  onSelect,
  onOpenBooking,
}) => {
  const [selectedTier, setSelectedTier] = useState<'budget' | 'midrange'>('budget');
  const [imgError, setImgError] = useState(false);

  const currentPrice = packageItem.tierPricing[selectedTier] || packageItem.basePrice;
  const createdAtValue = packageItem.createdAt as any;
  const createdAtDate = createdAtValue?.toDate
    ? createdAtValue.toDate()
    : createdAtValue
      ? new Date(createdAtValue)
      : null;
  const isNewPackage = !!createdAtDate &&
    !Number.isNaN(createdAtDate.getTime()) &&
    Date.now() - createdAtDate.getTime() >= 0 &&
    Date.now() - createdAtDate.getTime() <= 14 * 24 * 60 * 60 * 1000;
  return (
    <article className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col hover:border-[#c5a059] hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        {!imgError ? (
          <img
            src={packageItem.heroImage}
            alt={packageItem.title}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0e3022] to-[#081a13] text-[#c5a059] p-4 text-center">
            <MapPin size={32} className="mb-2 opacity-80" />
            <span className="font-serif font-bold text-sm text-white">{packageItem.title}</span>
            <span className="text-xs text-slate-300 mt-1">{packageItem.destination}</span>
          </div>
        )}

        {/* Top Floating Info Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="bg-[#0e3022]/90 backdrop-blur-md text-[#c5a059] text-xs font-semibold px-3 py-1 rounded-full border border-[#c5a059]/40 shadow-sm">
            {packageItem.country}
          </span>
          <span className="bg-white/95 backdrop-blur-md text-slate-900 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 border border-slate-200 shadow-sm">
            <Star size={12} className="text-[#c5a059] fill-[#c5a059]" />
            <span className="font-mono tabular-nums font-semibold">{packageItem.rating.toFixed(2)}</span>
            <span className="text-slate-400">({packageItem.reviewsCount})</span>
          </span>
        </div>

        {/* NEW badge for packages added within the last 14 days */}
        {isNewPackage && (
          <div className="absolute bottom-4 left-3 z-10">
            <span className="relative inline-flex items-center gap-1.5 rounded-full border border-[#f2d18b] bg-[#c5a059] px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-[#0e3022] shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0e3022] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0e3022]"></span>
              </span>
              NEW
            </span>
          </div>
        )}

        {/* Bottom subtle gradient */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata Line */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1 text-[#0e3022] font-semibold">
              <Clock size={13} className="text-[#c5a059]" />
              <span>{packageItem.durationLabel}</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">{packageItem.category}</span>
            <span aria-hidden="true" className="text-slate-300">•</span>
            <span className="text-slate-500">Physical: {packageItem.physicalRating}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(packageItem)}
            className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0e3022] transition-colors cursor-pointer line-clamp-2"
          >
            {packageItem.title}
          </h3>

          {/* Destination */}
          <p className="text-xs text-[#0e3022] font-medium mt-1.5 flex items-center gap-1">
            <MapPin size={12} className="text-[#c5a059] shrink-0" />
            <span className="truncate">{packageItem.destination}</span>
          </p>

          <a
            href={`/packages/${packageItem.slug}/`}
            className="inline-flex items-center justify-center gap-2 mt-3 px-4 py-2.5 rounded-xl bg-[#0e3022] text-white text-xs font-bold border border-[#c5a059]/70 shadow-sm hover:bg-[#174b35] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            aria-label={`View dedicated package page for ${packageItem.title}`}
          >
            <Eye size={14} className="text-[#e5c07b]" />
            <span>View Dedicated Package</span>
          </a>

          {/* Overview text */}
          <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
            {packageItem.seoDescription || packageItem.overview}
          </p>

          {/* Tier Pricing Selector Switcher */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-500 font-medium">Safari Tier:</span>
              <span className="text-xs text-[#0e3022] font-bold capitalize">
                {selectedTier} Tier
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedTier('budget')}
                className={`py-1 text-[11px] font-medium rounded-lg transition-all cursor-pointer ${
                  selectedTier === 'budget'
                    ? 'bg-[#0e3022] text-white font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Budget
              </button>
              <button
                type="button"
                onClick={() => setSelectedTier('midrange')}
                className={`py-1 text-[11px] font-medium rounded-lg transition-all cursor-pointer ${
                  selectedTier === 'midrange'
                    ? 'bg-[#0e3022] text-white font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mid-Range
              </button>
            </div>
          </div>
        </div>

        {/* Price & Action Area */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold font-serif text-[#0e3022] font-mono tabular-nums">
                  ${currentPrice.toLocaleString()}
                </span>
                <span className="text-[11px] text-slate-500">/ person</span>
              </div>
            </div>

            <button
              onClick={() => onSelect(packageItem)}
              className="text-xs text-[#c5a059] hover:text-[#0e3022] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Full Itinerary</span>
              <Eye size={13} />
            </button>
          </div>

          {/* Dual BOOK NOW Buttons */}
          <DualBookNow
            packageItem={packageItem}
            size="sm"
            className="w-full justify-between"
            onOpenBookingModal={onOpenBooking}
          />
        </div>
      </div>
    </article>
  );
};
