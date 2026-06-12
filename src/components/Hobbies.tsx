import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { hobbies } from '../data/portfolio';

export default function Hobbies(): React.JSX.Element {
  return (
    <section id="hobbies" className="py-24 px-6 section-muted">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Beyond Code"
          title="Hobbies"
          subtitle="Activities that build discipline, focus, and competitive drive."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {hobbies.map((hobby) => (
            <GlassCard
              key={hobby.name}
              className="text-center hover:scale-[1.02] transition-transform"
            >
              <div className="text-5xl">{hobby.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold text-heading">
                {hobby.name}
              </h3>
              <p className="mt-2 text-sm text-body">{hobby.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
