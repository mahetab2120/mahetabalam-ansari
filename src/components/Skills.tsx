import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        'React.js',
        'Angular.js',
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
      skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'DB2'],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: ['Docker', 'GitHub Actions (CI/CD)', 'Azure Web Apps', 'IIS Deployment'],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code2 size={18} />
            Skills
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Modern tech stack for building enterprise-grade applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <category.icon size={20} className="text-slate-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Core Concepts & Methodologies</h3>
          <div className="flex flex-wrap gap-3">
            {concepts.map((concept, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium border border-white/20"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
