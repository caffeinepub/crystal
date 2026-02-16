interface DiamondIconProps {
  className?: string;
}

export function DiamondIcon({ className = "w-6 h-6" }: DiamondIconProps) {
  return (
    <span 
      className={`inline-flex items-center justify-center text-primary font-bold ${className}`}
      style={{ lineHeight: 1 }}
    >
      ♦
    </span>
  );
}
