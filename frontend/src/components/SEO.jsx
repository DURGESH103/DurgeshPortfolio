import { useEffect } from 'react';

const SEO = ({ title, description, keywords, ogImage }) => {
  useEffect(() => {
    document.title = title ? `${title} | Portfolio` : 'Portfolio - Full Stack Developer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Full Stack MERN Developer Portfolio');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || 'MERN Developer, Full Stack Developer, React, Node.js');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || 'Portfolio - Full Stack Developer');
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || 'Full Stack MERN Developer Portfolio');
    }
  }, [title, description, keywords, ogImage]);

  return null;
};

export default SEO;
