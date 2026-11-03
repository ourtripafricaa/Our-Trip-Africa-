import React, { useState } from 'react';
import { X, Clock, MapPin, Star, CheckCircle2, XCircle, Calendar, Users, ShieldCheck, Heart, Share2, Compass, BedDouble } from 'lucide-react';
import { SafariPackage } from '../data/safariData';
import { DualBookNow } from './DualBookNow';

interface PackageModalProps {
  packageItem: SafariPackage | null;
  onClose: () => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  packageItem,
  onClose,
  onOpenBooking,
}) => {
  if (!packageItem) return null;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'accommodation'>('itinerary');
  const [selectedTier, setSelectedTier] = useState<'budget' | 'midrange' | 'luxury'>('midrange');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = packageItem.gallery.length > 0 ? packageItem.gallery : [packageItem.heroImage];
  const currentPrice = packageItem.tierPricing[selectedTier] || packageItem.basePrice;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#092218] border border-[#c5a059]/40 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-[#081a13]/95 backdrop-blur-md border-b border-[#1a4a35] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] bg-[#0e3022] px-3 py-1 rounded-full border border-[#c5a059]/30">
              {packageItem.country} • {packageItem.category}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#a49a88]">
              <Clock size={13} className="text-[#c5a059]" />
              <span>{packageItem.durationLabel}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-[#dcd4c7] hover:text-white bg-[#0e3022] hover:bg-[#1a4a35] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Hero Section of Package */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Column */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#05130e] border border-[#1a4a35]">
                <img
                  src={images[activeImageIndex] || packageItem.heroImage}
                  alt={packageItem.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#081a13]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[#c5a059] font-medium border border-[#c5a059]/30">
                  {packageItem.destination}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-16 w-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#c5a059] scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Details & Pricing Box */}
            <div className="lg:col-span-5 bg-[#0e2c20] p-6 rounded-2xl border border-[#1a4a35] space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#c5a059] mb-1 font-medium">
                  <Star size={13} className="fill-[#c5a059]" />
                  <span>{packageItem.rating.toFixed(2)} Rating</span>
                  <span className="text-[#a49a88]">({packageItem.reviewsCount} verified reviews)</span>
                </div>
                <h1 className="font-serif text-2xl font-bold text-[#faf7f2] leading-snug">
                  {packageItem.title}
                </h1>
                <p className="text-xs text-[#dcd4c7] mt-2 flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#c5a059] shrink-0" />
                  <span>{packageItem.destination}</span>
                </p>
              </div>

              {/* Tier Selection */}
              <div className="space-y-2 pt-2 border-t border-[#1a4a35]">
                <label className="text-xs font-semibold text-[#faf7f2] block">
                  Select Comfort Tier:
                </label>
                <div className="grid grid-cols-3 gap-1.5 bg-[#081a13] p-1.5 rounded-xl border border-[#1a4a35]">
                  <button
                    type="button"
                    onClick={() => setSelectedTier('budget')}
                    className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      selectedTier === 'budget'
                        ? 'bg-[#1a4a35] text-[#c5a059] font-bold shadow-sm'
                        : 'text-[#a49a88] hover:text-white'
                    }`}
                  >
                    Budget
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTier('midrange')}
                    className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      selectedTier === 'midrange'
                        ? 'bg-[#1a4a35] text-[#c5a059] font-bold shadow-sm'
                        : 'text-[#a49a88] hover:text-white'
                    }`}
                  >
                    Mid-Range
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTier('luxury')}
                    className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      selectedTier === 'luxury'
                        ? 'bg-[#1a4a35] text-[#c5a059] font-bold shadow-sm'
                        : 'text-[#a49a88] hover:text-white'
                    }`}
                  >
                    Luxury
                  </button>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-[#081a13] p-4 rounded-xl border border-[#1a4a35]">
                <span className="text-[11px] uppercase tracking-wider text-[#a49a88] block">
                  {selectedTier.toUpperCase()} TIER RATE
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-bold font-serif text-[#faf7f2] font-mono tabular-nums">
                    ${currentPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#a49a88]">/ person</span>
                </div>
                <p className="text-[11px] text-[#c5a059] mt-1.5">
                  Includes private 4x4 Land Cruiser, guides, park permits & meals
                </p>
              </div>

              {/* Dual BOOK NOW Actions */}
              <div className="space-y-3 pt-2">
                <p className="text-xs text-[#faf7f2] font-medium">Instant Booking & Inquiries:</p>
                <DualBookNow
                  packageItem={packageItem}
                  size="md"
                  className="w-full flex-col sm:flex-row"
                  onOpenBookingModal={() => {
                    onClose();
                    onOpenBooking(packageItem);
                  }}
                />
              </div>

              <div className="pt-2 text-xs text-[#a49a88] space-y-1.5 border-t border-[#1a4a35]">
                <p className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#c5a059]" />
                  <span>Free date modification up to 30 days before safari</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Users size={14} className="text-[#c5a059]" />
                  <span>Private safari vehicle for you and your travel companions</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-[#1a4a35] flex items-center gap-4">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`py-3 text-sm font-semibold transition-colors border-b-2 cursor-pointer ${
                activeTab === 'itinerary'
                  ? 'border-[#c5a059] text-[#c5a059]'
                  : 'border-transparent text-[#a49a88] hover:text-white'
              }`}
            >
              Day-by-Day Itinerary ({packageItem.itinerary.length} Days)
            </button>
            <button
              onClick={() => setActiveTab('inclusions')}
              className={`py-3 text-sm font-semibold transition-colors border-b-2 cursor-pointer ${
                activeTab === 'inclusions'
                  ? 'border-[#c5a059] text-[#c5a059]'
                  : 'border-transparent text-[#a49a88] hover:text-white'
              }`}
            >
              Inclusions & Exclusions
            </button>
            <button
              onClick={() => setActiveTab('accommodation')}
              className={`py-3 text-sm font-semibold transition-colors border-b-2 cursor-pointer ${
                activeTab === 'accommodation'
                  ? 'border-[#c5a059] text-[#c5a059]'
                  : 'border-transparent text-[#a49a88] hover:text-white'
              }`}
            >
              Tier Accommodations
            </button>
          </div>

          {/* Tab 1: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <div className="bg-[#0e2c20] p-5 rounded-2xl border border-[#1a4a35]">
                <h4 className="font-serif text-lg font-bold text-white mb-2">Expedition Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#dcd4c7]">
                  {packageItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-white">Full Detailed Itinerary</h4>
                {packageItem.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="p-5 rounded-2xl bg-[#0e2c20] border border-[#1a4a35] space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-[#1a4a35] text-[#c5a059] font-bold text-xs flex items-center justify-center shrink-0">
                          {day.day}
                        </span>
                        <h5 className="font-serif text-base font-bold text-white">
                          Day {day.day}: {day.title}
                        </h5>
                      </div>
                      {day.meals && (
                        <span className="text-xs text-[#c5a059] bg-[#081a13] px-2.5 py-1 rounded-md border border-[#1a4a35]">
                          Meals: {day.meals}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#dcd4c7] leading-relaxed pl-10">
                      {day.description}
                    </p>

                    {day.accommodation && (
                      <p className="text-xs text-[#a49a88] pl-10 flex items-center gap-1.5">
                        <BedDouble size={13} className="text-[#c5a059]" />
                        <span>Stay: {day.accommodation}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="bg-[#0e2c20] p-6 rounded-2xl border border-[#1a4a35] space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#faf7f2] flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#25D366]" />
                  <span>What’s Included</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#dcd4c7]">
                  {packageItem.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-[#0e2c20] p-6 rounded-2xl border border-[#1a4a35] space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#faf7f2] flex items-center gap-2">
                  <XCircle size={18} className="text-[#ef4444]" />
                  <span>What’s Excluded</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#a49a88]">
                  {packageItem.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <XCircle size={15} className="text-[#ef4444] shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Tier Accommodations */}
          {activeTab === 'accommodation' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Budget */}
                <div
                  onClick={() => setSelectedTier('budget')}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedTier === 'budget'
                      ? 'bg-[#123829] border-[#c5a059] shadow-lg'
                      : 'bg-[#0e2c20] border-[#1a4a35]'
                  }`}
                >
                  <span className="text-xs uppercase font-bold text-[#c5a059]">Option A</span>
                  <h4 className="font-serif text-xl font-bold text-white mt-1">Budget Camping</h4>
                  <div className="text-2xl font-bold font-mono text-[#faf7f2] my-2">
                    ${packageItem.tierPricing.budget.toLocaleString()} <span className="text-xs text-[#a49a88]">/ person</span>
                  </div>
                  <ul className="text-xs text-[#dcd4c7] space-y-2 mt-4">
                    <li>• Quality 2-person waterproof dome tents</li>
                    <li>• High-density foam mattresses provided</li>
                    <li>• Private camp cook preparing 3 hot meals</li>
                    <li>• Fall asleep to the sounds of the African wilderness</li>
                  </ul>
                </div>

                {/* Mid-Range */}
                <div
                  onClick={() => setSelectedTier('midrange')}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedTier === 'midrange'
                      ? 'bg-[#123829] border-[#c5a059] shadow-lg ring-1 ring-[#c5a059]'
                      : 'bg-[#0e2c20] border-[#1a4a35]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-[#c5a059]">Option B (Most Popular)</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white mt-1">Mid-Range Lodges</h4>
                  <div className="text-2xl font-bold font-mono text-[#c5a059] my-2">
                    ${packageItem.tierPricing.midrange.toLocaleString()} <span className="text-xs text-[#a49a88]">/ person</span>
                  </div>
                  <ul className="text-xs text-[#dcd4c7] space-y-2 mt-4">
                    <li>• Comfortable permanent safari lodges & tented camps</li>
                    <li>• En-suite bathrooms with hot running water</li>
                    <li>• Swimming pools and lounge viewing decks</li>
                    <li>• Buffet & à la carte gourmet lodge meals</li>
                  </ul>
                </div>

                {/* Luxury */}
                <div
                  onClick={() => setSelectedTier('luxury')}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedTier === 'luxury'
                      ? 'bg-[#123829] border-[#c5a059] shadow-lg'
                      : 'bg-[#0e2c20] border-[#1a4a35]'
                  }`}
                >
                  <span className="text-xs uppercase font-bold text-[#c5a059]">Option C</span>
                  <h4 className="font-serif text-xl font-bold text-white mt-1">Luxury Tented Suites</h4>
                  <div className="text-2xl font-bold font-mono text-[#faf7f2] my-2">
                    ${packageItem.tierPricing.luxury.toLocaleString()} <span className="text-xs text-[#a49a88]">/ person</span>
                  </div>
                  <ul className="text-xs text-[#dcd4c7] space-y-2 mt-4">
                    <li>• 5-star opulent canvas suites in exclusive concessions</li>
                    <li>• Private plunge pools, soaking tubs & butler service</li>
                    <li>• Fine dining accompanied by vintage wines</li>
                    <li>• Fly-in bush airstrip options available</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="sticky bottom-0 z-20 bg-[#081a13]/95 backdrop-blur-md border-t border-[#1a4a35] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-[#a49a88]">
            <span>Selected Tier: <strong className="text-white capitalize">{selectedTier}</strong></span>
            <span>•</span>
            <span className="text-lg font-bold font-mono text-[#c5a059]">
              ${currentPrice.toLocaleString()} <span className="text-xs font-normal text-[#a49a88]">/ person</span>
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <DualBookNow
              packageItem={packageItem}
              size="md"
              className="w-full sm:w-auto justify-end"
              onOpenBookingModal={() => {
                onClose();
                onOpenBooking(packageItem);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
