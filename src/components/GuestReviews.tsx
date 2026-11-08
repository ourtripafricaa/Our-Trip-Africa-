import React, { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore';
import { MessageSquare, Star, Send, CheckCircle2 } from 'lucide-react';
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

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0e3022]">Guest Experiences</span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">Our Guest Testimonials</h2>
        <p className="text-sm text-slate-600">Read feedback shared by guests about their Our Trip Africa experiences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allReviews.map(item => (
          <article key={item.id} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col">
            {item.rating > 0 ? (
              <div className="flex gap-1 text-[#c5a059] mb-3" aria-label={item.rating + ' out of 5 stars'}>
                {Array.from({ length: item.rating }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}
                <span className="ml-2 text-xs text-slate-500">{item.rating}/5</span>
              </div>
            ) : (
              <p className="text-xs font-semibold text-slate-500 mb-3">Guest feedback</p>
            )}
            <p className="text-sm leading-relaxed text-slate-700 flex-1">“{item.review}”</p>
            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="font-bold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{[item.country, item.packageTitle].filter(Boolean).join(' • ')}</p>
            </div>
          </article>
        ))}
      </div>

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
