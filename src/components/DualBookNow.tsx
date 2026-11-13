import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { COMPANY_DETAILS, SafariPackage } from '../data/safariData';

interface DualBookNowProps {
  packageItem?: SafariPackage;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DualBookNow: React.FC<DualBookNowProps> = ({
  packageItem,
  size = 'md',
  className = '',
}) => {
  const packageName = packageItem ? packageItem.title : 'African Safari';
  const packagePrice = packageItem ? `$${packageItem.basePrice} per person` : '';

  const encodedWhatsAppMsg = encodeURIComponent(
    `Hi Our Trip Africa! I am interested in booking or enquiring about: "${packageName}"${
      packagePrice ? ` (${packagePrice})` : ''
    }. Please share full availability, dates, and tailor-made quote details. Asante sana!`
  );

  const whatsappHref = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodedWhatsAppMsg}`;

  const mailSubject = encodeURIComponent(`Booking Enquiry: ${packageName} - Our Trip Africa`);
  const mailBody = encodeURIComponent(
    `Hello Our Trip Africa team,\n\nI am interested in ${packageName}${packagePrice ? ` (${packagePrice})` : ''}. Please contact me with availability, itinerary and booking details.\n\nThank you.`
  );
  // Use one primary recipient and a separate CC for better compatibility with mobile email apps.
  const mailtoHref = `mailto:info@ourtripafrica.com?cc=ourtripafricaa@gmail.com&subject=${mailSubject}&body=${mailBody}`;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* 1. WhatsApp BOOK NOW Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Book ${packageName} via WhatsApp`}
        className={`inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#25D366] hover:bg-[#1faa4f] active:bg-[#188c40] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 group ${sizeClasses[size]}`}
      >
        <MessageSquare size={iconSizes[size]} className="transition-transform group-hover:scale-110" />
        <span>BOOK NOW (WhatsApp)</span>
      </a>

      {/* 2. Direct Email BOOK NOW Button */}
      <a
        href={mailtoHref}
        aria-label={`Book ${packageName} via Email`}
        className={`inline-flex items-center justify-center gap-2 font-semibold text-[#081a13] bg-[#c5a059] hover:bg-[#d6b36d] active:bg-[#b08b46] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 group ${sizeClasses[size]}`}
      >
        <Mail size={iconSizes[size]} className="transition-transform group-hover:scale-110 text-[#081a13]" />
        <span>BOOK NOW (Email)</span>
      </a>
    </div>
  );
};
