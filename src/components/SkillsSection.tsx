
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', proficiency: 95 },
      { name: 'R', proficiency: 85 },
      { name: 'SQL', proficiency: 90 },
      { name: 'C', proficiency: 75 },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      { name: 'Supervised Learning', proficiency: 90 },
      { name: 'Unsupervised Learning', proficiency: 85 },
      { name: 'Deep Learning', proficiency: 80 },
      { name: 'Natural Language Processing', proficiency: 85 },
    ],
  },
  {
    name: 'Data Science Tools',
    skills: [
      { name: 'Pandas/NumPy', proficiency: 95 },
      { name: 'Scikit-Learn', proficiency: 90 },
      { name: 'TensorFlow/PyTorch', proficiency: 85 },
      { name: 'Tableau/Power BI', proficiency: 80 },
    ],
  },
  {
    name: 'AI Tools',
    skills: [
      { name: 'Jupyter Notebooks', proficiency: 95 },
      { name: 'Google Colab', proficiency: 90 },
      { name: 'MATLAB', proficiency: 85 },
      { name: 'Azure ML Studio', proficiency: 80 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  return (
    <section id="skills" className="section-padding bg-neural-lighter/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card 
              key={category.name} 
              className={`bg-neural-lighter border-neural-lighter transition-all duration-300 ${
                hoveredCategory === category.name ? 'transform scale-105 shadow-lg shadow-neural-node/30' : ''
              }`}
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-white text-center">
                  {category.name}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="space-y-2"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between">
                        <span className={`text-gray-300 transition-colors duration-300 ${
                          hoveredSkill === skill.name ? 'text-neural-node font-medium' : ''
                        }`}>{skill.name}</span>
                        <span className="text-gray-400">{skill.proficiency}%</span>
                      </div>
                      <Progress
                        value={skill.proficiency}
                        className={`h-2 bg-gray-700 transition-all duration-500 ${
                          hoveredSkill === skill.name ? 'h-3' : ''
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Big Data', 'Data Visualization', 'Statistical Analysis', 'AWS', 
            'Feature Engineering', 'Neural Networks', 'Computer Vision', 'Reinforcement Learning'].map((skill) => (
            <div 
              key={skill}
              className="bg-neural-lighter/50 rounded-lg py-3 px-4 text-gray-300 border border-neural-lighter hover:bg-neural-lighter hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-neural-node/20"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
