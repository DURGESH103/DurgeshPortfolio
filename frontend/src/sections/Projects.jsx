import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiStar, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import projectsData from '../data/projects.json';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Section id="projects" className="bg-gray-50 dark:bg-gray-800/50">
      <SectionTitle title="Featured Projects" subtitle="Some of my recent work" />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.slice(0, 4).map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="relative h-56 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                🚀
              </div>
              {project.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                >
                  <FiStar className="w-3 h-3" />
                  Featured
                </motion.div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 text-primary-700 dark:text-primary-300 rounded-lg border border-primary-200 dark:border-primary-800"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank');
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                >
                  <FiGithub className="w-4 h-4" />
                </motion.button>
              </div>

              <motion.div
                className="mt-4 flex items-center justify-center gap-2 text-primary-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Details
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </div>

            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-500/50 transition-all duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
