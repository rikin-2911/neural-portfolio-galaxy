
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const educationHistory = [
  {
    degree: 'Ph.D. in Artificial Intelligence',
    institution: 'Stanford University',
    year: '2020 - Present',
    description: 'Research focus on reinforcement learning and generative models for predictive analytics.',
  },
  {
    degree: 'M.S. in Data Science',
    institution: 'Massachusetts Institute of Technology',
    year: '2017 - 2019',
    description: 'Specialized in machine learning and statistical modeling with a thesis on deep learning for time series forecasting.',
  },
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of California, Berkeley',
    year: '2013 - 2017',
    description: 'Focus on algorithms, data structures, and foundational mathematics for computing.',
  },
];

const workHistory = [
  {
    position: 'AI Research Intern',
    company: 'Google Research',
    year: '2021 - Present',
    description: 'Developing novel approaches to deep reinforcement learning for autonomous systems.',
  },
  {
    position: 'Data Scientist',
    company: 'Spotify',
    year: '2019 - 2021',
    description: 'Built recommendation systems and user personalization algorithms that increased user engagement by 22%.',
  },
  {
    position: 'Machine Learning Engineer Intern',
    company: 'Tesla',
    year: '2018 - 2019',
    description: 'Worked on computer vision systems for autopilot feature enhancement and optimization.',
  },
];

const awards = [
  {
    title: 'Outstanding Research Award',
    organization: 'International Conference on Machine Learning',
    year: '2022',
  },
  {
    title: 'Data Science Hackathon Winner',
    organization: 'Kaggle Competition',
    year: '2021',
  },
  {
    title: 'Dean\'s List Recognition',
    organization: 'MIT',
    year: '2017-2019',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <GraduationCap className="mr-2 text-neural-accent" /> Education
            </h3>
            
            <div className="space-y-6">
              {educationHistory.map((item, index) => (
                <Card key={index} className="bg-neural-lighter border-neural-lighter">
                  <CardContent className="pt-6">
                    <div className="mb-2 flex justify-between">
                      <h4 className="text-lg font-medium text-white">{item.degree}</h4>
                      <span className="text-neural-node">{item.year}</span>
                    </div>
                    <p className="text-gray-400 mb-2">{item.institution}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Briefcase className="mr-2 text-neural-accent" /> Experience
            </h3>
            
            <div className="space-y-6">
              {workHistory.map((item, index) => (
                <Card key={index} className="bg-neural-lighter border-neural-lighter">
                  <CardContent className="pt-6">
                    <div className="mb-2 flex justify-between">
                      <h4 className="text-lg font-medium text-white">{item.position}</h4>
                      <span className="text-neural-node">{item.year}</span>
                    </div>
                    <p className="text-gray-400 mb-2">{item.company}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white flex items-center justify-center">
            <Award className="mr-2 text-neural-accent" /> Awards & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="bg-neural-lighter border-neural-lighter text-center">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium text-white mb-2">{award.title}</h4>
                  <p className="text-gray-400 mb-1">{award.organization}</p>
                  <p className="text-neural-node">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
