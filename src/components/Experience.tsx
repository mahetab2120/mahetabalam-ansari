import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tata Memorial Centre Punjab',
      period: 'Jul 2024 – Present',
      responsibilities: [
        'Maintained and upgraded the Hospital EMR and Website built in ASP.NET MVC and Web Forms, improving system stability by 30% and reducing user-reported issues by 40%.',
        'Designed and integrated the ABHA (Ayushman Bharat Health Account) module using ASP.NET MVC and Postman, automating patient data fetch/creation/verification and reducing manual entry time by 70%.',
        'Developed API integration for Teleradiology Reporting, enabling seamless report exchange between the EMR and external radiology service providers, reducing turnaround time by 45%.',
        'Developed a Dietician Web App using React + ASP.NET Web API, enabling automated diet reporting through Crystal Reports and reducing report preparation time from 30 minutes to under 2 minutes.',
        'Conducted training sessions and stakeholder demos for 50+ staff members, boosting adoption and reducing support queries by 35%.',
      ],
    },
    {
      title: 'Intern – Full Stack Development',
      company: 'Tata Memorial Centre Punjab',
      period: 'Apr 2024 – Jul 2024',
      responsibilities: [
        'Assisted in maintaining and debugging the EMR system built with ASP.NET MVC, improving system responsiveness by 20% and reducing recurring issues by 30%.',
        'Enhanced patient registration and reporting modules using C# and SQL Server, improving data accuracy and reducing form submission errors by 25%.',
        'Supported integration testing and user acceptance for newly deployed hospital systems, helping achieve a 95% UAT pass rate and reducing post-deployment issues by 40%.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header – more compact */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-indigo-100/70 dark:bg-indigo-950/40 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/40 shadow-sm mb-5">
            <Briefcase size={18} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-700 dark:text-indigo-300 font-semibold text-sm md:text-base">
              Professional Experience
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent tracking-tight mb-5 animate-fade-in">
            Career Journey
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Delivering impactful healthcare solutions at Tata Memorial Centre
          </p>
        </div>

        {/* Experience Cards – tighter spacing */}
        <div className="space-y-8 md:space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`
                group relative
                bg-white/85 dark:bg-slate-900/80 backdrop-blur-md
                border border-slate-200/60 dark:border-slate-800/60
                rounded-xl md:rounded-2xl p-6 md:p-8
                shadow-md hover:shadow-xl hover:shadow-indigo-200/30 dark:hover:shadow-indigo-950/30
                hover:-translate-y-1.5 hover:border-indigo-400/60 dark:hover:border-indigo-600/60
                transition-all duration-300 ease-out
                animate-fade-in-up
                stagger-${index + 1}
              `}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-80 rounded-t-xl md:rounded-t-2xl" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-300">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-100/80 dark:bg-slate-800/70 rounded-full text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-indigo-500 dark:text-indigo-400 text-lg mt-0.5 flex-shrink-0">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Required animation keyframes – add to your global CSS */}
      {/*
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .stagger-1 { animation-delay: 120ms; }
        .stagger-2 { animation-delay: 240ms; }
      */}
    </section>
  );
};

export default Experience;