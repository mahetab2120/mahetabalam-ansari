import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tata Memorial Centre Punjab',
      period: 'Jul 2024 - Present',
      responsibilities: [
        'Maintained and upgraded the Hospital EMR and Website built in ASP.NET MVC and Web Forms, improving system stability by 30% and reducing user-reported issues by 40%.',
        'Designed and integrated the ABHA (Ayushman Bharat Health Account) module using ASP.NET MVC and Postman, automating patient data fetch/creation/verification and reducing manual entry time by 70%.',
        'Developed API integration for Teleradiology Reporting, enabling seamless report exchange between the EMR and external radiology service providers, reducing turnaround time by 45%.',
        'Developed a Dietician Web App using React + ASP.NET Web API, enabling automated diet reporting through Crystal Reports and reducing report preparation time from 30 minutes to under 2 minutes.',
        'Conducted training sessions and stakeholder demos for 50+ staff members, boosting adoption and reducing support queries by 35%.',
      ],
    },
    {
      title: 'Intern',
      company: 'Tata Memorial Centre Punjab',
      period: 'April 2024 - Jul 2024',
      responsibilities: [
        'Assisted in maintaining and debugging the EMR system built with ASP.NET MVC, improving system responsiveness by 20% and reducing recurring issues by 30%.',
        'Enhanced patient registration and reporting modules using C# and SQL Server, improving data accuracy and reducing form submission errors by 25%.',
        'Supported integration testing and user acceptance for newly deployed hospital systems, helping achieve a 95% UAT pass rate and reducing post-deployment issues by 40%.',
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
