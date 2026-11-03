/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PackageModal } from './components/PackageModal';
import { BookingForm } from './components/BookingForm';
import { CloudflareGuideModal } from './components/CloudflareGuideModal';
import { SafariChatbot } from './components/SafariChatbot';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { DestinationView } from './views/DestinationView';
import { PackagesView } from './views/PackagesView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';
import { SupportTeamView } from './views/SupportTeamView';
import { SalesTeamView } from './views/SalesTeamView';
import { AdminLogin } from './views/AdminLogin';
import { AdminDashboard } from './views/AdminDashboard';


import { SafariPackage, SAFARI_PACKAGES } from './data/safariData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParam, setViewParam] = useState<string | undefined>(undefined);
  const [selectedPackage, setSelectedPackage] = useState<SafariPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState<SafariPackage | null>(null);
  const [isCloudflareGuideOpen, setIsCloudflareGuideOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Scroll to top upon navigating to a new view
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
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentView === 'tanzania' && (
          <DestinationView
            country="Tanzania"
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'kenya' && (
          <DestinationView
            country="Kenya"
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'uganda' && (
          <DestinationView
            country="Uganda"
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'zanzibar' && (
          <DestinationView
            country="Zanzibar"
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'south-africa' && (
          <DestinationView
            country="South Africa"
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'uae' && (
          <DestinationView
            country="UAE"
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'packages' && (
          <PackagesView
            initialFilter={viewParam}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'compare' && (
          <PackagesView
            initialFilter={viewParam}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'blog' && (
          <BlogView
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}

        {currentView === 'support-team' && (
          <SupportTeamView />
        )}

        {currentView === 'sales-team' && (
          <SalesTeamView
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}
        {currentView === 'admin' && (
          isAuthenticated ? (
            <AdminDashboard />
          ) : (
            <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
          )
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
      />

      {/* Safari Package Detail Modal */}
      {selectedPackage && (
        <PackageModal
          packageItem={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onOpenBooking={handleOpenBooking}
        />
      )}

      {/* Safari Booking & Enquiry Modal */}
      {isBookingOpen && (
        <BookingForm
          initialPackage={bookingPackage}
          onClose={() => {
            setIsBookingOpen(false);
            setBookingPackage(null);
          }}
        />
      )}

      {/* Cloudflare Pages Deployment & Custom Domain Guide Modal */}
      {isCloudflareGuideOpen && (
        <CloudflareGuideModal
          onClose={() => setIsCloudflareGuideOpen(false)}
        />
      )}

      {/* Floating AI Safari Assistant Chatbot */}
      <SafariChatbot />
    </div>
  );
}
