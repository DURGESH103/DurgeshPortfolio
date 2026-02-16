import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import certificationsData from '../data/certifications.json';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const Certifications = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'AI'];

  const filteredCertifications = selectedCategory === 'All'
    ? certificationsData
    : certificationsData.filter(cert => cert.category === selectedCategory);

  return (
    <PageTransition>
      <SEO 
        title="Certifications"
        description="Professional certifications and achievements in web development, cloud computing, and AI"
        keywords="Certifications, AWS, React, Node.js, MongoDB, Web Development"
      />

      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 mb-8 font-medium"
          >
            ← Back to Home
          </motion.button>

          <SectionTitle 
            title="Certifications & Achievements" 
            subtitle="Professional certifications and continuous learning journey"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredCertifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                    <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      🏆
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-bold text-gray-900 dark:text-white">
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-3">
                      <FiAward className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>
                    
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {cert.date}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedCert(cert)}
                        className="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        View
                        <FiExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCertifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No certifications found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">
                  {selectedCert.title}
                </h2>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-9xl">🏆</span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issued By</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{selectedCert.issuer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Date</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{selectedCert.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Description</p>
                  <p className="text-gray-700 dark:text-gray-300">{selectedCert.description}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(selectedCert.credentialUrl, '_blank')}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  View Credential
                  <FiExternalLink className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Certifications;
