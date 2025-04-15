
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const educationHistory = [
  {
    degree: 'Bachelor of Science (BS) Honors in Data Science and AI',
    institution: 'Indian Institute of Technology - Guwahati, Assam',
    year: '2023 - 2027',
    description: 'Focusing on advanced machine learning algorithms, neural networks, and data analytics. Participating in cutting-edge research on AI applications in various domains. Exploring the integration of AI with IoT and cloud computing technologies for real-time data processing and analytics.',
    cgpa: '7.25/10.0'
  },
  {
    degree: 'BTech in Mechanical Engineering',
    institution: 'Government Engineering College, Gandhinagar',
    year: '2023 - 2027',
    description: 'Currently pursuing studies in mechanical engineering with a focus on computational methods and simulation. Exploring the integration of AI and machine learning in mechanical systems design, predictive maintenance, and automated manufacturing processes.',
    cgpa: '7.25/10.0'
  }
];

const workHistory = [
  {
    position: 'Data Science Research Assistant',
    company: 'AI Research Lab, IIT Guwahati',
    year: '2023 - Present',
    description: 'Working on research projects related to deep learning applications in computer vision and natural language processing. Contributing to publications and presentations at academic conferences.',
  },
  {
    position: 'AI & ML Workshop Participant',
    company: 'TechLearn Academy',
    year: '2023',
    description: 'Completed intensive training in advanced machine learning algorithms and deep neural networks. Developed projects on image classification and sentiment analysis using TensorFlow and PyTorch.',
  }
];

const awards = [
  {
    title: 'AI Innovation Challenge Finalist',
    organization: 'National AI Summit',
    year: '2023',
  },
  {
    title: 'Data Science Hackathon Winner',
    organization: 'College Tech Fest',
    year: '2023',
  },
  {
    title: 'Academic Excellence Award',
    organization: 'IIT Guwahati',
    year: '2023',
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
                    <p className="text-gray-300 mb-2"><span className="font-medium">CGPA:</span> {item.cgpa}</p>
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
