import React, { useState } from 'react';
import { Clock, Calendar, User, Share2, MessageSquare, ArrowLeft, Send, CheckCircle2, Bookmark, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost, COMPANY_DETAILS } from '../data/safariData';
import { DualBookNow } from '../components/DualBookNow';

interface BlogViewProps {
  onOpenBooking: () => void;
  initialSlug?: string;
}

export const BlogView: React.FC<BlogViewProps> = ({ onOpenBooking, initialSlug }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePost, setActivePost] = useState<BlogPost | null>(() => BLOG_POSTS.find((post) => post.slug === initialSlug) || null);

  React.useEffect(() => {
    const syncPostFromPath = () => {
      const slug = window.location.pathname.startsWith('/blog/') ? window.location.pathname.split('/').filter(Boolean)[1] : undefined;
      setActivePost(BLOG_POSTS.find((post) => post.slug === slug) || null);
    };
    window.addEventListener('popstate', syncPostFromPath);
    return () => window.removeEventListener('popstate', syncPostFromPath);
  }, []);

  React.useEffect(() => {
    if (activePost) {
      document.title = `${activePost.title} | Our Trip Africa`;
      let description = document.querySelector('meta[name="description"]');
      if (!description) { description = document.createElement('meta'); description.setAttribute('name', 'description'); document.head.appendChild(description); }
      description.setAttribute('content', activePost.seoDescription);
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
      canonical.setAttribute('href', `https://www.ourtripafrica.com/blog/${activePost.slug}`);
    } else {
      document.title = 'Travel Guides, Wildlife & News | Our Trip Africa';
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', 'https://www.ourtripafrica.com/blog');
    }
  }, [activePost]);

  // Comments state for active post
  const [comments, setComments] = useState<Array<{ name: string; text: string; date: string }>>([
    {
      name: 'James Harrison',
      text: 'Extremely helpful advice about the Mara River crossings. We are planning our visit for August with Our Trip Africa!',
      date: 'March 16, 2026',
    },
    {
      name: 'Sophia Laurent',
      text: 'The breakdown between budget camping and mid-range lodges gave our family the clarity we needed. Thank you!',
      date: 'March 2, 2026',
    },
  ]);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    'all',
    'Travel Guides',
    'Wildlife Spotlights',
    'Cultural Experiences',
    'Company News',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'all') return true;
    return post.category === selectedCategory;
  });

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        name: commentName.trim(),
        text: commentText.trim(),
        date: 'Just now',
      },
    ]);

    setCommentName('');
    setCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  const handleShare = (platform: 'whatsapp' | 'facebook' | 'twitter' | 'copy') => {
    const url = window.location.href;
    const title = activePost ? activePost.title : 'Our Trip Africa Safari Guides';

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - Read more: ${url}`)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 bg-[#faf9f5]">
      {/* If viewing a single post */}
      {activePost ? (
        <article className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          {/* Back button */}
          <button
            onClick={() => { setActivePost(null); window.history.pushState({}, '', '/blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0e3022] hover:text-[#c5a059] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to All Travel Guides & News</span>
          </button>

          {/* Article Header */}
          <header className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022] bg-[#0e3022]/10 px-3.5 py-1 rounded-full border border-[#0e3022]/20">
              {activePost.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              {activePost.title}
            </h1>

            {/* Metadata Line */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <img
                  src={activePost.author.avatar}
                  alt={activePost.author.name}
                  className="w-7 h-7 rounded-full object-cover border border-[#c5a059]"
                />
                <span className="text-slate-900 font-semibold">{activePost.author.name}</span>
                <span className="text-[#0e3022]">({activePost.author.role})</span>
              </div>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                <span>{activePost.publishedDate}</span>
              </span>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                <span>{activePost.readTime}</span>
              </span>
            </div>
          </header>

          {/* Hero Feature Image */}
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
            <img
              src={activePost.image}
              alt={activePost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Social Share Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">Share this travel guide:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare('whatsapp')}
                className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1faa4f] transition-colors cursor-pointer"
              >
                WhatsApp
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="px-3 py-1.5 rounded-lg bg-[#1877F2] text-white text-xs font-semibold hover:bg-[#166fe5] transition-colors cursor-pointer"
              >
                Facebook
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="px-3 py-1.5 rounded-lg bg-[#0e3022] text-white text-xs font-semibold hover:bg-[#154632] transition-colors cursor-pointer"
              >
                X / Twitter
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {copiedLink ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          {/* Post Content */}
          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
            {activePost.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {activePost.mapLinks && activePost.mapLinks.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-slate-900">Explore These Places on Google Maps</h2>
              <p className="text-xs text-slate-600">Open the map links below to view the destinations mentioned in this guide.</p>
              <div className="flex flex-wrap gap-2">{activePost.mapLinks.map(([label, url]) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-[#0e3022]/5 border border-[#0e3022]/15 text-[#0e3022] text-xs font-semibold hover:bg-[#0e3022] hover:text-white">{label} · Map</a>
              ))}</div>
            </section>
          )}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 mr-2 font-medium">Topics:</span>
            {activePost.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-[#0e3022] bg-white px-3 py-1 rounded-lg border border-slate-200 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA Box inside post (Deep Emerald Luxury Highlight) */}
          <div className="bg-[#0e3022] p-8 sm:p-10 rounded-3xl border border-[#1b4d38] shadow-xl text-white space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider">
                Plan Your Safari With Us
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Ready to turn this guide into your real adventure?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Connect directly with Mr. James Felix and our local expedition team in Kisongo, Arusha. We will customize your exact dates, lodging, and private 4x4 game drives.
              </p>
            </div>
            <div className="pt-2">
              <DualBookNow size="md" onOpenBookingModal={onOpenBooking} />
            </div>
          </div>

          {/* Comments Section */}
          <section className="space-y-6 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare size={20} className="text-[#0e3022]" />
                <span>Traveler Comments ({comments.length})</span>
              </h3>
            </div>

            {/* Existing Comments */}
            <div className="space-y-3">
              {comments.map((c, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-slate-900">{c.name}</span>
                    <span className="text-[10px] text-slate-400">{c.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

            {/* Leave a Comment Form */}
            <form onSubmit={handleAddComment} className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-serif font-bold text-base text-slate-900">Leave a Thought or Question</h4>

              {commentSuccess && (
                <div className="p-3 bg-[#25D366]/15 border border-[#25D366]/30 rounded-xl text-xs text-[#1faa4f] flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Thank you! Your comment has been posted.</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Your Name:</label>
                <input
                  type="text"
                  required
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="e.g. David Jenkins"
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Comment / Inquiry:</label>
                <textarea
                  rows={3}
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Ask a question about this guide or share your experience..."
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#0e3022] hover:bg-[#154632] text-white font-bold text-xs cursor-pointer transition-colors shadow-sm"
              >
                Post Comment
              </button>
            </form>
          </section>
        </article>
      ) : (
        /* Blog Catalog View */
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e3022]/10 border border-[#0e3022]/20 text-[#0e3022] text-xs font-semibold uppercase tracking-widest">
              <Sparkles size={13} className="text-[#c5a059]" />
              <span>African Safari Knowledge Hub</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Travel Guides, Wildlife & News
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Expert advice directly from our licensed guides in Arusha. Learn the best seasons for the Great Migration, gorilla trekking rules, budget comparisons, and local community updates.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0e3022] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => { setActivePost(post); window.history.pushState({}, '', `/blog/${post.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col hover:border-[#c5a059] hover:shadow-xl transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#0e3022]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#c5a059] font-semibold border border-[#c5a059]/30">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{post.publishedDate}</span>
                      <span aria-hidden="true">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0e3022] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-500">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full object-cover border border-[#c5a059]"
                      />
                      <span className="truncate max-w-[130px] font-medium">{post.author.name}</span>
                    </div>
                    <a href={`/blog/${post.slug}`} onClick={(event) => { event.stopPropagation(); event.preventDefault(); setActivePost(post); window.history.pushState({}, '', `/blog/${post.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[#0e3022] font-bold group-hover:underline">
                      Read Article →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
