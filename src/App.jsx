import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TestForm from './components/TestForm';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        <Hero />
        <Services />
        <Contact />
        <TestForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
