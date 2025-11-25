import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
//import { downloadResume } from '../utils/generateResume';

const Hero = () => {


  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
              Mahetabalam Ansari
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              Passionate Full Stack Developer specializing in ASP.NET Core, React, and SQL Server.
              Building scalable, secure web applications with a focus on exceptional user experience.
            </p>

            <div className="flex flex-wrap gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Chandigarh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>9429689988</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:mahetabansari421@gmail.com"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
              >
                <Mail size={20} />
                Get In Touch
              </a>

              <a href="https://tinyurl.com/mahetabalam" download target="_blank">
  <button
    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-colors font-medium"
  >
    <Download size={20} />
    Download Resume
  </button>
</a>

            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mahetabalam-ansari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg border border-slate-200 hover:border-slate-900 hover:shadow-md transition-all"
              >
                <Linkedin size={24} className="text-slate-700" />
              </a>
              <a
                href="https://github.com/mahetab2120"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg border border-slate-200 hover:border-slate-900 hover:shadow-md transition-all"
              >
                <Github size={24} className="text-slate-700" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-600 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-500 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl font-bold">MA</div>
                  <div className="text-xl mt-4">Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
