import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import ProImg from '../assets/ma.png';

const Hero = () => {
  return (
    <section
      id="home"
      className={`
        relative pt-16 pb-12 md:pt-20 md:pb-16
        px-5 sm:px-8 lg:px-12
        flex items-center justify-center
        min-h-[70vh] md:min-h-[85vh]
        bg-gradient-to-br from-slate-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-950 dark:to-black
        transition-colors duration-500
      `}
    >
      {/* Very light background accent */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.04),transparent_60%)]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content – comes first on mobile */}
          <div className="space-y-5 md:space-y-7 order-2 lg:order-1">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/60 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/40 text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Full Stack Developer
            </div>

            {/* Name – scaled carefully */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Mahetabalam Ansari
            </h1>

            {/* One-line pitch */}
            {/* <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium">
              Full Stack • ASP.NET Core • React • SQL Server
            </p> */}
            <p className="typewriter text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium">
  Full Stack • ASP.NET Core • Node • React
</p>


            {/* Short description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Building secure, scalable web applications with focus on performance and great user experience.
            </p>

            {/* Contact row – compact */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-indigo-600 dark:text-indigo-400" />
                Chandigarh, India
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-indigo-600 dark:text-indigo-400" />
                +91 94296 89988
              </div>
            </div>

            {/* Buttons – smaller padding */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="mailto:mahetabansari421@gmail.com"
                className={`
                  inline-flex items-center gap-2
                  bg-slate-900 hover:bg-indigo-900 text-white
                  dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-indigo-100
                  px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg
                  font-medium text-sm sm:text-base
                  shadow-md hover:shadow-lg hover:scale-[1.02] transition-all
                `}
              >
                <Mail size={18} />
                Contact Me
              </a>

              <a
                href="https://tinyurl.com/mahetabalam"
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`
                  inline-flex items-center gap-2
                  border-2 border-slate-900 dark:border-slate-300
                  bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100
                  hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900
                  px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg
                  font-medium text-sm sm:text-base
                  shadow-sm hover:shadow-md hover:scale-[1.02] transition-all
                `}
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Social – very compact */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/mahetabalam-ansari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="text-slate-700 dark:text-slate-300" />
              </a>
              <a
                href="https://github.com/mahetab2120"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} className="text-slate-700 dark:text-slate-300" />
              </a>
            </div>
          </div>

          {/* Photo area – comes after text on mobile, smaller size */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 max-w-full">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 dark:from-indigo-600/20 dark:to-purple-600/15 rounded-2xl transform rotate-3 scale-105 blur-md opacity-70" />

              {/* Photo frame */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/90 dark:border-slate-900/80 shadow-xl">
                {ProImg ? (
                  <img
                    src={ProImg}
                    alt="Mahetabalam Ansari"
                    className="w-full h-auto object-contain aspect-square grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-6xl font-bold">
                    MA
                  </div>
                )}
              </div>

              {/* Small floating tag */}
              <div className="absolute -bottom-4 right-3 bg-indigo-600 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full shadow-md">
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;