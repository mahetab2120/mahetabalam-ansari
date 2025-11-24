export const generateResumeContent = (): string => {
  return `
MAHETABALAM ANSARI
Full Stack Developer

Contact Information:
Email: mahetabansari421@gmail.com
Phone: +91 9429689988
Location: Gujarat, India
LinkedIn: https://www.linkedin.com/in/mahetabalam-ansari
GitHub: https://github.com/mahetab2120

PROFESSIONAL SUMMARY
Passionate and detail-oriented Full Stack Developer with hands-on experience in designing and building scalable web applications using ASP.NET Core, React, and SQL Server. Skilled in frontend frameworks, RESTful APIs, database design, and deployment, with a strong focus on delivering secure, efficient, and user-centric systems. Proven ability to manage the full software development lifecycle — from concept and architecture to deployment and maintenance — within healthcare and enterprise domains.

WORK EXPERIENCE

Software Engineer
Tata Memorial Centre Punjab
July 2024 - Present

• Maintaining and upgrading Hospital EMR and Website built in ASP.NET MVC and Web Forms
• Designed and integrated ABHA (Ayushman Bharat Health Account) module using ASP.NET MVC and Postman, automating patient data fetch, creation, and verification
• Built Tender Tracking System for Purchase Department using ASP.NET MVC + Crystal Reports, improving procurement visibility and tracking on GeM portal
• Developed Dietician Web App using React + ASP.NET Web API, integrating Crystal Reports for dynamic diet reporting
• Conducted user training sessions and stakeholder demos to improve usability and adoption

Intern
Tata Memorial Centre Punjab
April 2024 - July 2024

• Assisted in maintaining and debugging EMR system built with ASP.NET MVC
• Enhanced patient registration and reporting modules using C# and SQL Server
• Supported integration testing and user acceptance for newly deployed hospital systems

EDUCATION

Master of Computer Application (AIML)
Chandigarh University
GPA: 6.57 | June 2024

Bachelor of Science (Information Technology)
Charotar University of Science & Technology
GPA: 7.52 | June 2021

PROJECTS

ABHA API Integration (2024)
• Tech Stack: ASP.NET MVC, REST APIs, Postman, SQL Server
• Integrated ABHA registration and verification into hospital workflow
• Automated data fetch and verification, cutting manual entry by 70%

Dietician App (2025)
• Tech Stack: React.js, ASP.NET Web API, Crystal Reports, SQL Server
• Created a full-stack web app for patient diet planning and report generation
• Integrated frontend UI with backend API and reporting module

TECHNICAL SKILLS

Frontend:
React.js, Angular.js, Redux Toolkit, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap

Backend:
ASP.NET Core MVC, ASP.NET Web API, Node.js (Express), RESTful API Design, C#

Databases:
SQL Server, PostgreSQL, MongoDB, DB2

DevOps & Cloud:
Docker, GitHub Actions (CI/CD), Azure Web Apps, IIS Deployment

Tools & Others:
Postman, Visual Studio, VS Code, Git, Crystal Reports, Figma

Core Concepts:
Authentication (JWT, OAuth2), Role-Based Access, State Management, API Integration, Microservices Architecture, Agile & SDLC
`;
};

export const downloadResume = () => {
  const content = generateResumeContent();
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Mahetabalam_Ansari_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
