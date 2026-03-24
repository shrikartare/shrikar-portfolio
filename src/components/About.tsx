import { Code2, Users, Zap, Award } from 'lucide-react';

interface Highlight {
  icon: React.JSX.Element;
  title: string;
  desc: string;
}

interface SectionHeadingProps {
  label: string;
  title: string;
}

const highlights: Highlight[] = [
  {
    icon: <Code2 className="text-primary" size={24} />,
    title: '8+ Years',
    desc: 'Professional Experience',
  },
  {
    icon: <Users className="text-accent" size={24} />,
    title: 'Team Lead',
    desc: 'Module & Team Leadership',
  },
  {
    icon: <Zap className="text-amber-500" size={24} />,
    title: '90% Faster',
    desc: 'Performance Optimization',
  },
  {
    icon: <Award className="text-emerald-600" size={24} />,
    title: 'Azure Certified',
    desc: 'AZ-900 Fundamentals',
  },
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="About Me" title="Professional Summary" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-body">
              Lead Engineer with{' '}
              <span className="text-heading font-semibold">8+ years</span> of
              experience building performant React.js applications for top-tier
              clients like{' '}
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

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-3 p-2 rounded-lg bg-surface inline-block">{item.icon}</div>
                <h3 className="text-heading font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
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
