import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-lg tracking-wide">ARA GROUP</span>
                <span className="text-xs text-primary-foreground/60 tracking-widest uppercase">of Companies</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              A privately owned, self-funded business group focused on halal, ethical, 
              and sustainable investments across Qatar, Saudi Arabia, UAE, and India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wide mb-6 text-accent">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/companies" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Our Companies</Link></li>
              <li><Link to="/projects" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wide mb-6 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Headquarters: Qatar</li>
              <li>Operations: Qatar | Saudi Arabia | UAE | India</li>
              <li className="hover:text-accent transition-colors cursor-pointer">info@aragroup.com</li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 leading-relaxed max-w-4xl">
            ARA Group of Companies does not solicit, accept, or engage in third-party investments 
            or public funding of any kind. All operations are self-funded using ARA Group's own capital.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} ARA Group of Companies. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40">
              Self-Funded • Ethical • Global
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
