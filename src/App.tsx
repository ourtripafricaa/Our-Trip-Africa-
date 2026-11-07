import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './lib/firebase';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PackageModal } from './components/PackageModal';
import { BookingForm } from './components/BookingForm';
import { CloudflareGuideModal } from './components/CloudflareGuideModal';
import { SafariChatbot } from './components/SafariChatbot';

import { HomeView } from './views/HomeView';
import { DestinationsView } from './views/DestinationsView';
import { AboutView } from './views/AboutView';
import { DestinationView } from './views/DestinationView';
import { PackagesView } from './views/PackagesView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';
import { SupportTeamView } from './views/SupportTeamView';
import { SalesTeamView } from './views/SalesTeamView';
import { AdminLogin } from './views/AdminLogin';
import { AdminDashboard } from './views/AdminDashboard';

import { SafariPackage } from './data/safariData';

const ADMIN_EMAIL = 'ourtripafricaa@gmail.com';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParam, setViewParam] = useState<string | undefined>(undefined);
  const [selectedPackage, setSelectedPackage] = useState<SafariPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState<SafariPackage | null>(null);
  const [isCloudflareGuideOpen, setIsCloudflareGuideOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.email?.toLowerCase() === ADMIN_EMAIL) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);

        if (user) {
          await signOut(auth);
        }
      }

      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  const handleNavigate = (view: string, extraParam?: string) => {
    setCurrentView(view);
    setViewParam(extraParam);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (pkg?: SafariPackage) => {
    setBookingPackage(pkg || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-slate-800 selection:bg-[#c5a059] selection:text-white">

      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
      />

      <main className="flex-1">

        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'destinations' && (
          <DestinationsView onNavigate={handleNavigate} />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentView === 'tanzania' && (
          <DestinationView country="Tanzania" onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'kenya' && (
          <DestinationView country="Kenya" onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'uganda' && (
          <DestinationView country="Uganda" onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'zanzibar' && (
          <DestinationView country="Zanzibar" onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'south-africa' && (
          <DestinationView country="South Africa" onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'uae' && (
          <DestinationView country="UAE" onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'hadzabe' && (
          <DestinationView country="Hadzabe" onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'packages' && (
          <PackagesView initialFilter={viewParam} onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'compare' && (
          <PackagesView initialFilter={viewParam} onSelectPackage={(pkg) => setSelectedPackage(pkg)} onOpenBooking={handleOpenBooking} />
        )}

        {currentView === 'blog' && (
          <BlogView onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentView === 'contact' && <ContactView />}

        {currentView === 'support-team' && <SupportTeamView />}

        {currentView === 'sales-team' && (
          <SalesTeamView onOpenBooking={() => handleOpenBooking()} onNavigate={handleNavigate} />
        )}

        {currentView === 'admin' && (
          !authChecked ? (
            <div className="p-10 text-center">Checking admin access...</div>
          ) : isAuthenticated ? (
            <AdminDashboard />
          ) : (
            <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
          )
        )}

      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
      />

      {selectedPackage && (
        <PackageModal
          packageItem={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onOpenBooking={handleOpenBooking}
        />
      )}

      {isBookingOpen && (
        <BookingForm
          initialPackage={bookingPackage}
          onClose={() => {
            setIsBookingOpen(false);
            setBookingPackage(null);
          }}
        />
      )}

      {isCloudflareGuideOpen && (
        <CloudflareGuideModal onClose={() => setIsCloudflareGuideOpen(false)} />
      )}

      <SafariChatbot />

    </div>
  );
    }
