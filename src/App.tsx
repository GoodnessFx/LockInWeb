import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Preview } from './components/Preview';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogPage } from './pages/BlogPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Preview />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}