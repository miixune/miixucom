import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">404</h1>
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Hmm, looks like there is no Page with that URL. Maybe you can try searching for it or go back to the homepage!
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        <Home className="mr-2 h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;