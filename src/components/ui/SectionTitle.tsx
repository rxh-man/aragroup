interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  align = 'center',
  className = ''
}: SectionTitleProps) => {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6 animate-fade-up">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-foreground leading-tight animate-fade-up animate-delay-100">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto mt-6 animate-fade-up animate-delay-200">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
