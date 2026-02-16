const Skeleton = ({ className = '', variant = 'rectangular' }) => {
  const variants = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded h-4'
  };

  return (
    <div className={`animate-pulse bg-gray-300 dark:bg-gray-700 ${variants[variant]} ${className}`} />
  );
};

export default Skeleton;
