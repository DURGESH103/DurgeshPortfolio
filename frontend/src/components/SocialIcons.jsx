import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { profile } from '../config/profile';

const SocialIcons = ({ size = 'md', showEmail = false, className = '' }) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const socialLinks = [
    { 
      icon: FiGithub, 
      url: profile.github, 
      label: 'GitHub',
      color: 'hover:bg-gray-900 dark:hover:bg-gray-700'
    },
    { 
      icon: FiLinkedin, 
      url: profile.linkedin, 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: FiTwitter, 
      url: profile.twitter, 
      label: 'Twitter',
      color: 'hover:bg-sky-500'
    }
  ];

  if (showEmail) {
    socialLinks.push({
      icon: FiMail,
      url: `mailto:${profile.email}`,
      label: 'Email',
      color: 'hover:bg-red-500'
    });
  }

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map(({ icon: Icon, url, label, color }, idx) => (
        <motion.a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className={`${sizes[size]} flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-white transition-all border border-gray-200 dark:border-gray-700 group ${color}`}
          aria-label={label}
          title={label}
        >
          <Icon className={`${iconSizes[size]} group-hover:scale-110 transition-transform`} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
