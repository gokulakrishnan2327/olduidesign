import React, { useState } from 'react';
import { Menu, X, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react';
import './App.css';
import WorkHappen from './WorkHappen'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import TestimonialsSection from './TestimonialsSection'
import EachWeek from './EachWeek'
import WeeklyDropComponent from './WeeklyDropComponent'
import Features from './Features'
import Enterprise from './Enterprise'

import Customer from './Customer'
import Increase from './Increase'
import Footer from './Footer'


function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <WorkHappen/>
      <FeaturesSection />
      <EachWeek />
      <WeeklyDropComponent></WeeklyDropComponent>
      <Features/>
      <Enterprise/>
      <Customer/>
      <Increase/>
      <Footer />
    </div>
  );
}


export default App;





