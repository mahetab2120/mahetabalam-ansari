// src/components/ScrollToTop.tsx
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
  onClick={scrollToTop}
  className={`
    fixed bottom-24 right-6 z-50
    p-3 rounded-full
    bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900
    shadow-lg hover:bg-slate-700 dark:hover:bg-slate-300
    hover:scale-110 transition-all duration-300
    ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `}
  aria-label="Back to top"
>
  <ArrowUp size={24} />
</button>
  );
};

export default ScrollToTop;