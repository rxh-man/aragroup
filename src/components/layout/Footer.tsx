import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xs">A</span>
              </div>
              <span className="font-serif text-sm tracking-[0.15em] uppercase">ARA Group</span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              A privately owned, self-funded business group focused on halal, ethical, 
              and sustainable investments across the globe.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-accent mb-4">Navigation</h4>
              <ul className="space-y-2.5">
                <li><Link to="/" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">About</Link></li>
                <li><Link to="/companies" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">Companies</Link></li>
                <li><Link to="/projects" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">Projects</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-accent mb-4">Contact</h4>
              <ul className="space-y-2.5 text-sm text-primary-foreground/50">
                <li>Headquarters: Qatar</li>
                <li>Qatar · Saudi Arabia · UAE · India</li>
                <li className="hover:text-accent transition-colors cursor-pointer">info@aragroup.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10">
          <p className="text-[11px] text-primary-foreground/30 leading-relaxed max-w-3xl">
            ARA Group of Companies does not solicit, accept, or engage in third-party investments 
            or public funding of any kind. All operations are self-funded using ARA Group's own capital.
          </p>
          <p className="mt-4 text-[11px] text-primary-foreground/25">
            © {new Date().getFullYear()} ARA Group of Companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
