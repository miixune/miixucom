import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-10 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="block">
              <img src="/logo.png" alt="Miixu Logo" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Projects
            </Link>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="transition-transform hover:rotate-12 duration-300" />
              ) : (
                <Moon size={20} className="transition-transform hover:rotate-12 duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;