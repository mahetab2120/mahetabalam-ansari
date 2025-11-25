import { Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'StockMaster ERP Lite',
      year: '2020',
      description:
        'Built a desktop-based inventory and billing system using WinForms and Crystal Reports, used daily by 5+ users to manage over 2000 stock items',
      technologies: ['C#', '.NET Framework', 'WinForms', 'Crystal Reports','ADO.NET','SQL Server'],
      highlights: [
  'Automated billing workflows, reducing manual calculation time by 60%',
  'Added employee access control, lowering administrative workload by 40%',
  'Implemented structured data forms and validations, resulting in a 70% reduction in manual data entry errors'
]
,
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
  'Optimized MongoDB queries and API structure, achieving a 30% improvement in response speed'
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Folder size={18} />
            Projects
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Work</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Healthcare solutions that make a real impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-900 transition-colors">
                  <Folder size={24} className="text-slate-700 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-slate-500 font-medium">{project.year}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-slate-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
