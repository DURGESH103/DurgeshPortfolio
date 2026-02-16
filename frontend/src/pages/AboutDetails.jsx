import { motion } from 'framer-motion';
import { FiArrowLeft, FiCode, FiTarget, FiHeart, FiTrendingUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const AboutDetails = () => {
  const navigate = useNavigate();

  const timeline = [
    {
      year: '2020',
      title: 'Started Web Development Journey',
      description: 'Began learning HTML, CSS, and JavaScript. Built first portfolio website and fell in love with creating interactive experiences.',
      icon: '🚀'
    },
    {
      year: '2021',
      title: 'Mastered React & Node.js',
      description: 'Dove deep into React ecosystem and backend development with Node.js. Built multiple full-stack projects and contributed to open source.',
      icon: '⚛️'
    },
    {
      year: '2022',
      title: 'Professional Developer',
      description: 'Landed first full-time role as Full Stack Developer. Worked on enterprise applications and learned industry best practices.',
      icon: '💼'
    },
    {
      year: '2023',
      title: 'Senior Developer & Mentor',
      description: 'Promoted to Senior Developer. Started mentoring junior developers and leading technical decisions for major projects.',
      icon: '🎯'
    },
    {
      year: '2024',
      title: 'Continuous Growth',
      description: 'Exploring cloud architecture, microservices, and AI integration. Building scalable solutions and sharing knowledge with the community.',
      icon: '🌟'
    }
  ];

  const strengths = [
    { title: 'Problem Solving', description: 'Breaking down complex problems into simple, elegant solutions', icon: '🧩' },
    { title: 'Fast Learner', description: 'Quickly adapting to new technologies and frameworks', icon: '⚡' },
    { title: 'Team Player', description: 'Collaborating effectively with cross-functional teams', icon: '🤝' },
    { title: 'Attention to Detail', description: 'Writing clean, maintainable, and well-documented code', icon: '🔍' },
    { title: 'User-Focused', description: 'Building intuitive interfaces with great user experience', icon: '❤️' },
    { title: 'Performance Optimization', description: 'Creating fast, efficient, and scalable applications', icon: '🚀' }
  ];

  const philosophy = [
    {
      title: 'Code Quality Over Speed',
      description: 'I believe in writing clean, maintainable code that stands the test of time rather than rushing to meet deadlines with technical debt.',
      icon: <FiCode className="w-8 h-8" />
    },
    {
      title: 'User-Centric Development',
      description: 'Every line of code should serve the end user. I prioritize user experience and accessibility in everything I build.',
      icon: <FiHeart className="w-8 h-8" />
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly. I dedicate time daily to learning new tools, patterns, and best practices to stay ahead.',
      icon: <FiTrendingUp className="w-8 h-8" />
    },
    {
      title: 'Goal-Oriented Approach',
      description: 'I set clear goals and break them into actionable steps. This helps me deliver projects on time while maintaining quality.',
      icon: <FiTarget className="w-8 h-8" />
    }
  ];

  return (
    <PageTransition>
      <SEO 
        title="About Me - Detailed"
        description="Learn more about my journey as a Full Stack Developer, my philosophy, and career goals"
        keywords="Developer Story, Career Journey, Web Development, MERN Stack"
      />

      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 mb-8 font-medium"
          >
            <FiArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>

          <SectionTitle 
            title="My Developer Journey" 
            subtitle="From curious beginner to passionate full-stack developer"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Story</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                My journey into web development started with a simple curiosity about how websites work. What began as a hobby quickly turned into a passion as I discovered the power of code to bring ideas to life.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I spent countless hours learning, building projects, and pushing myself to understand not just how things work, but why they work that way. This deep curiosity has been the driving force behind my growth as a developer.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, I specialize in building full-stack applications with the MERN stack, but I'm always exploring new technologies and approaches. My goal is to create software that not only solves problems but delights users with its simplicity and elegance.
              </p>
            </div>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Skills Journey Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-purple-600 hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center gap-3 mb-3 md:justify-end">
                          <span className="text-4xl">{item.icon}</span>
                          <span className="text-2xl font-bold text-primary-500">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    <div className="hidden md:block relative z-10">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 border-4 border-white dark:border-gray-900 shadow-lg" />
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Personal Strengths</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strengths.map((strength, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-5xl mb-4">{strength.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{strength.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">My Tech Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {philosophy.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
                >
                  <div className="mb-4 text-white/90">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Goals</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              My goal is to become a technical leader who not only builds great software but also mentors the next generation of developers. I want to contribute to open source, speak at conferences, and help shape the future of web development.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutDetails;
