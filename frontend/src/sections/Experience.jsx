import { motion } from 'framer-motion';
import { FiAward, FiStar, FiTarget, FiBriefcase } from 'react-icons/fi';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  const { experience, achievements } = portfolioData;

  const iconMap = {
    award: FiAward,
    star: FiStar,
    trophy: FiTarget
  };

  return (
    <Section id="experience">
      <SectionTitle title="Experience & Achievements" subtitle="My professional journey" />

      <div className="mb-20">
        <div className="flex items-center gap-3 mb-10">
          <FiBriefcase className="w-8 h-8 text-primary-500" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
        </div>
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-10 border-l-4 border-primary-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 shadow-lg" />
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                    <p className="text-lg text-primary-500 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.location}</p>
                  </div>
                  <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-10">
          <FiStar className="w-8 h-8 text-yellow-500" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Achievements</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = iconMap[achievement.icon] || FiAward;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-8 rounded-2xl text-white shadow-xl">
                  <Icon className="w-12 h-12 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                  <p className="text-sm opacity-90 mb-2">{achievement.issuer}</p>
                  <p className="text-xs opacity-75 font-semibold">{achievement.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
