import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import MockupSection from './MockupSection';
import Conten from './Conten';
import Konten from './Konten'; // Pastikan konsisten dengan nama file dan komponen
import Card from './Card';
import Footer from './Footer';


const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <MockupSection />
      <Conten />
      <Konten />  {/* Nama komponen sudah diperbaiki */}
      <Card />
      <Footer />
    
    </div>
  );
};

export default Home;
