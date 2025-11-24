import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tata Memorial Centre Punjab',
      period: 'Jul 2024 - Present',
      responsibilities: [
        'Maintaining and upgrading Hospital EMR and Website built in ASP.NET MVC and Web Forms',
        'Designed and integrated ABHA (Ayushman Bharat Health Account) module using ASP.NET MVC and Postman, automating patient data fetch, creation, and verification',
        'Built Tender Tracking System for Purchase Department using ASP.NET MVC + Crystal Reports, improving procurement visibility and tracking on GeM portal',
        'Developed Dietician Web App using React + ASP.NET Web API, integrating Crystal Reports for dynamic diet reporting',
        'Conducted user training sessions and stakeholder demos to improve usability and adoption',
      ],
    },
    {
      title: 'Intern',
      company: 'Tata Memorial Centre Punjab',
      period: 'April 2024 - Jul 2024',
      responsibilities: [
        'Assisted in maintaining and debugging EMR system built with ASP.NET MVC',
        'Enhanced patient registration and reporting modules using C# and SQL Server',
        'Supported integration testing and user acceptance for newly deployed hospital systems',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase size={18} />
            Work Experience
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building scalable healthcare solutions at Tata Memorial Centre
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-slate-600 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
