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
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 animate-fade-up">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 animate-fade-up animate-delay-100">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto animate-fade-up animate-delay-200">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
