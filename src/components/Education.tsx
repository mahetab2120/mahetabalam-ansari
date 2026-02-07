import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Application (AIML)',
      institution: 'Chandigarh University',
      gpa: '6.57 GPA',
      year: 'June 2024',
      status: 'Completed',
      accent: 'from-indigo-500 to-blue-600',
    },
    {
      degree: 'Bachelor of Science (Information Technology)',
      institution: 'Charotar University of Science & Technology',
      gpa: '7.52 GPA',
      year: 'June 2021',
      status: 'Completed',
      accent: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-black overflow-hidden transition-colors duration-500"
    >
      {/* Background subtle effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.06),transparent_40%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.04),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100/70 to-blue-100/70 dark:from-indigo-950/50 dark:to-purple-950/40 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/40 shadow-sm mb-6">
            <GraduationCap size={22} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-700 dark:text-indigo-300 font-semibold text-base">
              Academic Journey
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent tracking-tight mb-5 animate-fade-in">
            Education & Qualifications
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in computer science, AI/ML, and software development
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`
                group relative
                bg-white/80 dark:bg-slate-900/75 backdrop-blur-md
                border border-slate-200/60 dark:border-slate-800/60
                rounded-2xl md:rounded-3xl p-8 md:p-10
                shadow-lg hover:shadow-2xl hover:shadow-indigo-200/40 dark:hover:shadow-indigo-950/30
                hover:-translate-y-3 hover:border-indigo-400/60 dark:hover:border-indigo-600/60
                transition-all duration-400 ease-out
                overflow-hidden
                animate-fade-in-up
                stagger-${index + 1}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Accent gradient bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${edu.accent} opacity-90 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative flex items-start gap-5 mb-6">
                <div
                  className={`
                    p-5 rounded-2xl
                    bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/70 dark:to-purple-950/50
                    shadow-md group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-400
                  `}
                >
                  <Award size={32} className="text-indigo-600 dark:text-indigo-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors mb-2">
                    {edu.degree}
                  </h3>

                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-base">
                    

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Calendar size={18} />
                      <span>{edu.year}</span>
                    </div>

                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      • {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add these to your global CSS */}
      {/*
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        .animate-fade-in-up { animation: fadeInUp 0.9s ease-out forwards; }
        .animate-fade-in    { animation: fadeIn 1.2s ease-out forwards; }
        .stagger-1 { animation-delay: 150ms; }
        .stagger-2 { animation-delay: 300ms; }
      */}
    </section>
  );
};

export default Education;