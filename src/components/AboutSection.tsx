
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Book, Heart, BrainCircuit, ScanEye, MessageSquare, Workflow } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const educationHistory = [
  {
    degree: 'Bachelor of Science (BS) Honors in Data Science and AI',
    institution: 'Indian Institute of Technology - Guwahati, Assam',
    year: '2023 - 2027',
    description: 'Focusing on advanced machine learning algorithms, neural networks, and data analytics. Participating in cutting-edge research on AI applications in various domains. Exploring the integration of AI with IoT and cloud computing technologies for real-time data processing and analytics.',
    cgpa: '7.52/10.0'
  },
  {
    degree: 'BTech in Mechanical Engineering',
    institution: 'Government Engineering College, Gandhinagar',
    year: '2023 - 2027',
    description: 'Currently pursuing studies in mechanical engineering with a focus on computational methods and simulation. Exploring the integration of AI and machine learning in mechanical systems design, predictive maintenance, and automated manufacturing processes.',
    cgpa: '7.53/10.0'
  }
];

const interests = [
  {
    title: 'AI Agents & MLOps',
    icon: <BrainCircuit className="h-6 w-6 text-neural-accent" />,
    description: 'Developing autonomous AI agents capable of performing complex tasks and decision-making. Interest in creating robust MLOps pipelines for continuous integration and deployment of ML models.'
  },
  {
    title: 'Natural Language Processing',
    icon: <MessageSquare className="h-6 w-6 text-neural-accent" />,
    description: 'Fascinated by language models, sentiment analysis, and text generation. Working on projects involving text classification, named entity recognition, and question-answering systems.'
  },
  {
    title: 'Computer Vision',
    icon: <ScanEye className="h-6 w-6 text-neural-accent" />,
    description: 'Exploring image recognition, object detection, and video analysis. Interested in applications of computer vision in healthcare, autonomous vehicles, and augmented reality.'
  },
  {
    title: 'Data Engineering',
    icon: <Workflow className="h-6 w-6 text-neural-accent" />,
    description: 'Building scalable data pipelines and architectures to process large datasets efficiently. Experience with data warehousing, ETL processes, and big data technologies.'
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">About Me</h2>
        
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="education" className="text-lg">
              <GraduationCap className="mr-2" /> Education
            </TabsTrigger>
            <TabsTrigger value="interests" className="text-lg">
              <Heart className="mr-2" /> My Interests
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="space-y-6">
            {educationHistory.map((item, index) => (
              <Card key={index} className="bg-neural-lighter border-neural-lighter card-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-2 flex justify-between items-start">
                    <h4 className="text-xl font-medium text-white">{item.degree}</h4>
                    <span className="text-neural-node whitespace-nowrap ml-4">{item.year}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{item.institution}</p>
                  <p className="text-gray-300 mb-2"><span className="font-medium">CGPA:</span> {item.cgpa}</p>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="interests" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="bg-neural-lighter border-neural-lighter card-hover transition-all duration-300 h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {interest.icon}
                    <h4 className="text-xl font-medium text-white ml-2">{interest.title}</h4>
                  </div>
                  <p className="text-gray-300 flex-grow">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutSection;
