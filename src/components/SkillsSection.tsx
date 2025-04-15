
import React from 'react';
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
      { name: 'JavaScript', proficiency: 75 },
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
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-neural-lighter/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="bg-neural-lighter border-neural-lighter">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-white text-center">
                  {category.name}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.proficiency}%</span>
                      </div>
                      <Progress
                        value={skill.proficiency}
                        className="h-2 bg-gray-700"
                        indicatorClassName="bg-gradient-to-r from-blue-500 to-neural-accent"
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
              className="bg-neural-lighter/50 rounded-lg py-3 px-4 text-gray-300 border border-neural-lighter"
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
