
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Instagram, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-heading animate-float">
            Data Science & AI Portfolio
          </h1>
          
          <div className="w-24 h-24 rounded-full bg-neural-lighter mx-auto mb-6 overflow-hidden border-2 border-neural-accent">
            <img
              src="/lovable-uploads/12ca6bc5-d16a-47e9-b7d8-631bef03aace.png" 
              alt="Rikin Pithadia"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">
            Rikin Pithadia
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I am an undergraduate student specializing in Data Science and Artificial Intelligence. 
            Passionate about turning data into insights, I have hands-on experience in machine learning, 
            deep learning, and real-world AI applications. I actively work on projects involving data analytics, 
            predictive modeling, and AI system development. Currently pursuing academic degrees in Data Science & AI, 
            I'm also exploring interdisciplinary applications across fields like IoT, big data, and NLP.
          </p>
          
          <div className="flex flex-wrap justify-center mb-8 gap-3">
            {[
              "Data Science Student",
              "AI Enthusiast",
              "Aspiring Data Scientist",
              "Undergraduate in AI",
              "Machine Learning Learner",
              "Deep Learning Explorer"
            ].map((keyword, index) => (
              <span 
                key={index}
                className="text-neural-node font-bold italic px-3 py-1 bg-neural-lighter/50 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <a href="/lovable-uploads/8df42066-9faa-4d90-b66a-0473e260ec38.png" target="_blank" rel="noopener noreferrer">
              <Button className="bg-neural-accent hover:bg-neural-accent/80 flex items-center gap-2">
                <span>View Resume</span>
              </Button>
            </a>
            <a href="/lovable-uploads/8df42066-9faa-4d90-b66a-0473e260ec38.png" download="Rikin_Pithadia_Resume.png">
              <Button variant="outline" className="border-neural-accent text-white flex items-center gap-2">
                <Download size={16} />
                <span>Download Resume</span>
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/rikin-2911" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rikin-pithadia-20b94729b" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/rikin_2911/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Instagram size={24} />
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
