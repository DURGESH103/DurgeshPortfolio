import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Section = ({ id, children, className = '' }) => {
  const [ref, isInView] = useInView();

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
