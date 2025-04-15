
import React from 'react';
import NeuralBackground from '@/components/NeuralBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative">
      <NeuralBackground />
      <Navbar />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      
      <footer className="py-8 text-center text-gray-400 bg-neural">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Data Science Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
