import React, { Component } from 'react'
import Navbar from './navbar'
import HeroSection from './hero'
import Card from './card'
import Footer from './footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <Footer />
    </>
  )
}

export default HomePage;
