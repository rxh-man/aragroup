interface GoldDividerProps {
  className?: string;
}

const GoldDivider = ({ className = '' }: GoldDividerProps) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-10 bg-gradient-to-r from-transparent to-accent/60" />
      <div className="w-1.5 h-1.5 bg-accent rotate-45" />
      <div className="h-px w-10 bg-gradient-to-l from-transparent to-accent/60" />
    </div>
  );
};

export default GoldDivider;
