import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Application (AIML)',
      institution: 'Chandigarh University',
      gpa: '6.57 GPA',
      year: 'June 2024',
    },
    {
      degree: 'Bachelor of Science (Information Technology)',
      institution: 'Charotar University of Science & Technology',
      gpa: '7.52 GPA',
      year: 'June 2021',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap size={18} />
            Education
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Academic Background</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Strong foundation in computer science and AI/ML
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Award size={24} className="text-slate-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-slate-600 font-medium mb-3">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      {edu.gpa}
                    </span>
                    <span className="text-slate-500">{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
