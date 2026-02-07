// import { Code2, Database, Cloud, Wrench } from 'lucide-react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Frontend',
//       icon: Code2,
//       skills: [
//         'React.js',
//         'Angular.js',
//         'Veu.js',
//         'Redux Toolkit',
//         'TypeScript',
//         'JavaScript (ES6+)',
//         'HTML5',
//         'CSS3',
//         'Tailwind CSS',
//         'Bootstrap',
//       ],
//     },
//     {
//       title: 'Backend',
//       icon: Database,
//       skills: [
//         'ASP.NET Core MVC',
//         'ASP.NET Web API',
//         'Node.js (Express)',
//         'RESTful API Design',
//         'C#',
//       ],
//     },
//     {
//       title: 'Databases',
//       icon: Database,
//       skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'DB2'],
//     },
//     {
//       title: 'DevOps & Cloud',
//       icon: Cloud,
//       skills: ['Docker', 'GitHub Actions (CI/CD)', 'Azure Web Apps', 'IIS Deployment'],
//     },
//     {
//       title: 'Tools & Others',
//       icon: Wrench,
//       skills: ['Postman', 'Visual Studio', 'VS Code', 'Git', 'Crystal Reports', 'Figma'],
//     },
//   ];

//   const concepts = [
//     'Authentication (JWT, OAuth2)',
//     'Role-Based Access',
//     'State Management',
//     'API Integration',
//     'Microservices Architecture',
//     'Agile & SDLC',
//   ];

//   return (
//     <section
//       id="skills"
//       className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-black overflow-hidden transition-colors duration-500"
//     >
//       {/* Background subtle animation */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.07),transparent_40%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.06),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100/70 to-blue-100/70 dark:from-indigo-950/50 dark:to-purple-950/40 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/40 shadow-sm mb-6">
//             <Code2 size={20} className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
//             <span className="text-indigo-700 dark:text-indigo-300 font-semibold text-base">
//               Technical Arsenal
//             </span>
//           </div>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent tracking-tight mb-5 animate-fade-in">
//             My Tech Universe
//           </h2>

//           <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
//             Building performant, scalable, and delightful digital experiences with modern tools & best practices
//           </p>
//         </div>

//         {/* Skill Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
//           {skillCategories.map((category, index) => (
//             <div
//               key={index}
//               className={`
//                 group relative
//                 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md
//                 border border-slate-200/60 dark:border-slate-800/60
//                 rounded-2xl p-7 md:p-8
//                 shadow-md hover:shadow-2xl hover:shadow-indigo-200/40 dark:hover:shadow-indigo-950/30
//                 hover:-translate-y-2 hover:border-indigo-400/60 dark:hover:border-indigo-600/60
//                 transition-all duration-400 ease-out
//                 overflow-hidden
//                 animate-fade-in-up
//                 stagger-${index + 1}
//               `}
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Glow on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 dark:from-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

//               <div className="relative flex items-center gap-4 mb-6">
//                 <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/70 dark:to-purple-950/50 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
//                   <category.icon size={26} className="text-indigo-600 dark:text-indigo-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
//                   {category.title}
//                 </h3>
//               </div>

//               <div className="flex flex-wrap gap-2.5">
//                 {category.skills.map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className={`
//                       px-4 py-2 text-sm font-medium
//                       bg-gradient-to-r from-slate-100/80 to-slate-200/60 dark:from-slate-800/70 dark:to-slate-700/60
//                       text-slate-800 dark:text-slate-200
//                       border border-slate-300/70 dark:border-slate-700/50
//                       rounded-lg
//                       hover:scale-105 hover:shadow-sm hover:border-indigo-400/60 dark:hover:border-indigo-500/60
//                       transition-all duration-250
//                     `}
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Core Concepts */}
//         <div
//           className={`
//             relative overflow-hidden
//             bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950
//             dark:from-black dark:via-indigo-950 dark:to-purple-950
//             rounded-3xl p-10 md:p-12
//             border border-indigo-800/30 dark:border-indigo-900/40
//             shadow-2xl shadow-indigo-950/30
//             animate-fade-in-up stagger-last
//           `}
//         >
//           <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_rgba(255,255,255,0.04),transparent_40%)] pointer-events-none" />

//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10 tracking-tight">
//             Core Principles I Live By
//           </h3>

//           <div className="flex flex-wrap gap-3 relative z-10">
//             {concepts.map((concept, index) => (
//               <span
//                 key={index}
//                 className={`
//                   group/concept relative px-5 py-2.5 rounded-xl text-sm font-medium
//                   bg-white/10 backdrop-blur-lg border border-white/15
//                   text-white/90 hover:text-white
//                   hover:bg-white/15 hover:border-white/30
//                   transition-all duration-300
//                   hover:shadow-md hover:shadow-white/5
//                   overflow-hidden
//                 `}
//               >
//                 {concept}
//                 <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover/concept:w-full transition-all duration-400" />
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Simple CSS animation keyframes - add to your global CSS or use tailwind animate plugin */}
//       {/* 
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to   { opacity: 1; transform: translateY(0);   }
//         }
//         .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
//         .animate-fade-in    { animation: fadeIn 1s ease-out forwards; }
//         .stagger-1 { animation-delay: 100ms; }
//         .stagger-2 { animation-delay: 200ms; }
//         .stagger-3 { animation-delay: 300ms; }
//         .stagger-4 { animation-delay: 400ms; }
//         .stagger-5 { animation-delay: 500ms; }
//         .stagger-last { animation-delay: 700ms; }
//       */}
//     </section>
//   );
// };

// export default Skills;


import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      accent: 'from-blue-500 to-cyan-500',
      skills: [
        'React.js',
        'Angular.js',
        'Vue.js',
        'Redux Toolkit',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap',
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      accent: 'from-purple-600 to-pink-600',
      skills: [
        'ASP.NET Core MVC',
        'ASP.NET Web API',
        'Node.js (Express)',
        'RESTful API Design',
        'C#',
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      accent: 'from-emerald-500 to-teal-600',
      skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'DB2'],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      accent: 'from-amber-500 to-orange-600',
      skills: ['Docker', 'GitHub Actions (CI/CD)', 'Azure Web Apps', 'IIS Deployment'],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      accent: 'from-gray-600 to-slate-700',
      skills: ['Postman', 'Visual Studio', 'VS Code', 'Git', 'Crystal Reports', 'Figma'],
    },
  ];

  const concepts = [
    'Authentication (JWT, OAuth2)',
    'Role-Based Access',
    'State Management',
    'API Integration',
    'Microservices Architecture',
    'Agile & SDLC',
  ];

  return (
    <section
      id="skills"
      className="relative py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-indigo-100/70 dark:bg-indigo-950/40 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/40 shadow-sm mb-5">
            <Code2 size={18} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-700 dark:text-indigo-300 font-semibold text-sm md:text-base">
              Technical Skills
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent tracking-tight mb-5 animate-fade-in">
            My Tech Stack
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Modern tools & practices I use to build scalable applications
          </p>
        </div>

        {/* Skill Cards – Mac-style editor windows, no code snippets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            
            <div
              key={index}
              className={`
                group relative
                bg-[#1e1e1e] rounded-xl md:rounded-2xl overflow-hidden
                shadow-xl hover:shadow-2xl hover:shadow-black/50
                border border-slate-700/60
                transition-all duration-400 ease-out
                animate-fade-in-up
                stagger-${index + 1}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* Mac-style title bar */}
              <div className="h-9 bg-[#2d2d2d] border-b border-slate-700/80 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c940]" />
                <div className="ml-3 text-xs text-slate-500 font-medium truncate">
                  {category.title.toLowerCase().replace(/\s+/g, '-')}.solution
                </div>
              </div>


              {/* Skills tags – main content */}
              <div className="p-5 md:p-6 bg-[#1e1e1e]">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`
                      p-4 rounded-xl bg-gradient-to-br ${category.accent}
                      shadow-md group-hover:scale-110 group-hover:rotate-6
                      transition-all duration-400
                    `}
                  >
                    <category.icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-slate-200 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`
                        px-3.5 py-1.5 text-xs md:text-sm font-medium
                        bg-slate-800/80 text-slate-200 rounded-md
                        border border-slate-600/50
                        hover:bg-slate-700/80 hover:border-slate-500/70
                        transition-all duration-250
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          ))}
        </div>

        {/* Core Concepts – simple tags */}
        <div
  className={`
    relative overflow-hidden mt-16
    bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950
    dark:from-black dark:via-indigo-950 dark:to-purple-950
    rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12
    border border-indigo-800/40 dark:border-indigo-900/50
    shadow-2xl shadow-indigo-950/40
    animate-fade-in-up stagger-last
  `}
>
  {/* Optional faint noise/grain texture */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 relative z-10 tracking-tight">
    Core Principles I Live By
  </h3>

  <div className="flex flex-wrap gap-3 sm:gap-4 relative z-10">
    {concepts.map((concept, index) => (
      <span
        key={index}
        className={`
          group/concept relative
          px-4 sm:px-5 py-2 sm:py-2.5
          rounded-xl text-sm sm:text-base font-medium
          bg-white/10 backdrop-blur-lg
          border border-white/15
          text-white/90 hover:text-white
          hover:bg-white/15 hover:border-white/30
          transition-all duration-300
          hover:shadow-md hover:shadow-white/5
          overflow-hidden
        `}
      >
        {concept}
        <span className="
          absolute bottom-0 left-0 h-[2px] w-0 
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          group-hover/concept:w-full
          transition-all duration-400 ease-out
        " />
      </span>
    ))}
  </div>
</div>


        {/* <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Core Principles
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {concepts.map((concept, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {concept}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;