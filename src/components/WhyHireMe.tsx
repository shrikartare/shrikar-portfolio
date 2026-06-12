import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { whyHireMe } from '../data/portfolio';

export default function WhyHireMe(): React.JSX.Element {
  return (
    <section id="why-me" className="py-24 px-6 section-white section-glow">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Value Proposition"
          title="Why Hire Me"
          subtitle="Senior engineering leader who ships measurable business impact — from AI systems and distributed architecture to performance at scale."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyHireMe.map((item) => (
            <GlassCard key={item.title}>
              <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
              <p className="mt-3 text-body text-base leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
