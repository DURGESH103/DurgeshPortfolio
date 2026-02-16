import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheck, FiZap } from 'react-icons/fi';
import projectsData from '../data/projects.json';
import ImageGallery from '../components/ImageGallery';
import Button from '../components/Button';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import Skeleton from '../components/Skeleton';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
    }, 300);
  }, [id]);

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setGalleryOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="w-32 h-10 mb-8" />
          <Skeleton className="w-3/4 h-12 mb-4" />
          <Skeleton className="w-full h-64 mb-8" />
          <Skeleton className="w-full h-40" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <SEO 
        title={project.title}
        description={project.shortDescription}
        keywords={project.tech.join(', ')}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button onClick={() => window.open(project.liveUrl, '_blank')}>
                    <FiExternalLink className="inline mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="secondary" onClick={() => window.open(project.githubUrl, '_blank')}>
                    <FiGithub className="inline mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 text-primary-700 dark:text-primary-300 rounded-xl border border-primary-200 dark:border-primary-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {project.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openGallery(idx)}
                    className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br from-primary-400 to-purple-500"
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      🖼️
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                        Click to view
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About This Project</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                    <FiCheck className="text-green-500" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                    <FiZap className="text-yellow-500" />
                    Challenges Solved
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          ⚡
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ImageGallery
        images={project.images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </PageTransition>
  );
};

export default ProjectDetails;
