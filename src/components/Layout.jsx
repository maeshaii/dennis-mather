import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import BookDetails from './BookDetails';
import Newsletter from './Newsletter';
import Footer from './Footer';
import FeaturedWorks from './FeaturedWorks';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BookDetails />
      <FeaturedWorks/>
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;