import ProjectCard from '../components/ProjectCard';

const defaultProjects = [
  {
    id: '1',
    title: 'Test01',
    description: 'Description.',
    imageUrl: 'https://tenor.com/de/view/spongebob-meme-spongebob-screaming-spongebob-screaming-run-away-gif-4374785819174740755',
    githubUrl: 'https://github.com/miixune/project-one',
    projectUrl: 'https://project-one.miixu.com'
  },
  {
    id: '2',
    title: 'Test02',
    description: 'Description',
    imageUrl: 'https://tenor.com/de/view/spongebob-meme-spongebob-screaming-spongebob-screaming-run-away-gif-4374785819174740755',
    githubUrl: 'https://github.com/miixune/project-two',
  },
  {
    id: '3',
    title: 'Test03',
    description: 'Description',
    imageUrl: 'https://tenor.com/de/view/spongebob-meme-spongebob-screaming-spongebob-screaming-run-away-gif-4374785819174740755',
    githubUrl: 'https://github.com/miixune/project-three',
    projectUrl: 'https://project-three.miixu.com'
  }
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text inline-block dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
          My Projects
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          All my personal and distributed Coding-Projects!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {defaultProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;