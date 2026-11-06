import React, { useEffect, useState } from 'react';
import {
  collection, getDocs, addDoc, setDoc, deleteDoc,
  doc, query, orderBy, onSnapshot
} from 'firebase/firestore';
import {
  ref, uploadBytes, getDownloadURL, deleteObject
} from 'firebase/storage';
import { signOut } from 'firebase/auth';
import { auth, db, storage } from '../lib/firebase';
import { SAFARI_PACKAGES, BLOG_POSTS } from '../data/safariData';

const ADMIN_EMAIL = 'ourtripafricaa@gmail.com';

type Tab = 'overview' | 'packages' | 'bookings' | 'blog' | 'images';

export function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('overview');
  const [packages, setPackages] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [editor, setEditor] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const user = auth.currentUser;

    if (!user || user.email?.toLowerCase() !== ADMIN_EMAIL) {
      setMessage('Access denied. Admin account required.');
      setLoading(false);
      return;
    }

    const unsubPackages = onSnapshot(
      collection(db, 'packages'),
      snapshot => {
        setPackages(snapshot.docs.map(d => ({ ...d.data(), id: d.id })));
        setLoading(false);
      },
      error => setMessage(error.message)
    );

    const unsubBookings = onSnapshot(
      collection(db, 'bookings'),
      snapshot => {
        setBookings(snapshot.docs.map(d => ({ ...d.data(), id: d.id })));
      },
      error => setMessage(error.message)
    );

    const unsubPosts = onSnapshot(
      collection(db, 'blogPosts'),
      snapshot => {
        setPosts(snapshot.docs.map(d => ({ ...d.data(), id: d.id })));
      },
      error => setMessage(error.message)
    );

    const unsubImages = onSnapshot(
      collection(db, 'images'),
      snapshot => {
        setImages(snapshot.docs.map(d => ({ ...d.data(), id: d.id })));
      },
      error => setMessage(error.message)
    );

    return () => {
      unsubPackages();
      unsubBookings();
      unsubPosts();
      unsubImages();
    };
  }, []);

  const seedPackages = async () => {
    if (!window.confirm('Import all existing website packages into the Dashboard?')) return;

    setSaving(true);
    try {
      for (const item of SAFARI_PACKAGES) {
        await setDoc(doc(db, 'packages', item.id), item);
      }
      setMessage(`${SAFARI_PACKAGES.length} packages imported successfully.`);
    } catch (error: any) {
      setMessage(error.message || 'Could not import packages.');
    } finally {
      setSaving(false);
    }
  };

  const seedPosts = async () => {
    if (!window.confirm('Import existing blog posts into the Dashboard?')) return;

    setSaving(true);
    try {
      for (const post of BLOG_POSTS) {
        await setDoc(doc(db, 'blogPosts', post.id), post);
      }
      setMessage(`${BLOG_POSTS.length} blog posts imported successfully.`);
    } catch (error: any) {
      setMessage(error.message || 'Could not import blog posts.');
    } finally {
      setSaving(false);
    }
  };

  const savePackage = async () => {
    try {
      const data = JSON.parse(editor);
      if (!data.id || !data.title) {
        setMessage('Package must have an ID and title.');
        return;
      }

      setSaving(true);
      await setDoc(doc(db, 'packages', String(data.id)), data);
      setMessage('Package saved successfully.');
      setEditor('');
      setEditingId(null);
    } catch (error: any) {
      setMessage(error instanceof SyntaxError
        ? 'Invalid JSON. Please check the package data.'
        : error.message);
    } finally {
      setSaving(false);
    }
  };

  const savePost = async () => {
    try {
      const data = JSON.parse(editor);
      if (!data.id || !data.title) {
        setMessage('Article must have an ID and title.');
        return;
      }

      setSaving(true);
      await setDoc(doc(db, 'blogPosts', String(data.id)), data);
      setMessage('Article saved successfully.');
      setEditor('');
      setEditingId(null);
    } catch (error: any) {
      setMessage(error instanceof SyntaxError
        ? 'Invalid JSON. Please check the article data.'
        : error.message);
    } finally {
      setSaving(false);
    }
  };

  const removeDocument = async (
    collectionName: string,
    id: string,
    label: string
  ) => {
    if (!window.confirm(`Delete this ${label}? This cannot be undone.`)) return;

    try {
      await deleteDoc(doc(db, collectionName, id));
      setMessage(`${label} deleted successfully.`);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      await setDoc(
        doc(db, 'bookings', id),
        { status, updatedAt: new Date().toISOString() },
        { merge: true }
      );
      setMessage(`Booking updated: ${status}`);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const uploadImage = async () => {
    if (!file) return;

    setSaving(true);
    try {
      const imageRef = ref(storage, `images/${Date.now()}_${file.name}`);
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'images'), {
        url,
        caption: file.name,
        category: 'safari',
        storagePath: imageRef.fullPath,
        createdAt: new Date().toISOString(),
        uploadedBy: auth.currentUser?.email
      });

      setFile(null);
      setMessage('Image uploaded successfully.');
    } catch (error: any) {
      setMessage(error.message || 'Image upload failed.');
    } finally {
      setSaving(false);
    }
  };

  const removeImage = async (image: any) => {
    if (!window.confirm('Delete this image permanently?')) return;

    try {
      if (image.storagePath) {
        await deleteObject(ref(storage, image.storagePath));
      }
      await deleteDoc(doc(db, 'images', image.id));
      setMessage('Image deleted.');
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  const menu: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'packages', label: 'Packages' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'blog', label: 'Blog & Stories' },
    { id: 'images', label: 'Image Gallery' }
  ];

  if (loading) {
    return <div className="p-10 text-center">Loading dashboard...</div>;
  }

  if (auth.currentUser?.email?.toLowerCase() !== ADMIN_EMAIL) {
    return (
      <div className="max-w-xl mx-auto my-16 p-8 bg-white rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold text-red-700">Access Denied</h2>
        <p className="mt-3">Please sign in using the authorized admin account.</p>
        <button onClick={logout} className="mt-5 px-5 py-2 bg-[#0e3022] text-white rounded-lg">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7f4]">
      <header className="bg-[#0e3022] text-white px-5 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">OUR TRIP AFRICA</h1>
            <p className="text-sm text-[#c5a059]">Administration Dashboard</p>
          </div>
          <button onClick={logout} className="px-4 py-2 rounded-lg bg-[#c5a059] text-[#061d14] font-bold">
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <nav className="flex gap-2 overflow-x-auto pb-4">
          {menu.map(item => (
            <button
              key={item.id}
              onClick={() => { setTab(item.id); setMessage(''); }}
              className={`px-4 py-3 rounded-lg whitespace-nowrap font-semibold ${
                tab === item.id
                  ? 'bg-[#0e3022] text-white'
                  : 'bg-white text-slate-700 border'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {message && (
          <div className="mb-5 p-3 rounded-lg bg-[#e5f2e9] text-[#0e3022]">
            {message}
          </div>
        )}

        {tab === 'overview' && (
          <section>
            <h2 className="text-2xl font-bold mb-5">Dashboard Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ['Packages', packages.length],
                ['Bookings', bookings.length],
                ['Blog Articles', posts.length],
                ['Images', images.length]
              ].map(([label, value]) => (
                <div key={label} className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-slate-500 text-sm">{label}</p>
                  <p className="text-3xl font-bold text-[#0e3022]">{value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 mt-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Initial Setup</h3>
              <p className="text-sm text-slate-600 mb-4">
                Import your existing website packages and articles into Firebase.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={seedPackages} disabled={saving}
                  className="px-5 py-3 rounded-lg bg-[#0e3022] text-white disabled:opacity-50">
                  {saving ? 'Importing...' : 'Import Existing Packages'}
                </button>
                <button onClick={seedPosts} disabled={saving}
                  className="px-5 py-3 rounded-lg bg-[#c5a059] text-[#061d14] disabled:opacity-50">
                  Import Existing Blog Posts
                </button>
              </div>
            </div>
          </section>
        )}

        {tab === 'packages' && (
          <section>
            <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
              <h2 className="text-2xl font-bold">Manage Packages</h2>
              <button
                onClick={() => {
                  setEditingId('new');
                  setEditor(JSON.stringify({
                    id: `pkg-${Date.now()}`,
                    slug: '',
                    title: '',
                    destination: '',
                    country: 'Tanzania',
                    category: 'Wildlife Safari',
                    durationDays: 1,
                    durationNights: 0,
                    durationLabel: '1 Day',
                    basePrice: 0,
                    currency: 'USD',
                    tierPricing: { budget: 0, midrange: 0, luxury: 0 },
                    minGuests: 1,
                    rating: 5,
                    reviewsCount: 0,
                    featured: false,
                    bestTime: 'Year-Round',
                    physicalRating: 'Easy',
                    heroImage: '',
                    gallery: [],
                    overview: '',
                    highlights: [],
                    inclusions: [],
                    exclusions: [],
                    itinerary: []
                  }, null, 2));
                }}
                className="px-4 py-2 bg-[#0e3022] text-white rounded-lg">
                + Add Package
              </button>
            </div>

            {editingId !== null && (
              <div className="bg-white p-5 rounded-xl shadow mb-6">
                <h3 className="font-bold mb-3">Package Editor (JSON)</h3>
                <textarea
                  value={editor}
                  onChange={e => setEditor(e.target.value)}
                  rows={18}
                  className="w-full border rounded-lg p-3 font-mono text-xs"
                />
                <div className="flex gap-3 mt-3">
                  <button onClick={savePackage} disabled={saving}
                    className="px-5 py-2 bg-[#0e3022] text-white rounded-lg">
                    Save Package
                  </button>
                  <button onClick={() => { setEditingId(null); setEditor(''); }}
                    className="px-5 py-2 border rounded-lg">Cancel</button>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0e3022] text-white">
                  <tr>
                    <th className="p-3 text-left">Package</th>
                    <th className="p-3 text-left">Country</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map(pkg => (
                    <tr key={pkg.id} className="border-b">
                      <td className="p-3 font-semibold">{pkg.title}</td>
                      <td className="p-3">{pkg.country}</td>
                      <td className="p-3">${pkg.basePrice}</td>
                      <td className="p-3">
                        <div className="flex gap-2 justify-center">
                          <button onClick={() => {
                            setEditingId(pkg.id);
                            setEditor(JSON.stringify(pkg, null, 2));
                          }} className="px-3 py-1 bg-[#c5a059] rounded">Edit</button>
                          <button onClick={() => removeDocument('packages', pkg.id, 'package')}
                            className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {packages.length === 0 && (
                <p className="p-6 text-center text-slate-500">
                  No packages imported yet. Use the Import Existing Packages button first.
                </p>
              )}
            </div>
          </section>
        )}

        {tab === 'bookings' && (
          <section>
            <h2 className="text-2xl font-bold mb-5">Customer Bookings</h2>
            <div className="bg-white rounded-xl shadow overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0e3022] text-white">
                  <tr>
                    <th className="p-3 text-left">Guest</th>
                    <th className="p-3 text-left">Package</th>
                    <th className="p-3 text-left">Travel Date</th>
                    <th className="p-3 text-left">Guests</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(booking => (
                    <tr key={booking.id} className="border-b">
                      <td className="p-3">
                        <strong>{booking.fullName || booking.name || 'Guest'}</strong>
                        <br />{booking.email || ''}
                        <br />{booking.phone || ''}
                      </td>
                      <td className="p-3">{booking.packageTitle || booking.packageName || 'Custom enquiry'}</td>
                      <td className="p-3">{booking.travelDate || 'Not specified'}</td>
                      <td className="p-3">{booking.adults || 0} adults, {booking.children || 0} children</td>
                      <td className="p-3">{booking.status || 'Pending'}</td>
                      <td className="p-3">
                        <div className="flex flex-col gap-1">
                          <button onClick={() => updateBookingStatus(booking.id, 'Confirmed')}
                            className="px-2 py-1 bg-green-700 text-white rounded">Confirm</button>
                          <button onClick={() => updateBookingStatus(booking.id, 'Cancelled')}
                            className="px-2 py-1 bg-red-600 text-white rounded">Cancel</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {bookings.length === 0 && (
                <p className="p-6 text-center text-slate-500">No bookings received yet.</p>
              )}
            </div>
          </section>
        )}

        {tab === 'blog' && (
          <section>
            <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
              <h2 className="text-2xl font-bold">Blog & Stories</h2>
              <button onClick={() => {
                setEditingId('new');
                setEditor(JSON.stringify({
                  id: `post-${Date.now()}`,
                  slug: '',
                  title: '',
                  category: 'Travel Guides',
                  readTime: '5 min read',
                  publishedDate: new Date().toISOString().slice(0, 10),
                  author: { name: 'Our Trip Africa', role: 'Travel Expert', avatar: '' },
                  image: '',
                  excerpt: '',
                  content: [],
                  tags: [],
                  seoDescription: ''
                }, null, 2));
              }} className="px-4 py-2 bg-[#0e3022] text-white rounded-lg">
                + New Story
              </button>
            </div>

            {editingId !== null && (
              <div className="bg-white p-5 rounded-xl shadow mb-6">
                <h3 className="font-bold mb-3">Article Editor (JSON)</h3>
                <textarea value={editor} onChange={e => setEditor(e.target.value)}
                  rows={16} className="w-full border rounded-lg p-3 font-mono text-xs" />
                <div className="flex gap-3 mt-3">
                  <button onClick={savePost} disabled={saving}
                    className="px-5 py-2 bg-[#0e3022] text-white rounded-lg">Save Story</button>
                  <button onClick={() => { setEditingId(null); setEditor(''); }}
                    className="px-5 py-2 border rounded-lg">Cancel</button>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {posts.map(post => (
                <div key={post.id} className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="font-bold">{post.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{post.category}</p>
                  <div className="flex gap-2 mt-4">
                    <button onClick={() => {
                      setEditingId(post.id);
                      setEditor(JSON.stringify(post, null, 2));
                    }} className="px-3 py-1 bg-[#c5a059] rounded">Edit</button>
                    <button onClick={() => removeDocument('blogPosts', post.id, 'story')}
                      className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === 'images' && (
          <section>
            <h2 className="text-2xl font-bold mb-5">Image Gallery</h2>
            <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
              <input type="file" accept="image/*"
                onChange={e => setFile(e.target.files?.[0] || null)}
                className="block w-full mb-4" />
              <button onClick={uploadImage} disabled={!file || saving}
                className="px-5 py-3 bg-[#0e3022] text-white rounded-lg disabled:opacity-50">
                {saving ? 'Uploading...' : 'Upload Image'}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map(image => (
                <div key={image.id} className="bg-white p-2 rounded-xl shadow-sm">
                  <img src={image.url} alt={image.caption || 'Safari'} className="w-full h-36 object-cover rounded-lg" />
                  <p className="text-xs truncate mt-2">{image.caption}</p>
                  <button onClick={() => removeImage(image)}
                    className="w-full mt-2 py-2 bg-red-600 text-white rounded-lg text-sm">
                    Delete Image
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
            }
