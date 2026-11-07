import React, { useState } from 'react';
import { ShieldCheck, HeartHandshake, Compass, Users, CheckCircle2, MapPin, Award, Star, Mail, MessageSquare, Sparkles, Phone, Globe, ChevronDown, Download } from 'lucide-react';
import { COMPANY_DETAILS, LOCAL_IMAGES, SAFARI_FAQS, PACKING_TIPS } from '../data/safariData';
import { DualBookNow } from '../components/DualBookNow';

interface AboutViewProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const downloadPackingList = () => {
    const text = PACKING_TIPS.map(tip => `${tip.category}:\n${tip.items.map(item => `- ${item}`).join('\n')}\n`).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Our_Trip_Africa_Packing_List.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#faf9f5]">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e3022]/10 border border-[#0e3022]/20 text-[#0e3022] text-xs font-semibold uppercase tracking-widest">
          <Sparkles size={13} className="text-[#c5a059]" />
          <span>Local Tanzanian Tour Operator • Kisongo, Arusha</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          About Our Trip Africa
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Born at the foothills of Mount Kilimanjaro and headquartered in Arusha, Tanzania. We specialize in private, unforgettable wildlife safaris, Kilimanjaro climbs, and Zanzibar beach escapes across East Africa and beyond.
        </p>
      </div>

      {/* MEET MR. JAMES FELIX – DIRECTOR & FOUNDER */}
      <section className="bg-[#0e3022] rounded-3xl p-8 sm:p-12 border border-[#1b4d38] shadow-xl text-white grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Photo Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#c5a059] to-[#25D366] rounded-3xl opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />
            <img
              src={COMPANY_DETAILS.director.photo}
              alt="Mr. James Felix - Founder and Owner of Our Trip Africa"
              className="relative w-full h-[460px] rounded-2xl object-cover shadow-2xl border-2 border-[#c5a059]/70"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#061d14]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#c5a059]/40 text-center shadow-lg">
              <span className="text-sm font-serif font-bold text-white block">
                {COMPANY_DETAILS.director.name}
              </span>
              <span className="text-xs text-[#c5a059] font-medium block">
                {COMPANY_DETAILS.director.title}
              </span>
              <span className="inline-block mt-1 text-[11px] bg-[#c5a059]/20 text-[#e5c07b] px-2.5 py-0.5 rounded-full font-mono">
                {COMPANY_DETAILS.director.experience} Industry Experience
              </span>
            </div>
          </div>
        </div>

        {/* Narrative & Vision Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              Leadership & Authentic Story
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Meet Mr. James Felix
            </h2>
          </div>

          <blockquote className="font-serif italic text-base sm:text-lg text-slate-100 border-l-4 border-[#c5a059] pl-4 py-1 leading-relaxed bg-[#061d14]/50 rounded-r-xl">
            "{COMPANY_DETAILS.director.quote}"
          </blockquote>

          <div className="space-y-5 text-xs sm:text-sm text-slate-200 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#e5c07b]">A Dream Born in the Heart of Africa</h3>
              <p>
                My name is <strong>James Felix</strong>, Founder and Owner of <strong>Our Trip Africa</strong>. I am proud to come from Tanzania — a land of extraordinary landscapes, remarkable wildlife, rich cultures and people whose warmth can make a visitor feel at home. For me, tourism has never been only about moving from one destination to another. It is about creating moments that stay in a person's heart long after the journey has ended.
              </p>
              <p>
                For more than 15 years, my experience in the tourism industry has shaped the way I understand travel, hospitality and the responsibility that comes with welcoming visitors to Africa. Over those years, one belief became increasingly clear to me: Africa deserves to be experienced beyond photographs and brochures. Its beauty is found in the sunrise over the Serengeti, the immense walls of the Ngorongoro Crater, the quiet strength of Mount Kilimanjaro, the rhythm of Zanzibar, and the stories shared by the people who call this continent home.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#e5c07b]">The Beginning of Our Trip Africa</h3>
              <p>
                In 2021, I turned that belief into a clear business vision and established Our Trip Africa. The idea was simple, but meaningful: to help travellers from around the world discover Africa through thoughtfully planned journeys, genuine hospitality and personal attention. I wanted to build a company that listens before it recommends, understands each traveller's expectations, and treats every enquiry as the beginning of a relationship rather than just another booking.
              </p>
              <p>
                Building a travel company takes patience, commitment and the willingness to keep learning. Every itinerary must be considered carefully. Every transfer, accommodation choice, guide and activity contributes to a guest's experience. Behind every beautiful safari photograph is planning, coordination and a team of people working together to make the journey feel effortless. That is the standard I want Our Trip Africa to pursue every day.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#e5c07b]">More Than Safaris — A Connection With Africa</h3>
              <p>
                Tanzania will always hold a special place in our story. From the endless plains of the Serengeti and the wildlife-rich Ngorongoro Conservation Area to Tarangire's great elephant herds, the forests and mountains of the north, and the welcoming shores of Zanzibar, our home offers experiences for every kind of traveller. We also celebrate the living heritage of local communities, including Maasai traditions and the cultural experiences around Lake Eyasi, approached with respect, consent and appreciation.
              </p>
              <p>
                Our vision reaches beyond one country. We help guests explore the wider possibilities of Africa, including Kenya, Uganda and South Africa, as well as memorable journeys in the United Arab Emirates. Whether someone dreams of witnessing the Great Migration, climbing Mount Kilimanjaro, meeting mountain gorillas, enjoying an island escape or discovering the energy of Dubai, we want to help turn that dream into a well-planned and meaningful experience.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#e5c07b]">The Values Behind Every Journey</h3>
              <p>
                I believe that excellent hospitality begins with listening. Some guests seek a luxury escape; others want an affordable adventure, a family holiday, a private safari or a cultural journey. There should be room for different budgets, interests and travel styles. Our role is to understand what matters to each guest and help shape an itinerary around those expectations, with clear communication and thoughtful planning.
              </p>
              <p>
                I also believe that responsible tourism must respect the places and people who make travel special. Wildlife deserves protection, cultural encounters deserve dignity, and local communities deserve to be treated as partners. When visitors travel with curiosity and respect, tourism can create valuable connections and support livelihoods while encouraging appreciation for Africa's natural and cultural heritage.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#e5c07b]">A Welcome That Feels Personal</h3>
              <p>
                From our base in Kisongo, Arusha, our purpose is to make planning feel straightforward and welcoming. We want guests to feel comfortable asking questions, sharing their ideas and telling us their budget. We want them to know who is helping arrange their journey and to feel supported as they prepare to travel. The experience should begin with the first conversation and continue through the memories they take home.
              </p>
              <p>
                To every traveller who chooses to explore with us, I say: karibu sana — you are warmly welcome. Come for the wildlife, the mountains, the beaches and the breathtaking landscapes. Stay for the people, the culture, the stories and the feeling of discovering somewhere extraordinary. We would be honoured to help you experience it.
              </p>
              <p className="font-serif italic text-base sm:text-lg text-[#e5c07b] border-l-4 border-[#c5a059] pl-4 py-2">
                “Our Trip Africa is built on a simple promise: every journey should mean more than the miles travelled. It should bring people closer to the beauty, spirit and stories of Africa.”
              </p>
              <p className="font-bold text-white">James Felix<br /><span className="font-normal text-[#e5c07b]">Founder & Owner, Our Trip Africa</span></p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#1b4d38] flex flex-wrap items-center gap-4">
            <DualBookNow size="md" onOpenBookingModal={onOpenBooking} />
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-white text-[#0e3022] font-bold text-xs border border-white cursor-pointer transition-colors"
            >
              Talk to Managing Director
            </button>
          </div>
        </div>
      </section>

      {/* SAFARI ESSENTIALS CHECKLIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">Get Prepared</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Safari Essentials Checklist</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PACKING_TIPS.map((tip, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900">{tip.category}</h3>
              <ul className="text-xs text-slate-600 space-y-1">
                {tip.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <button onClick={downloadPackingList} className="flex items-center gap-2 mx-auto px-6 py-3 bg-[#0e3022] text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer">
          <Download size={16} />
          Download Packing List
        </button>
      </section>

      {/* SAFARI FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
            Got Questions?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Safari Questions
          </h2>
        </div>

        <div className="space-y-3">
          {SAFARI_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-serif font-bold text-sm text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[#0e3022] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
