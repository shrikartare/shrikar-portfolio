import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { systemDesignAreas } from '../data/portfolio';

export default function SystemDesign(): React.JSX.Element {
  return (
    <section id="systems" className="py-24 px-6 section-muted section-glow">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Engineering Depth"
          title="System Design Highlights"
          subtitle="Architectural expertise across distributed systems, cloud infrastructure, AI pipelines, and scalable frontend platforms."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {systemDesignAreas.map((area) => (
            <GlassCard key={area.title}>
              <h3 className="text-lg font-semibold text-heading">{area.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-surface text-body border border-border font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
