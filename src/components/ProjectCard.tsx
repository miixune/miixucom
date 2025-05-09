import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  projectUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex items-center justify-start space-x-4 mt-auto">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={20} />
            </a>
          )}
          {project.projectUrl && (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;