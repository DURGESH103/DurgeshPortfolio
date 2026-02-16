import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiMail } from 'react-icons/fi';
import Button from '../components/Button';
import SocialIcons from '../components/SocialIcons';
import { profile } from '../config/profile';

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:${profile.email}?subject=Let's Connect&body=Hi ${profile.name},%0D%0A%0D%0AI would like to discuss...`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg mb-8 border border-gray-200 dark:border-gray-700"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for work</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                {profile.name}
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {profile.role}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button onClick={() => window.open(profile.resumeUrl, '_blank')} className="text-base sm:text-lg px-8 py-4">
              <FiDownload className="inline mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" onClick={handleContactClick} className="text-base sm:text-lg px-8 py-4">
              <FiMail className="inline mr-2" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center"
          >
            <SocialIcons size="lg" />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 hover:text-primary-500 transition-colors"
            aria-label="Scroll down"
          >
            <FiArrowDown className="w-6 h-6 mx-auto" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
