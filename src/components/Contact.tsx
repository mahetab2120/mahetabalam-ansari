import { Mail, Phone,  Globe, Send, MessageCircle } from 'lucide-react';

type ContactItem = {
  icon: typeof Mail; // or import { LucideIcon } from 'lucide-react' and use LucideIcon
  title: string;
  value: string | JSX.Element;
  action?: () => void;          // only functions that return void
  color?: string;
  isNew?: boolean;
};

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mahetabansari421@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/919429689988?text=Hi%20Mahetabalam%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20opportunities.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const contactItems: ContactItem[] = [
    
    {
      icon: Phone,
      title: 'Phone',
      value: 'Quick Contact',
      action: () => window.open('tel:+919429689988', '_blank', 'noopener,noreferrer'),
      color: 'hover:text-green-600 dark:hover:text-green-400',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Quick Chat',
      action: handleWhatsAppClick,
      color: 'hover:text-emerald-600 dark:hover:text-emerald-400',
      isNew: true,
    },
    {
      icon: Globe,
      title: 'Social Profiles',
      value: (
        <div className="flex flex-col gap-2.5 text-base">
          <a
            href="https://www.linkedin.com/in/mahetabalam-ansari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0a66c2] dark:hover:text-[#60a5fa] transition-colors inline-flex items-center gap-1.5"
          >
            LinkedIn <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/mahetab2120"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      ),
      action: undefined,
      color: '',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40 text-indigo-700 dark:text-indigo-300 text-base font-semibold mb-6 shadow-sm">
            <Send size={20} className="animate-pulse" />
            Let's Connect
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent tracking-tight mb-5 animate-fade-in">
            Ready to Collaborate?
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Open to full-time roles, freelance projects, or just interesting conversations.  
            Reach out — I usually reply within a few hours!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <div
              key={index}
              onClick={item.action}
              className={`
                group
                ${item.action ? 'cursor-pointer' : 'cursor-default'}
                bg-white/70 dark:bg-slate-900/50 backdrop-blur-md
                border border-slate-200/70 dark:border-slate-800/70
                rounded-2xl p-7
                hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-indigo-950/20
                hover:border-indigo-300 dark:hover:border-indigo-700/50
                transition-all duration-300 ease-out
                ${item.isNew ? 'ring-1 ring-emerald-400/50 dark:ring-emerald-500/30 animate-pulse-slow' : ''}
              `}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`
                    p-4 rounded-xl
                    bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700
                    group-hover:scale-110 group-hover:rotate-6
                    transition-transform duration-300
                  `}
                >
                  <item.icon size={28} className="text-slate-700 dark:text-slate-300" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1.5">
                    {item.title}
                  </h3>
                  <div
                    className={`text-base leading-relaxed ${item.color} transition-colors`}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <button
            onClick={handleEmailClick}
            className={`
              group relative inline-flex items-center gap-3
              bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900
              dark:from-slate-100 dark:via-indigo-100 dark:to-slate-100
              dark:text-slate-900
              px-10 py-5 rounded-xl text-lg font-semibold text-white
              shadow-2xl shadow-indigo-950/20 dark:shadow-indigo-500/10
              hover:shadow-2xl hover:shadow-indigo-950/30 dark:hover:shadow-indigo-500/20
              hover:scale-[1.03] active:scale-[0.97]
              transition-all duration-300
              overflow-hidden
            `}
          >
            <Mail size={22} className="group-hover:rotate-12 transition-transform duration-300" />
            Send Me an Email
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919429689988?text=Hi%20Mahetabalam%2C%20saw%20your%20portfolio%20and%20would%20love%20to%20connect..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div
          className={`
            flex items-center justify-center w-16 h-16
            bg-gradient-to-br from-green-500 to-emerald-600
            rounded-full shadow-2xl
            hover:scale-110 hover:shadow-green-500/50
            active:scale-95
            transition-all duration-300
          `}
        >
          <MessageCircle size={28} className="text-white" />
        </div>
        <span
          className="
            absolute -top-10 right-0 bg-green-600 text-white text-xs px-3 py-1.5 
            rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
            whitespace-nowrap shadow-md
          "
        >
          Quick Chat on WhatsApp
        </span>
      </a>
    </section>
  );
};

export default Contact;