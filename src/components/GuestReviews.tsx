import React, { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore';
import { Star, Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { db } from '../lib/firebase';

type GuestReview = {
  id: string;
  name: string;
  country: string;
  packageTitle: string;
  rating: number;
  review: string;
};

const GOOGLE_GUEST_REVIEWS: GuestReview[] = [
  { id: 'google-nana-tenaga', name: 'Nana Tenaga', country: '', packageTitle: '', rating: 5, review: 'A first-class travel experience! Excellent service, seamless planning, and outstanding customer care. Highly recommended!' },
  { id: 'google-goodluck-alex', name: 'Goodluck Alex', country: '', packageTitle: '', rating: 0, review: 'Beautiful experience even for children! The boys are very committed and try to convey in a few hours the beauty of the many tribes and traditions that have coexisted in peace in Tanzania for so long. Our 8-year-old daughter was super interested and will bring many unique photos and information to school in Italy thanks to them! The lunch is delicious!!! Thanks to all the staff!!!' },
  { id: 'google-dudancy-dany', name: 'Dudancy Dany', country: '', packageTitle: 'Serengeti Safari', rating: 0, review: 'I had an amazing Serengeti safari experience with Our Trip Africa and his team. Everything was well organized, from transportation to accommodation and game drives. James was knowledgeable, professional, and made the trip truly memorable. We saw incredible wildlife and enjoyed every moment of the adventure. I highly recommend his tour company to anyone planning a safari in Tanzania!' },
  { id: 'google-sasien-solio', name: 'Sasien Solio', country: '', packageTitle: '', rating: 0, review: "James did a nice job for me. I hereby recommend this office to anyone. They genuinely care about their clients' well-being. Thank you." },
  { id: 'google-rosabella-nyawate', name: 'Rosabella Nyawate', country: '', packageTitle: 'Zanzibar Holiday', rating: 0, review: 'The trip to Zanzibar was very good.' },
  { id: 'google-khalid-mohamed', name: 'Khalid Mohamed', country: '', packageTitle: 'Kenya Experience', rating: 5, review: 'A big thank you to Mr. James and his wonderful team for an amazing Kenya experience for our clients. Excellent coordination, professional service, and seamless arrangements throughout. Our clients were extremely happy and enjoyed every moment. Highly recommended!' },
  { id: 'google-anania-john', name: 'Anania John', country: '', packageTitle: 'Cultural Experience', rating: 4, review: "We had an amazing cultural experience with Our Trip Africa. Visiting the local communities gave us a deeper understanding of Tanzania's traditions, history, and way of life. The guides were friendly, knowledgeable, and made every moment enjoyable. It was authentic, well-organized, and one of the highlights of our trip. We highly recommend Our Trip Africa to anyone looking for a genuine cultural adventure in Tanzania." },
  { id: 'google-elias-worku', name: 'Elias Worku', country: '', packageTitle: 'East Africa Camping Safari', rating: 5, review: 'Last month, I had the incredible opportunity to travel through Tanzania, Uganda, and Kenya on a camping safari with Our Trip Africa, and I can honestly say it was one of the most unforgettable experiences of my life. Sleeping under the open sky, surrounded by countless stars, made the adventure even more magical and unique. From the moment I arrived, I was welcomed with genuine warmth and exceptional hospitality. The entire team made me feel comfortable, valued, and well cared for throughout the journey. Their professionalism, kindness, and attention to detail were outstanding from start to finish. The guides were highly knowledgeable, friendly, and professional. They shared fascinating insights, made every part of the trip enjoyable, and ensured that everything ran smoothly. I was especially impressed by how safe, well-organized, and enjoyable every drive was. The journey was not only comfortable, but also full of fun, adventure, and memorable moments. One of the most remarkable parts of the trip was visiting the tribes and witnessing such an ancient and traditional way of life. It was a truly amazing and eye-opening experience that I will never forget. Our Trip Africa made it possible for me to experience the beauty of East Africa in a very special and meaningful way. I highly recommend Our Trip Africa to anyone planning to visit Tanzania, Uganda, or Kenya. If you choose them, you will not be disappointed. Instead, you will receive extraordinary service, enjoy a safe and exciting adventure, and create unforgettable memories that will stay with you forever.' }
];

export const GuestReviews: React.FC = () => {
  const [reviews, setReviews] = useState<GuestReview[]>([]);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [packageTitle, setPackageTitle] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const approved = query(collection(db, 'reviews'), where('status', '==', 'approved'));
    return onSnapshot(approved, snapshot => {
      setReviews(snapshot.docs.map(item => ({ id: item.id, ...item.data() } as GuestReview)));
    }, err => {
      console.error('Guest reviews unavailable:', err);
    });
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setError('');
    try {
      await addDoc(collection(db, 'reviews'), {
        name: name.trim(),
        country: country.trim(),
        packageTitle: packageTitle.trim(),
        rating,
        review: review.trim(),
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setSent(true);
      setName('');
      setCountry('');
      setPackageTitle('');
      setReview('');
      setRating(5);
    } catch (err) {
      console.error('Review submission failed:', err);
      setError('Review haikutumwa. Tafadhali jaribu tena au wasiliana nasi WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  const allReviews = [...GOOGLE_GUEST_REVIEWS, ...reviews.filter(item => !GOOGLE_GUEST_REVIEWS.some(g => g.id === item.id))];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (allReviews.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % allReviews.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [allReviews.length]);

  useEffect(() => {
    if (activeIndex >= allReviews.length) setActiveIndex(0);
  }, [activeIndex, allReviews.length]);

  const activeReview = allReviews[activeIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0e3022]">Guest Experiences</span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">Our Guest Testimonials</h2>
        <p className="text-sm text-slate-600">Read feedback shared by guests about their Our Trip Africa experiences.</p>
      </div>

      {activeReview && (
        <div className="max-w-3xl mx-auto">
          <article key={activeReview.id} aria-live="polite" className="min-h-[280px] rounded-3xl bg-white border border-slate-200 p-7 sm:p-9 shadow-md flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-5">
              {activeReview.rating > 0 ? (
                <div className="flex items-center gap-1 text-[#c5a059]" aria-label={activeReview.rating + ' out of 5 stars'}>
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={19} fill={index < activeReview.rating ? 'currentColor' : 'none'} />)}
                  <span className="ml-2 text-xs text-slate-500">{activeReview.rating}/5</span>
                </div>
              ) : (
                <p className="text-xs font-semibold text-slate-500">Guest feedback</p>
              )}
              <span className="text-xs font-semibold text-slate-400">{activeIndex + 1} / {allReviews.length}</span>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 flex-1">“{activeReview.review}”</p>
            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="font-bold text-slate-900">{activeReview.name}</p>
              {(activeReview.country || activeReview.packageTitle) && (
                <p className="text-xs text-slate-500 mt-1">{[activeReview.country, activeReview.packageTitle].filter(Boolean).join(' • ')}</p>
              )}
            </div>
          </article>
          <div className="mt-5 flex items-center justify-center gap-5">
            <button type="button" aria-label="Previous review" onClick={() => setActiveIndex(current => (current - 1 + allReviews.length) % allReviews.length)} className="rounded-full border border-[#0e3022] p-3 text-[#0e3022] hover:bg-[#0e3022] hover:text-white transition-colors">
              <ChevronLeft size={20}/>
            </button>
            <div className="flex items-center gap-2" aria-label="Choose a review">
              {allReviews.map((item, index) => (
                <button key={item.id} type="button" aria-label={'Show review ' + (index + 1)} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-[#c5a059]' : 'w-2.5 bg-slate-300 hover:bg-slate-500'}`}/>
              ))}
            </div>
            <button type="button" aria-label="Next review" onClick={() => setActiveIndex(current => (current + 1) % allReviews.length)} className="rounded-full border border-[#0e3022] p-3 text-[#0e3022] hover:bg-[#0e3022] hover:text-white transition-colors">
              <ChevronRight size={20}/>
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">Reviews change automatically. Use the arrows to browse.</p>
        </div>
      )}

      <div className="text-center">
        <a href="https://maps.app.goo.gl/V8ABAVgJC64W57Pz7" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#0e3022] px-6 py-3 text-sm font-bold text-[#0e3022] hover:bg-[#0e3022] hover:text-white transition-colors">
          Read All Google Reviews
        </a>
      </div>

      <div className="max-w-3xl mx-auto rounded-3xl bg-[#0e3022] border border-[#c5a059]/40 p-6 sm:p-8 text-white">
        <div className="mb-5">
          <h3 className="font-serif text-xl sm:text-2xl font-bold">Share Your Safari Experience</h3>
          <p className="text-xs text-slate-300 mt-1">Your review will be submitted privately for approval before publication.</p>
        </div>
        {sent ? (
          <div className="rounded-2xl bg-white/10 p-5 text-center">
            <CheckCircle2 className="mx-auto text-[#c5a059]" size={32}/>
            <p className="font-bold mt-2">Thank you for your feedback!</p>
            <p className="text-xs text-slate-300 mt-1">Our team will review your submission before it appears on the website.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required maxLength={100} value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="rounded-xl bg-[#081a13] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-slate-400"/>
            <input required maxLength={100} value={country} onChange={e=>setCountry(e.target.value)} placeholder="Country" className="rounded-xl bg-[#081a13] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-slate-400"/>
            <input maxLength={200} value={packageTitle} onChange={e=>setPackageTitle(e.target.value)} placeholder="Package / destination" className="sm:col-span-2 rounded-xl bg-[#081a13] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-slate-400"/>
            <label className="sm:col-span-2 text-xs text-slate-200">Your rating
              <select value={rating} onChange={e=>setRating(Number(e.target.value))} className="mt-1 block w-full rounded-xl bg-[#081a13] border border-white/20 px-4 py-3 text-sm text-white">
                {[5,4,3,2,1].map(value=><option key={value} value={value}>{value} / 5 stars</option>)}
              </select>
            </label>
            <textarea required minLength={10} maxLength={2000} rows={4} value={review} onChange={e=>setReview(e.target.value)} placeholder="Tell future travellers about your experience..." className="sm:col-span-2 rounded-xl bg-[#081a13] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-slate-400"/>
            {error && <p role="alert" className="sm:col-span-2 text-sm text-red-200">{error}</p>}
            <button disabled={sending} className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#c5a059] px-5 py-3 text-sm font-bold text-[#061d14] disabled:opacity-60">
              <Send size={16}/>{sending ? 'Sending...' : 'Submit Review'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
