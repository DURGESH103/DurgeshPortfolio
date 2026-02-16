import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:shadow-xl hover:shadow-primary-500/50 border-2 border-transparent',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
