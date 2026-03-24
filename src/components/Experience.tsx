import { Briefcase, Trophy } from 'lucide-react';
import { SectionHeading } from './About';

interface ExperienceItem {
  role: string;
  company: string;
  client: string | null;
  location: string;
  period: string;
  bullets: string[];
  achievement: string;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Lead Software Engineer',
    company: 'Publicis Sapient',
    client: 'H&M',
    location: 'Pune, India',
    period: 'Aug 2021 – Present',
    bullets: [
      'Architected and developed reusable React.js component library adopted by 10+ teams across a multi-brand e-commerce platform.',
      'Improved Time to Interactive from 4.5s to 2.6s (90% performance gain) using React optimization and lazy loading.',
      'Built responsive, themeable product detail pages used by millions of users, generating $240K AUD monthly.',
      'Led module teams, conducted code reviews, and mentored junior engineers.',
      'Collaborated with SRE team to troubleshoot and resolve critical production incidents.',
    ],
    achievement:
      'Nominated for "Partnering for Client Impact" award for frontend performance improvements.',
  },
  {
    role: 'Associate Software Engineer',
    company: 'Cognizant Technology Solutions',
    client: 'Discover Bank',
    location: 'Pune, India',
    period: 'Aug 2018 – Aug 2021',
    bullets: [
      'Developed mobile-friendly, WCAG AA-compliant banking web applications using React.js and Angular.',
      'Mentored new hires, conducted interviews, and created internal training documents.',
    ],
    achievement:
      'Awarded "Star Performer" for delivering a complex web app to production with zero major bugs.',
  },
  {
    role: 'Software Engineer',
    company: 'FIGMD',
    client: null,
    location: 'Pune, India',
    period: 'Sep 2016 – July 2018',
    bullets: [
      'Migrated legacy healthcare systems to modern React.js/Node.js stack, improving performance and maintainability.',
      'Visualized health data using Google Charts and D3.js.',
      'Integrated Stripe and Paytm for seamless payments in web and mobile apps.',
      'Created scalable database structures and optimized complex SQL queries.',
    ],
    achievement:
      'Awarded "Employee of the Month" for successful MIPS system migration.',
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Career" title="Professional Experience" />

        <div className="mt-16 relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-border" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-8 top-1 w-px h-px">
                  <div className="absolute -left-[5px] -top-[5px] w-[11px] h-[11px] rounded-full bg-primary border-2 border-white shadow-sm" />
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-heading">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                        {exp.client && (
                          <span className="text-muted">
                            {' '}
                            · Client: {exp.client}
                          </span>
                        )}
                      </p>
                    </div>
                    <span className="flex items-center gap-2 text-sm text-muted bg-surface px-3 py-1 rounded-full border border-border">
                      <Briefcase size={14} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-body"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.achievement && (
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200/60">
                      <Trophy
                        size={18}
                        className="text-amber-500 mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-amber-800">
                        {exp.achievement}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
