
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Sentiment Analysis for Social Media',
    description: 'Built a deep learning model to analyze sentiment in tweets and social media posts with 92% accuracy.',
    image: 'https://via.placeholder.com/600x400?text=Sentiment+Analysis',
    tags: ['Natural Language Processing', 'PyTorch', 'BERT', 'Python'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn for a telecom company, resulting in 25% retention improvement.',
    image: 'https://via.placeholder.com/600x400?text=Churn+Prediction',
    tags: ['Classification', 'Random Forest', 'XGBoost', 'Python'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Computer Vision Object Detection',
    description: 'Created a real-time object detection system using YOLOv5 for identifying products on retail shelves.',
    image: 'https://via.placeholder.com/600x400?text=Object+Detection',
    tags: ['Computer Vision', 'PyTorch', 'YOLO', 'OpenCV'],
    githubUrl: '#',
  },
  {
    title: 'Time Series Forecasting',
    description: 'Implemented advanced time series models to forecast energy consumption patterns for sustainable energy management.',
    image: 'https://via.placeholder.com/600x400?text=Time+Series',
    tags: ['LSTM', 'Prophet', 'Pandas', 'Forecasting'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Recommendation System',
    description: 'Built a collaborative filtering recommendation system for an e-commerce platform that increased conversion by 15%.',
    image: 'https://via.placeholder.com/600x400?text=Recommendation+System',
    tags: ['Collaborative Filtering', 'Matrix Factorization', 'Python'],
    githubUrl: '#',
  },
  {
    title: 'Healthcare Diagnosis Assistant',
    description: 'Developed an AI-powered diagnostic tool to assist healthcare professionals in identifying patterns in medical imaging.',
    image: 'https://via.placeholder.com/600x400?text=Healthcare+AI',
    tags: ['CNN', 'Medical Imaging', 'TensorFlow', 'Python'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
