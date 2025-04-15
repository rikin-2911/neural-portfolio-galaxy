
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-heading animate-float">
            Data Science & AI Portfolio
          </h1>
          
          <div className="w-20 h-20 rounded-full bg-neural-lighter mx-auto mb-6 overflow-hidden border-2 border-neural-accent">
            <img
              src="https://via.placeholder.com/200" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">
            John Doe
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            AI Researcher & Data Scientist specializing in machine learning, 
            deep neural networks, and predictive analytics with a passion for 
            solving complex problems through data.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <Button className="bg-neural-accent hover:bg-neural-accent/80">
              View Resume
            </Button>
            <Button variant="outline" className="border-neural-accent text-white">
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="text-gray-300 hover:text-white">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter size={24} />
            </a>
          </div>
          
          <a href="#projects" className="inline-block animate-bounce">
            <ArrowDown className="text-neural-node" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
