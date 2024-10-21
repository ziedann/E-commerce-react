import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.css'
import Navbar from './navbar'
import HeroSection from './hero'
import Card from './card'
import Footer from './footer'

createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <HeroSection />
    <Card />
    <Footer />
  </>
);
