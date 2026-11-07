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

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0e3022]">Guest Experiences</span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">Customer Reviews</h2>
        <p className="text-sm text-slate-600">Read guest feedback and share your own Our Trip Africa travel experience. New reviews are checked by our team before appearing publicly.</p>
      </div>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map(item => (
            <article key={item.id} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex gap-1 text-[#c5a059] mb-3" aria-label={item.rating + ' out of 5 stars'}>
                {Array.from({ length: item.rating }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm leading-relaxed text-slate-700">“{item.review}”</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.country} {item.packageTitle ? '• ' + item.packageTitle : ''}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">
          Be among the first guests to share an approved review of your journey with us.
        </div>
      )}

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
