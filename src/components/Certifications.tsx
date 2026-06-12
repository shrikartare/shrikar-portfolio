import { Award } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { certifications } from '../data/portfolio';

export default function Certifications(): React.JSX.Element {
  return (
    <section id="certifications" className="py-24 px-6 section-muted">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          subtitle="Validated cloud and platform engineering expertise."
        />

        <div className="mt-12 space-y-4">
          {certifications.map((cert) => (
            <GlassCard key={cert.name} className="flex items-center gap-5">
              <div className="p-3 rounded-xl bg-primary-light shrink-0">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-heading font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted mt-0.5">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
