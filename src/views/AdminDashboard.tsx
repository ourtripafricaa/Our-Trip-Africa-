import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut } from 'firebase/auth';
import { auth, db, storage } from '../lib/firebase';

const tabs = ['Overview', 'Packages', 'Bookings', 'Blog', 'Images'];

export function AdminDashboard() {
  const [tab, setTab] = useState('Overview');
  const [packages, setPackages] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);

    const collections: any = {
      packages: setPackages,
      bookings: setBookings,
      blogPosts: setBlogs,
      images: setImages
    };

    const unsubscribers = Object.entries(collections).map(([name, setter]: any) =>
      onSnapshot(
        collection(db, name),
        snapshot => {
          setter(snapshot.docs.map((d: any) => ({ id: d.id, ...d.data() })));
          setLoading(false);
        },
        error => {
          console.error(name, error);
          setMessage('Firebase access error. Check Firestore Rules.');
          setLoading(false);
        }
      )
    );

    return () => {
      clearTimeout(timer);
      unsubscribers.forEach(unsubscribe => unsubscribe());
    };
  }, []);

  const addItem = async (name: string) => {
    if (!title.trim()) return alert('Enter a title first');
    try {
      const data: any = {
        title,
        description,
        createdAt: new Date().toISOString()
      };
      if (name === 'packages') data.price = Number(price);
      await addDoc(collection(db, name), data);
      setTitle('');
      setPrice('');
      setDescription('');
      alert('Saved successfully!');
    } catch (error) {
      alert('Could not save. Check Firebase permissions.');
    }
  };

  const removeItem = async (name: string, id: string) => {
    if (!confirm('Delete this item?')) return;
    try {
      await deleteDoc(doc(db, name, id));
    } catch {
      alert('Delete failed. Check Firebase permissions.');
    }
  };

  const changeBooking = async (id: string, status: string) => {
    try {
      await updateDoc(doc(db, 'bookings', id), { status });
    } catch {
      alert('Could not update booking.');
    }
  };

  const uploadImage = async (file: File) => {
    try {
      const imageRef = ref(storage, `website-images/${Date.now()}-${file.name}`);
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      await addDoc(collection(db, 'images'), {
        name: file.name,
        url,
        createdAt: new Date().toISOString()
      });
      alert('Image uploaded!');
    } catch {
      alert('Upload failed. Check Firebase Storage Rules.');
    }
  };

  if (loading) return <div className="p-8">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Our Trip Africa Admin</h1>
          <button
            onClick={() => signOut(auth)}
            className="rounded bg-red-600 px-4 py-2 text-white"
          >
            Logout
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map(item => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`rounded px-4 py-2 ${tab === item ? 'bg-green-700 text-white' : 'bg-white'}`}
            >
              {item}
            </button>
          ))}
        </div>

        {message && <p className="mb-4 text-red-600">{message}</p>}

        {tab === 'Overview' && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[['Packages', packages.length], ['Bookings', bookings.length], ['Blog Posts', blogs.length], ['Images', images.length]].map(([name, count]: any) => (
              <div key={name} className="rounded bg-white p-5 shadow">
                <p>{name}</p>
                <h2 className="text-3xl font-bold">{count}</h2>
              </div>
            ))}
          </div>
        )}

        {(tab === 'Packages' || tab === 'Blog') && (
          <div className="rounded bg-white p-4 shadow">
            <h2 className="mb-3 text-xl font-bold">Add {tab}</h2>
            <input
              className="mb-3 w-full rounded border p-3"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            {tab === 'Packages' && (
              <input
                className="mb-3 w-full rounded border p-3"
                placeholder="Price in USD"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            )}
            <textarea
              className="mb-3 w-full rounded border p-3"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button
              onClick={() => addItem(tab === 'Packages' ? 'packages' : 'blogPosts')}
              className="rounded bg-green-700 px-5 py-3 text-white"
            >
              Save {tab}
            </button>

            {(tab === 'Packages' ? packages : blogs).map(item => (
              <div key={item.id} className="mt-4 flex items-center justify-between border-b p-3">
                <span>{item.title}</span>
                <button onClick={() => removeItem(tab === 'Packages' ? 'packages' : 'blogPosts', item.id)} className="text-red-600">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {tab === 'Bookings' && (
          <div className="rounded bg-white p-4 shadow">
            {bookings.map(item => (
              <div key={item.id} className="mb-3 border-b p-3">
                <p className="font-bold">{item.name || item.customerName || 'Booking'}</p>
                <p>{item.email || ''} {item.phone || ''}</p>
                <p>Status: {item.status || 'Pending'}</p>
                <button onClick={() => changeBooking(item.id, 'Confirmed')} className="mr-2 rounded bg-green-700 px-3 py-2 text-white">Confirm</button>
                <button onClick={() => changeBooking(item.id, 'Cancelled')} className="rounded bg-red-600 px-3 py-2 text-white">Cancel</button>
              </div>
            ))}
            {bookings.length === 0 && <p>No bookings found.</p>}
          </div>
        )}

        {tab === 'Images' && (
          <div className="rounded bg-white p-4 shadow">
            <h2 className="mb-3 text-xl font-bold">Upload Website Images</h2>
            <input type="file" accept="image/*" onChange={e => e.target.files?.[0] && uploadImage(e.target.files[0])} />
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {images.map(item => (
                <div key={item.id}>
                  <img src={item.url} alt={item.name} className="h-32 w-full rounded object-cover" />
                  <p className="truncate">{item.name}</p>
                  <button onClick={() => removeItem('images', item.id)} className="text-red-600">Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
    }
