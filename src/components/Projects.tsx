import { Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'StockMaster ERP Lite',
      year: '2020',
      description:
        'Built a desktop-based inventory and billing system using WinForms and Crystal Reports, used daily by 5+ users to manage over 2000 stock items',
      technologies: ['C#', '.NET Framework', 'WinForms', 'Crystal Reports', 'ADO.NET', 'SQL Server'],
      highlights: [
        'Automated billing workflows, reducing manual calculation time by 60%',
        'Added employee access control, lowering administrative workload by 40%',
        'Implemented structured data forms and validations, resulting in a 70% reduction in manual data entry errors',
      ],
    },
    {
      title: 'coin-bounce',
      year: '2023',
      description:
        'Created a full-stack web app MERN blog platform supporting 100+ posts and over 300 user interactions',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      highlights: [
        'Implemented secure CRUD operations with JWT authentication and role-based access control',
        'Added real-time commenting using WebSockets, improving user engagement and interaction flow',
        'Optimized MongoDB queries and API structure, achieving a 30% improvement in response speed',
      ],
    },
  ];

  return (
    <section
      id="projects"
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
            <Folder size={20} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-700 dark:text-indigo-300 font-semibold text-base">
              Featured Projects
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent tracking-tight mb-5 animate-fade-in">
            Creative Works & Impactful Solutions
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From desktop utilities to full-stack platforms — building tools that solve real problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                group relative
                bg-white/80 dark:bg-slate-900/70 backdrop-blur-md
                border border-slate-200/60 dark:border-slate-800/60
                rounded-2xl p-8 md:p-9
                shadow-lg hover:shadow-2xl hover:shadow-indigo-200/40 dark:hover:shadow-indigo-950/30
                hover:-translate-y-3 hover:border-indigo-400/60 dark:hover:border-indigo-600/60
                transition-all duration-400 ease-out
                overflow-hidden
                animate-fade-in-up
                stagger-${index + 1}
              `}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 dark:from-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/70 dark:to-purple-950/50 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                    <Folder size={26} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  <span>{project.year}</span>
                  {/* Optional: add link icon if project has live demo */}
                  {/* <ExternalLink size={14} /> */}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3 tracking-wide">
                  Key Highlights
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-slate-700 dark:text-slate-300 text-base"
                    >
                      <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 text-xl">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`
                      px-4 py-2 text-sm font-medium
                      bg-gradient-to-r from-slate-100/80 to-slate-200/60 dark:from-slate-800/70 dark:to-slate-700/60
                      text-slate-800 dark:text-slate-200
                      border border-slate-300/70 dark:border-slate-700/50
                      rounded-lg
                      hover:scale-105 hover:shadow-sm hover:border-indigo-400/60 dark:hover:border-indigo-500/60
                      transition-all duration-250
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add these keyframes to your global CSS or use tailwind animate plugin */}
      {/* 
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        .animate-fade-in-up { animation: fadeInUp 0.9s ease-out forwards; }
        .animate-fade-in    { animation: fadeIn 1.2s ease-out forwards; }
        .stagger-1 { animation-delay: 120ms; }
        .stagger-2 { animation-delay: 240ms; }
        */}
    </section>
  );
};

export default Projects;