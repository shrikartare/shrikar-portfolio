import { GraduationCap } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { education } from '../data/portfolio';

export default function Education(): React.JSX.Element {
  return (
    <section id="education" className="py-24 px-6 section-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Learning"
          title="Education"
          subtitle="Continuous growth in AI, machine learning, and intelligent systems."
        />

        <div className="mt-12 space-y-4">
          {education.map((edu) => (
            <GlassCard key={edu.degree} className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-accent-light shrink-0">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-heading font-semibold">{edu.degree}</h3>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      edu.status === 'Ongoing'
                        ? 'bg-primary-light text-primary'
                        : 'bg-surface text-muted border border-border'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
                <p className="text-base text-muted mt-1">{edu.institution}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
