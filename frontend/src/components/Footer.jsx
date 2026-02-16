import { FiHeart, FiMail } from 'react-icons/fi';
import SocialIcons from './SocialIcons';
import { profile } from '../config/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent mb-3">
              {profile.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {profile.role}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h4>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mb-4"
            >
              <FiMail className="w-4 h-4" />
              {profile.email}
            </a>
            <div className="mt-4">
              <SocialIcons size="sm" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Made with <FiHeart className="inline text-red-500" /> by {profile.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
