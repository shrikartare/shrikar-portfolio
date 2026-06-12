interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = '',
}: GlassCardProps): React.JSX.Element {
  return (
    <div className={`card card-hover p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}
