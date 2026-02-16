import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiAward, FiMail } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../config/profile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.location.href = `mailto:${profile.email}?subject=Let's Connect`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={handleLogoClick}
          >
            {profile.name.split(' ')[0]}
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => navigate('/certifications')}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
            >
              <FiAward className="w-4 h-4" />
              Certifications
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <FiMail className="w-4 h-4" />
              Hire Me
            </motion.button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2" aria-label="Toggle theme">
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/certifications');
                setIsOpen(false);
              }}
              className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              <FiAward className="w-4 h-4" />
              Certifications
            </button>
            <button
              onClick={() => {
                handleContactClick();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-semibold justify-center"
            >
              <FiMail className="w-4 h-4" />
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
