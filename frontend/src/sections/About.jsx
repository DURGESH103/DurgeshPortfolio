import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const { about, personal } = portfolioData;
  const navigate = useNavigate();

  return (
    <Section id="about" className="bg-gray-50 dark:bg-gray-800/50">
      <SectionTitle title="About Me" subtitle="Get to know me better" />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-full aspect-square rounded-3xl bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-3xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <span className="text-9xl">👨💻</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {about.description}
          </p>

          <div className="space-y-4 mb-8">
            {about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">📍 Location</p>
              <p className="font-bold text-gray-900 dark:text-white">{personal.location}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">✉️ Email</p>
              <p className="font-bold text-gray-900 dark:text-white text-sm truncate">{personal.email}</p>
            </motion.div>
          </div>

          <Button onClick={() => navigate('/about-details')} className="w-full sm:w-auto">
            Read More About Me
            <FiArrowRight className="inline ml-2" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
