interface GoldDividerProps {
  className?: string;
}

const GoldDivider = ({ className = '' }: GoldDividerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
      <div className="w-2 h-2 bg-accent rotate-45 mx-4" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
    </div>
  );
};

export default GoldDivider;
