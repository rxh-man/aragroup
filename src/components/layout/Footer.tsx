const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <span className="font-serif text-base tracking-[0.15em] uppercase text-foreground">
              ARA Group
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A privately owned, self-funded business group focused on halal, ethical, 
              and sustainable investments.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 text-sm text-muted-foreground">
            <span>Qatar · Saudi Arabia · UAE · India</span>
            <span>info@aragroup.com</span>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-3xl">
            ARA Group of Companies does not solicit, accept, or engage in third-party investments 
            or public funding of any kind.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} ARA Group of Companies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
