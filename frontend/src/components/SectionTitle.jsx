const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
