interface GoldDividerProps {
  className?: string;
}

const GoldDivider = ({ className = '' }: GoldDividerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-12 h-px bg-accent" />
    </div>
  );
};

export default GoldDivider;
