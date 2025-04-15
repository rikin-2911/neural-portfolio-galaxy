
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Sentiment Analysis for Social Media',
    description: 'Built a deep learning model to analyze sentiment in tweets and social media posts with 92% accuracy.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Natural Language Processing', 'PyTorch', 'BERT', 'Python'],
    githubUrl: 'https://github.com/rikin-2911',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn for a telecom company, resulting in 25% retention improvement.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Classification', 'Random Forest', 'XGBoost', 'Python'],
    githubUrl: 'https://github.com/rikin-2911',
  },
  {
    title: 'Computer Vision Object Detection',
    description: 'Created a real-time object detection system using YOLOv5 for identifying products on retail shelves.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Computer Vision', 'PyTorch', 'YOLO', 'OpenCV'],
    githubUrl: 'https://github.com/rikin-2911',
  },
  {
    title: 'Time Series Forecasting',
    description: 'Implemented advanced time series models to forecast energy consumption patterns for sustainable energy management.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['LSTM', 'Prophet', 'Pandas', 'Forecasting'],
    githubUrl: 'https://github.com/rikin-2911',
  },
  {
    title: 'Recommendation System',
    description: 'Built a collaborative filtering recommendation system for an e-commerce platform that increased conversion by 15%.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['Collaborative Filtering', 'Matrix Factorization', 'Python'],
    githubUrl: 'https://github.com/rikin-2911',
  },
  {
    title: 'Healthcare Diagnosis Assistant',
    description: 'Developed an AI-powered diagnostic tool to assist healthcare professionals in identifying patterns in medical imaging.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    tags: ['CNN', 'Medical Imaging', 'TensorFlow', 'Python'],
    githubUrl: 'https://github.com/rikin-2911',
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
