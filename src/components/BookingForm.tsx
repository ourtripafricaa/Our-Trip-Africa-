import React, { useState } from 'react';
import { X, Calendar, Users, Mail, Phone, MapPin, ShieldCheck, CheckCircle2, MessageSquare, CreditCard, Lock, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS, SAFARI_PACKAGES, SafariPackage } from '../data/safariData';

interface BookingFormProps {
  initialPackage?: SafariPackage | null;
  onClose: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialPackage,
  onClose,
}) => {
  const [selectedPackageSlug, setSelectedPackageSlug] = useState<string>(
    initialPackage ? initialPackage.slug : SAFARI_PACKAGES[0].slug
  );
  const [selectedTier, setSelectedTier] = useState<'budget' | 'midrange' | 'luxury'>('midrange');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const currentPkg = SAFARI_PACKAGES.find((p) => p.slug === selectedPackageSlug) || SAFARI_PACKAGES[0];
  const unitPrice = currentPkg.tierPricing[selectedTier] || currentPkg.basePrice;
  const estimatedTotal = unitPrice * adults + (unitPrice * 0.7 * children);

  const [submitError, setSubmitError] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    if (!form.reportValidity()) return;
    if (adults + children > 30) {
      window.alert('The maximum group size is 30 travellers, including adults and children.');
      return;
    }

    const recipients = 'info@ourtripafrica.com,ourtripafricaa@gmail.com';
    const subject = `New booking enquiry - ${currentPkg.title}`;
    const body = [
      'NEW BOOKING ENQUIRY - OUR TRIP AFRICA',
      '',
      `Package: ${currentPkg.title}`,
      `Destination: ${currentPkg.destination}`,
      `Accommodation: ${selectedTier.toUpperCase()}`,
      `Price per adult: ${unitPrice} USD`,
      `Estimated total: ${Math.round(estimatedTotal)} USD`,
      `Travel date: ${travelDate || 'Flexible'}`,
      `Travellers: ${adults} adults, ${children} children`,
      '',
      'GUEST DETAILS',
      `Full name: ${fullName.trim()}`,
      `Guest email: ${email.trim()}`,
      `WhatsApp / phone: ${phone.trim() || 'Not provided'}`,
      `Country: ${country.trim() || 'Not provided'}`,
      `Special requests: ${specialRequests.trim() || 'None'}`,
      '',
      'Please contact the guest to confirm availability and provide a quotation.'
    ].join('\\n');

    window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSendToWhatsApp = () => {
    const text = `Hi Our Trip Africa! I would like to book a safari expedition:\n\n` +
      `• Package: ${currentPkg.title}\n` +
      `• Tier: ${selectedTier.toUpperCase()} (${unitPrice} USD/person)\n` +
      `• Travel Date: ${travelDate || 'Flexible / In Discussion'}\n` +
      `• Group: ${adults} Adults, ${children} Children\n` +
      `• Estimated Total: ~$${Math.round(estimatedTotal).toLocaleString()} USD\n` +
      `• Name: ${fullName || 'Guest'}\n` +
      `• Email: ${email || 'Provided in chat'}\n` +
      `• Country: ${country || 'International'}\n` +
      `• Special Requests: ${specialRequests || 'None'}\n\n` +
      `Please confirm lodge availability and send pro-forma booking voucher. Asante!`;

    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#092218] border border-[#c5a059]/40 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#081a13]/95 backdrop-blur-md border-b border-[#1a4a35] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#1a4a35] text-[#c5a059] flex items-center justify-center">
              <Sparkles size={16} />
            </span>
            <div>
              <h2 className="font-serif text-lg font-bold text-white">
                Book Your Safari with Our Trip Africa
              </h2>
              <p className="text-[11px] text-[#c5a059]">Direct Booking & Tailor-Made Expeditions Desk</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close form"
            className="p-1.5 rounded-full text-[#a49a88] hover:text-white hover:bg-[#1a4a35] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border-2 border-[#25D366]">
                <CheckCircle2 size={36} />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider">
                  Enquiry Received • Reference: {bookingRef}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Asante Sana, {fullName}!
                </h3>
                <p className="text-sm text-[#dcd4c7] max-w-lg mx-auto">
                  Our Founder and Owner <strong className="text-[#c5a059]">Mr. James Felix</strong> and the Arusha planning team have received your request for{' '}
                  <strong className="text-white">{currentPkg.title}</strong>. We will review park availability and send your detailed customized quotation and day-by-day confirmation to <strong className="text-[#c5a059]">{email}</strong> within 4 hours.
                </p>
              </div>

              {/* Instant WhatsApp Follow-up */}
              <div className="p-6 rounded-2xl bg-[#0e271e] border border-[#1a4a35] max-w-md mx-auto space-y-3">
                <p className="text-xs text-[#faf7f2] font-semibold">
                  Want an instant reply right now?
                </p>
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1faa4f] text-white font-bold flex items-center justify-center gap-2 text-sm shadow cursor-pointer transition-colors"
                >
                  <MessageSquare size={16} />
                  <span>Send Request to WhatsApp (+255624661830)</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#1a4a35] text-white text-xs font-semibold hover:bg-[#236347] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitEmail} className="space-y-6">
              {/* Package & Tier Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    Selected Safari Package:
                  </label>
                  <select
                    value={selectedPackageSlug}
                    onChange={(e) => setSelectedPackageSlug(e.target.value)}
                    className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-3 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                  >
                    {SAFARI_PACKAGES.map((pkg) => (
                      <option key={pkg.slug} value={pkg.slug}>
                        {pkg.title} ({pkg.country} - {pkg.durationLabel})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    Accommodation Tier:
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-[#081a13] p-1 rounded-xl border border-[#1a4a35]">
                    <button
                      type="button"
                      onClick={() => setSelectedTier('budget')}
                      className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                        selectedTier === 'budget'
                          ? 'bg-[#1a4a35] text-[#c5a059] font-bold shadow-sm'
                          : 'text-[#a49a88] hover:text-white'
                      }`}
                    >
                      Budget (${currentPkg.tierPricing.budget})
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
                      Mid-Range (${currentPkg.tierPricing.midrange})
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
                      Luxury (${currentPkg.tierPricing.luxury})
                    </button>
                  </div>
                </div>
              </div>

              {/* Travel Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    Preferred Date / Month:
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-2.5 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    Adults (12+ yrs):
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={30 - children}
                    value={adults}
                    onChange={(e) => {
                      const nextAdults = Math.max(1, parseInt(e.target.value) || 1);
                      setAdults(Math.min(nextAdults, 30 - children));
                    }}
                    className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-2.5 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    Children (under 12):
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={30 - adults}
                    value={children}
                    onChange={(e) => {
                      const nextChildren = Math.max(0, parseInt(e.target.value) || 0);
                      setChildren(Math.min(nextChildren, 30 - adults));
                    }}
                    className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-2.5 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <p className="text-[11px] text-[#c5a059] -mt-4">Maximum group size: 30 travellers in total, including adults and children.</p>

              {/* Guest Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    Your Full Name: <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-2.5 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    Email Address: <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@example.com"
                    className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-2.5 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    WhatsApp / Phone Number:
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +44 7911 123456"
                    className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-2.5 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#dcd4c7]">
                    Country of Residence:
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom, USA, Germany"
                    className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-2.5 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#dcd4c7]">
                  Special Wishes or Dietary Requests:
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Vegetarian meals, honeymoon surprise, specific photo requests, flight arrival times..."
                  className="w-full bg-[#081a13] text-white text-xs rounded-xl px-3.5 py-2.5 border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              {/* Estimated Pricing Card */}
              <div className="p-4 rounded-2xl bg-[#081a13] border border-[#1a4a35] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-[#a49a88] uppercase tracking-wider block">
                    Estimated Package Total ({adults} Adults{children > 0 ? `, ${children} Children` : ''})
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-bold font-mono text-[#c5a059] tabular-nums">
                      ${Math.round(estimatedTotal).toLocaleString()} USD
                    </span>
                    <span className="text-xs text-[#a49a88]">
                      (${unitPrice.toLocaleString()} / adult)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#a49a88]">
                  <ShieldCheck size={16} className="text-[#c5a059]" />
                  <span>30% Deposit to secure park permits & lodges</span>
                </div>
              </div>

              {submitError && (
                <p role="alert" className="rounded-xl border border-red-400/40 bg-red-950/40 p-3 text-xs text-red-200">{submitError}</p>
              )}

              {/* Dual Booking Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1faa4f] text-white font-bold flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer transition-colors"
                >
                  <MessageSquare size={16} />
                  <span>BOOK NOW (WhatsApp)</span>
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full sm:flex-1 disabled:opacity-60 py-3 px-4 rounded-xl bg-[#c5a059] hover:bg-[#d6b36d] text-[#081a13] font-bold flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer transition-colors"
                >
                  <Mail size={16} />
                  <span>{saving ? 'SAVING REQUEST...' : 'SEND BOOKING REQUEST'}</span>
                </button>
              </div>

              {/* Secure Payment Gateway Information */}
              <div className="pt-4 border-t border-[#1a4a35] space-y-2 text-xs text-[#a49a88]">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Lock size={13} className="text-[#c5a059]" />
                  <span>Booking Request & Payment Safety:</span>
                </div>
                <p className="leading-relaxed">
                  Submitting this form sends a booking enquiry only; no payment is taken on this website. Our team will confirm availability, the final quotation, payment instructions and booking terms with you before any deposit is requested.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
