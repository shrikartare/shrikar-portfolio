import { Briefcase } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { leadershipAreas, experience } from '../data/portfolio';

export default function TechnicalLeadership(): React.JSX.Element {
  return (
    <section id="leadership" className="py-24 px-6 section-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Leadership"
          title="Technical Leadership"
          subtitle="Mentoring, architecture reviews, cross-functional delivery, and production ownership across enterprise engagements."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {leadershipAreas.map((area) => (
            <GlassCard key={area.title}>
              <h3 className="text-lg font-semibold text-heading">{area.title}</h3>
              <ul className="mt-4 space-y-3">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base text-body leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-heading mb-6 text-center">
            Career Timeline
          </h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <GlassCard key={exp.company + exp.role} className="!p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-heading">
                      {exp.role}
                    </h4>
                    <p className="text-primary text-base font-medium mt-0.5">
                      {exp.company}
                      {exp.client && (
                        <span className="text-muted"> · {exp.client}</span>
                      )}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-xs text-muted glass px-3 py-1.5 rounded-full">
                    <Briefcase size={12} />
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-base text-body"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
