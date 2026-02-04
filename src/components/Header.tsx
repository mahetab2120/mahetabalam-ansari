import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 shadow-lg backdrop-blur-lg' 
          : 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-md'
        }
        border-b border-slate-200/50 dark:border-slate-800/50
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-2xl md:text-3xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              MA
            </span>
            {/* <span className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold tracking-tight">
              Ansari
            </span> */}
          </a>

          {/* Desktop Menu + Theme Toggle */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative text-sm lg:text-base font-medium transition-all duration-300
                    group
                    ${activeSection === item.id
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }
                  `}
                >
                  {item.label}
                  {/* <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500
                      transition-all duration-400
                      ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  /> */}
                  <span className={`
  absolute -top-1 right-0 w-2 h-2 rounded-full bg-indigo-500
  transition-all duration-300
  ${activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
`} />
                </button>
              ))}
            </div>

            {/* Theme Toggle – with rotation */}
            <button
              onClick={toggleTheme}
              className={`
                relative p-2.5 rounded-full
                bg-slate-100/80 dark:bg-slate-800/60
                hover:bg-slate-200/80 dark:hover:bg-slate-700/60
                transition-all duration-300
                group
              `}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Sun
                  size={22}
                  className={`
                    absolute transition-all duration-500 transform
                    ${theme === 'dark' ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}
                    text-amber-500
                  `}
                />
                <Moon
                  size={22}
                  className={`
                    absolute transition-all duration-500 transform
                    ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}
                    text-indigo-400
                  `}
                />
              </div>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100/80 dark:bg-slate-800/60 hover:bg-slate-200/80 dark:hover:bg-slate-700/60 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-amber-500" />
              ) : (
                <Moon size={20} className="text-indigo-400" />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} className="text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu size={24} className="text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu – slide down with backdrop blur */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-16 z-40
          transition-all duration-400 ease-in-out
          ${isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
          }
        `}
      >
        <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="max-w-7xl mx-auto px-5 py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full text-left px-5 py-3.5 rounded-xl text-base font-medium
                  transition-all duration-300
                  ${activeSection === item.id
                    ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;