"use client";

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { BookMe } from './bookme';
// import { AboutMe } from './AboutMe';
import { Navigation } from './navigation';
import React from 'react';


export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutMe />} /> */}
          <Route path="/book" element={<BookMe />} />
        </Routes>
      </div>
    </Router>
  );
}