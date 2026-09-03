import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
