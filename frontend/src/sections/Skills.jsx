import { motion } from 'framer-motion';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Frontend', data: skills.frontend, color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { title: 'Backend', data: skills.backend, color: 'from-green-500 to-emerald-500', icon: '⚙️' },
    { title: 'Database', data: skills.database, color: 'from-purple-500 to-pink-500', icon: '🗄️' },
    { title: 'Tools', data: skills.tools, color: 'from-orange-500 to-red-500', icon: '🛠️' }
  ];

  return (
    <Section id="skills">
      <SectionTitle title="Skills & Technologies" subtitle="Technologies I work with" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition duration-500 rounded-3xl" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))`, '--tw-gradient-from': category.color.split(' ')[1], '--tw-gradient-to': category.color.split(' ')[3] }}></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.data.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
