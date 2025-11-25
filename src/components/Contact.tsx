import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mahetabansari421@gmail.com';
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Send size={18} />
            Contact
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Mail size={24} className="text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <a
                    href="mailto:mahetabansari421@gmail.com"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    mahetabansari421@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Phone size={24} className="text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <a
                    href="tel:+919429689988"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    +91 9429689988
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <MapPin size={24} className="text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600">Chandigarh, India</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Globe size={24} className="text-slate-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">Social</h3>
                  <div className="flex gap-3">
                    
                    <a
                      href="https://www.linkedin.com/in/mahetabalam-ansari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-slate-300">•</span>
                    
                    <a
                      href="https://github.com/mahetab2120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Send Me an Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
