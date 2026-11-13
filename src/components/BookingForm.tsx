import React from 'react';
import { X, Mail, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS, SAFARI_PACKAGES, SafariPackage } from '../data/safariData';

interface BookingFormProps {
  initialPackage?: SafariPackage | null;
  onClose: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialPackage, onClose }) => {
  const currentPackage = initialPackage || SAFARI_PACKAGES[0];

  const emailSubject = `Safari booking enquiry - ${currentPackage.title}`;
  const emailBody = [
    'Hello Our Trip Africa team,',
    '',
    'I am interested in booking the following safari package:',
    `Package: ${currentPackage.title}`,
    `Destination: ${currentPackage.destination}`,
    '',
    'Please share availability, the full itinerary, pricing and booking instructions.',
    '',
    '',
    'Thank you.'
  ].join('\n');
  const emailLink = `mailto:info@ourtripafrica.com?cc=ourtripafricaa@gmail.com&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const whatsappMessage = [
    'Hello Our Trip Africa team! I would like to enquire about booking:',
    `Package: ${currentPackage.title}`,
    `Destination: ${currentPackage.destination}`,
    '',
    'Please share availability, itinerary, pricing and booking instructions.',
    'My name:',
    'Preferred travel date:',
    'Number of travellers:'
  ].join('\n');
  const whatsappLink = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md">
      <div className="relative my-6 w-full max-w-xl overflow-hidden rounded-3xl border border-[#c5a059]/40 bg-[#092218] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#1a4a35] bg-[#081a13]/95 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a4a35] text-[#c5a059]">
              <Sparkles size={17} />
            </span>
            <div>
              <h2 className="font-serif text-lg font-bold text-white">Book Your Safari</h2>
              <p className="text-xs text-[#c5a059]">Contact Our Trip Africa directly</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close booking options" className="rounded-full p-2 text-[#a49a88] transition-colors hover:bg-[#1a4a35] hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div className="rounded-2xl border border-[#1a4a35] bg-[#081a13] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">Selected package</p>
            <h3 className="mt-1 text-lg font-bold text-white">{currentPackage.title}</h3>
            <p className="mt-1 text-sm text-[#dcd4c7]">{currentPackage.destination}</p>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-white">How would you like to contact us?</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#dcd4c7]">
              No booking form is needed. Choose email or WhatsApp and send your enquiry directly to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={emailLink}
              className="flex min-h-16 items-center justify-center gap-3 rounded-xl bg-[#c5a059] px-4 py-4 text-center text-sm font-bold text-[#081a13] shadow-md transition-colors hover:bg-[#d6b36d]"
            >
              <Mail size={20} />
              <span>EMAIL OUR TEAM</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-16 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-4 py-4 text-center text-sm font-bold text-white shadow-md transition-colors hover:bg-[#1faa4f]"
            >
              <MessageSquare size={20} />
              <span>BOOK VIA WHATSAPP</span>
            </a>
          </div>

          <div className="flex items-start gap-2 border-t border-[#1a4a35] pt-4 text-xs leading-relaxed text-[#a49a88]">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#c5a059]" />
            <p>Email opens your device's email app with an enquiry prepared for you. WhatsApp opens a direct chat with our reservation team. Your booking is confirmed only after our team contacts you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
