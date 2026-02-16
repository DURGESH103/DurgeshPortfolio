import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCopy, FiCheck, FiSend } from 'react-icons/fi';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SocialIcons from '../components/SocialIcons';
import { profile } from '../config/profile';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${profile.email}?subject=Let's Connect&body=Hi ${profile.name},%0D%0A%0D%0AI would like to discuss...`;
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: profile.email,
      action: handleEmailClick,
      color: 'from-red-500 to-pink-500',
      description: 'Click to send email'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@DURGESH103',
      action: () => window.open(profile.github, '_blank'),
      color: 'from-gray-700 to-gray-900',
      description: 'View my repositories'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'durgeshkumardk',
      action: () => window.open(profile.linkedin, '_blank'),
      color: 'from-blue-600 to-blue-700',
      description: 'Connect professionally'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: profile.phone,
      action: () => window.location.href = `tel:${profile.phone}`,
      color: 'from-green-500 to-emerald-600',
      description: 'Call me directly'
    }
  ];

  return (
    <Section id="contact" className="bg-gray-50 dark:bg-gray-800/50">
      <SectionTitle title="Get In Touch" subtitle="Let's work together" />

      <div className="max-w-5xl mx-auto">
        {/* Quick Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.button
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-primary-500/50 transition-all"
          >
            <FiSend className="w-6 h-6" />
            Send Me a Message
          </motion.button>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Click to open your email client or use the contact methods below
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={method.action}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-primary-500"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {method.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 truncate">
                    {method.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {method.description}
                  </p>
                </div>
                {method.label === 'Email' && (
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyEmail();
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    title="Copy email"
                  >
                    {copied ? (
                      <FiCheck className="w-5 h-5 text-green-500" />
                    ) : (
                      <FiCopy className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
            Connect on Social Media
          </h3>
          <div className="flex justify-center">
            <SocialIcons size="lg" />
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
            <FiMapPin className="w-5 h-5 text-primary-500" />
            <span className="font-semibold text-gray-900 dark:text-white">
              {profile.location}
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
