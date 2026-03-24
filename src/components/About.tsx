interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading label="About Me" title="Professional Summary" />

        <div className="mt-12 space-y-6">
          <p className="text-lg leading-relaxed text-body">
            Senior Engineer with extensive experience building performant
            React.js applications for top-tier clients like{' '}
            <span className="text-heading font-semibold">H&M</span> and{' '}
            <span className="text-heading font-semibold">Discover Bank</span>.
          </p>
          <p className="text-lg leading-relaxed text-body">
            Skilled in React, TypeScript, Node.js, and cloud DevOps with
            Azure. Experienced in leading modules, cross-functional
            collaboration, component architecture, and frontend performance
            tuning.
          </p>
          <p className="text-lg leading-relaxed text-body">
            Passionate about clean code, user experience, and building
            scalable solutions that make a real impact — from healthcare
            systems to e-commerce platforms serving millions of users.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ label, title }: SectionHeadingProps): React.JSX.Element {
  return (
    <div className="text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium border border-primary/10">
        {label}
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-heading">
        {title}
      </h2>
    </div>
  );
}
