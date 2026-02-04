import { Heart, Github, Linkedin, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black text-slate-300 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(59,130,246,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(139,92,246,0.08),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Left - Made with love */}
          <div className="flex items-center gap-3 text-lg">
            <span className="text-slate-400">Crafted with</span>
            <Heart
              size={20}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            <span className="font-medium text-slate-200">
              by Mahetabalam Ansari
            </span>
          </div>

          {/* Center - Social + Coffee */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mahetab2120"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-sm">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mahetabalam-ansari"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-[#0ea5e9] transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-sm">LinkedIn</span>
            </a>

            <div className="h-6 w-px bg-slate-700" aria-hidden="true" />

            <a
              href="https://www.buymeacoffee.com/mahetabalam" // ← change to your real link if you have one
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="Buy me a coffee"
            >
              <Coffee size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline text-sm">Coffee?</span>
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-sm text-slate-500">
            © {currentYear} Mahetabalam Ansari
            <span className="mx-2">·</span>
            All rights reserved
          </div>
        </div>

        {/* Optional small extra touch - motivational / fun line */}
        <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-500 italic">
          "Code is poetry — let's write something beautiful together"
        </div>
      </div>
    </footer>
  );
};

export default Footer;