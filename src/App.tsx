import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // <-- Import Routes and Route
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

// Import your pages
import Home from './pages/Home';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import ServicePage from './pages/ServicePage';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#353F4F] font-sans antialiased">
      {/* Top Header Navigation (Persists across all pages) */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Area (Routes will render here) */}
      <main className="flex-1">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home onOpenDemo={handleOpenDemo} />} />
          <Route path="/services/:slug" element={<ServicePage onOpenDemo={handleOpenDemo} />} />
          {/* <Route path="/home1" element={<Home1 onOpenDemo={handleOpenDemo} />} />
          <Route path="/home2" element={<Home2 onOpenDemo={handleOpenDemo} />} /> */}
          
          {/* Example of how to add more routes later: */}
          {/* <Route path="/about" element={<About onOpenDemo={handleOpenDemo} />} /> */}
          {/* <Route path="/features" element={<Features onOpenDemo={handleOpenDemo} />} /> */}
        </Routes>
      </main>

      {/* Enterprise Footer (Persists across all pages) */}
      <Footer />

      {/* Interactive Demo / Sandbox Booking Modal (Persists across all pages) */}
      <BookDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemo} 
      />
    </div>
  );
}