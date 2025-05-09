 import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const setupGradientAnimation = () => {
      const nameElement = nameRef.current;
      if (!nameElement) return;
      
      nameElement.style.backgroundSize = '300% 300%';
      nameElement.style.animation = 'gradient-animation 6s ease infinite';
    };

    setupGradientAnimation();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <section className="py-12 md:py-20">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
            <span 
              ref={nameRef}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
            >
              Miixu
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate developer creating digital experiences with a focus on seamless design and fluid interactions.
          </p>
          <div className="pt-4">
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              View my projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">About Me</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate self-taught developer with a love for creating clean, functional, and beautiful digital experiences. My journey in development started with curiosity and has evolved into a continuous learning process. I am constantly trying to expand my coding skills and knowledge to create even better things.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I really like to create and develop useful stuff for anyone to use completely for free.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or doing something else!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Let's Connect!</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Feel free to contact me at any time!
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Explore my work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;