import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, SAFARI_PACKAGES } from '../data/safariData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  showActions?: boolean;
}

export const SafariChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Jambo & Welcome to Our Trip Africa! 🦁 I am your AI Safari Assistant here in Arusha, Tanzania.\n\nHow can I help you plan your dream African expedition? You can ask me about our safari packages, best months to see the Great Migration, budget vs luxury options, Kilimanjaro routes, or connect with our team on WhatsApp!`,
      time: 'Just now',
      showActions: true,
    },
  ]);

  const quickQuestions = [
    'Best time for Great Migration?',
    'What is the difference between Budget & Luxury?',
    'How do I book via WhatsApp?',
    'Tell me about Mount Kilimanjaro routes',
    'Uganda Gorilla Trekking permits',
    'How to plan a Zanzibar beach holiday?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('migration') || q.includes('serengeti') || q.includes('river crossing') || q.includes('wildebeest')) {
      return `The Great Wildebeest Migration is active year-round in the Serengeti!\n\n• July to October: Prime time for the dramatic Mara River crossings in Northern Serengeti, where thousands of wildebeests brave Nile crocodiles.\n• January to March: Southern Serengeti / Ndutu calving season, where 8,000 calves are born daily, attracting immense predator action (lions, cheetahs, leopards).\n\nOur 6-Day "The Great Migration Unfolds" starts at $1,850/person. Would you like our sales team to check dates for your group on WhatsApp?`;
    }

    if (q.includes('budget') || q.includes('luxury') || q.includes('tier') || q.includes('cost') || q.includes('difference')) {
      return `We offer three tailored safari comfort tiers across Tanzania and Kenya:\n\n1. Budget Camping ($180–$280/day): You sleep in comfortable waterproof 2-person dome tents in national parks with a private camp cook preparing 3 hot meals. High adventure!\n2. Mid-Range Lodges ($350–$550/day): Permanent safari lodges or en-suite tented chalets with private hot showers, swimming pools, and gourmet dining. Our most popular choice!\n3. Luxury Tented Suites ($700–$1,500+/day): Exclusive 5-star private concessions, plunge pools, butler service, and vintage wines.\n\nAll tiers include private 4x4 Land Cruisers with pop-up roofs!`;
    }

    if (q.includes('kilimanjaro') || q.includes('kili') || q.includes('climb') || q.includes('mountain') || q.includes('machame') || q.includes('marangu')) {
      return `Mount Kilimanjaro (5,895m / 19,341ft) is the Roof of Africa!\n\n• Machame Route ("Whiskey Route" 6D/5N from $1,980): The most scenic with high summit success rates due to excellent altitude acclimatization ("climb high, sleep low"). Scramble up Barranco Wall!\n• Marangu Route ("Coca-Cola Route" 6D/5N from $1,750): The only route with wooden A-frame sleeping huts and beds rather than tents.\n\nAll climbs include certified mountain guides, medical oxygen, private cooks, and porters.`;
    }

    if (q.includes('gorilla') || q.includes('uganda') || q.includes('bwindi') || q.includes('permit')) {
      return `Uganda is the premier destination for endangered Mountain Gorilla trekking!\n\n• Our 4-Day Bwindi Mountain Gorilla Expedition starts at $1,950/person and includes the official $800 Uganda Wildlife Authority (UWA) gorilla permit.\n• You get 1 magical hour within feet of a wild habituated gorilla family.\n• We recommend booking 3 to 6 months in advance as only 8 permits are issued per gorilla group each day.`;
    }

    if (q.includes('zanzibar') || q.includes('beach') || q.includes('stone town') || q.includes('safari blue')) {
      return `Zanzibar is the ultimate post-safari tropical paradise!\n\n• "The Spice Island Slow" (6D/5N from $1,250): Includes Stone Town history, organic spice farms, and beach resort relaxation in Nungwi (non-tidal beaches!).\n• "Safari Blue" excursion: Sail on a traditional wooden dhow, snorkel coral reefs, and feast on grilled lobster on an ocean sandbank.\n\nWe provide private transfers from airport or ferry terminal.`;
    }

    if (q.includes('whatsapp') || q.includes('phone') || q.includes('contact') || q.includes('call') || q.includes('number')) {
      return `You can reach our team immediately on WhatsApp or Phone at:\n\n📱 WhatsApp: +255 624 661 830\n📧 Email: info@ourtripafrica.com\n📍 Office: Kisongo, Arusha – Tanzania\n\nWe reply within minutes to tailor your itinerary!`;
    }

    if (q.includes('visa') || q.includes('vaccin') || q.includes('yellow fever') || q.includes('malaria')) {
      return `Travel Preparation Essentials for Tanzania:\n\n• Visa: Most visitors obtain a 90-day tourist visa ($50 for most nationalities, $100 for US citizens) either online via Tanzania Immigration eVisa or on arrival at Kilimanjaro Airport (JRO).\n• Health: Yellow fever vaccination is only required if coming from an endemic zone. Malaria prophylaxis is recommended.\n• Currency: USD is widely accepted in Tanzania (bills printed in 2013 or newer) and Tanzanian Shillings (TZS).`;
    }

    if (q.includes('south africa') || q.includes('kruger') || q.includes('cape town')) {
      return `Our South Africa itineraries combine the Big Five with coastal glamour!\n\n• 6-Day Cape Town & Kruger Classic (from $2,450/person)\n• 4-Day Greater Kruger Big 5 Safari (from $1,480/person)\n• 8-Day Cape Town & Garden Route Tour (from $2,950/person)\n\nIncludes open 4x4 game drives in Kruger, Table Mountain cableway, Cape Point, and Stellenbosch vineyards. Would you like a quote on WhatsApp?`;
    }

    if (q.includes('uae') || q.includes('dubai') || q.includes('abu dhabi') || q.includes('desert safari')) {
      return `Experience the glamour and heritage of the United Arab Emirates!\n\n• 5-Day Dubai Desert Safari & Modern Marvels (from $1,280/person)\n• 7-Day Grand UAE Explorer: Dubai, Abu Dhabi & Desert Dunes (from $1,850/person)\n\nIncludes 4x4 red dune bashing in Lahbab, Bedouin BBQ dinner with fire shows, Burj Khalifa observation deck, Sheikh Zayed Grand Mosque, and Marina dinner cruises.`;
    }

    return `Thank you for asking about that! Our Trip Africa is a direct local tour operator based in Kisongo, Arusha. We operate private safaris across Tanzania, Kenya, Uganda, Zanzibar, South Africa, and the UAE.\n\nWould you like to connect directly with our Founder & Owner Mr. James Felix on WhatsApp (+255624661830) or receive a custom quote by email?`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputValue.trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = generateAnswer(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        time: 'Just now',
        showActions: true,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Trigger Badge */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Safari Concierge Chat"
            className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#0f382a] to-[#081a13] border-2 border-[#c5a059] shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="relative">
              <img
                src={COMPANY_DETAILS.logo}
                alt="Our Trip Africa"
                className="w-9 h-9 rounded-full object-cover border border-[#c5a059]"
              />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#081a13]" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="text-xs font-bold text-white block">Safari AI Assistant</span>
              <span className="text-[10px] text-[#c5a059]">Ask a question or book</span>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#081a13] border-2 border-[#c5a059]/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#0e271e] p-4 border-b border-[#1a4a35] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_DETAILS.logo}
                alt="Our Trip Africa"
                className="w-10 h-10 rounded-full object-cover border border-[#c5a059]"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-sm text-white">Our Trip Africa Concierge</h3>
                  <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded-full font-medium">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-[#a49a88]">Arusha Operations Desk • 24/7 Support</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="p-1.5 rounded-full text-[#a49a88] hover:text-white hover:bg-[#1a4a35] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#0e3022] border border-[#c5a059]/40 flex items-center justify-center shrink-0 text-[#c5a059] mt-1">
                    <Bot size={15} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed space-y-2 ${
                    msg.sender === 'user'
                      ? 'bg-[#c5a059] text-[#081a13] font-medium rounded-br-none'
                      : 'bg-[#0e271e] text-[#faf7f2] border border-[#1a4a35] rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Bot Direct Action Buttons */}
                  {msg.showActions && msg.sender === 'bot' && (
                    <div className="pt-2 border-t border-[#1a4a35] flex flex-wrap gap-2">
                      <a
                        href={COMPANY_DETAILS.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white rounded-lg text-[11px] font-semibold hover:bg-[#1faa4f] transition-colors"
                      >
                        <MessageSquare size={13} />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <a
                        href={`mailto:${COMPANY_DETAILS.bookingEmail}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a4a35] text-[#c5a059] rounded-lg text-[11px] font-semibold hover:bg-[#225d43] transition-colors"
                      >
                        <Mail size={13} />
                        <span>Email Us</span>
                      </a>
                    </div>
                  )}

                  <span className="text-[9px] text-[#7d7465] block text-right">
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#c5a059] flex items-center justify-center shrink-0 text-[#081a13] mt-1">
                    <User size={15} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#a49a88] bg-[#0e271e] p-3 rounded-2xl w-32 border border-[#1a4a35]">
                <Bot size={14} className="text-[#c5a059]" />
                <span>Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-[#05130e] border-t border-[#1a4a35] flex items-center gap-1.5 overflow-x-auto text-[11px]">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#0e271e] hover:bg-[#1a4a35] text-[#dcd4c7] hover:text-white border border-[#1a4a35] transition-all cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#0e271e] border-t border-[#1a4a35] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about our safaris..."
              className="flex-1 bg-[#081a13] text-white text-xs px-3.5 py-2.5 rounded-xl border border-[#1a4a35] focus:outline-none focus:border-[#c5a059]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-[#c5a059] text-[#081a13] hover:bg-[#d6b36d] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
