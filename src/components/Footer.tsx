import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <span>Built with</span>
            <Heart size={16} className="text-red-400 fill-red-400" />
            <span>by Mahetabalam Ansari</span>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
