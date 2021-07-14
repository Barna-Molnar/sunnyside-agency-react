import React from 'react';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <>
      <Header />
      <Cards />
      <TestimonialsSection />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
