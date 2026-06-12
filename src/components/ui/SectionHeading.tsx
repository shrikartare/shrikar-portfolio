interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  variant = 'dark',
}: SectionHeadingProps): React.JSX.Element {
  const isLight = variant === 'light';

  return (
    <div className="text-center max-w-3xl mx-auto">
      <span
        className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium border ${
          isLight
            ? 'bg-white/10 text-blue-200 border-white/20'
            : 'bg-primary-light text-primary border-primary/10'
        }`}
      >
        {label}
      </span>
      <h2
        className={`mt-4 text-3xl md:text-4xl font-bold tracking-tight ${
          isLight ? 'text-white' : 'text-heading'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            isLight ? 'text-slate-300' : 'text-body'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
