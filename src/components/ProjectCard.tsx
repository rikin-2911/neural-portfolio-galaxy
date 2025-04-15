
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
}) => {
  return (
    <Card className="overflow-hidden bg-neural-lighter border-neural-lighter card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-neural-accent/20 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-start">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            aria-label={`View ${title} on GitHub`}
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
