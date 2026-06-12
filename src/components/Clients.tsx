import { ExternalLink } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { clients } from '../data/portfolio';

export default function Clients(): React.JSX.Element {
  return (
    <section id="clients" className="py-24 px-6 section-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Enterprise Experience"
          title="Clients & Brands"
          subtitle="Trusted by global retail, banking, and travel leaders."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <GlassCard key={client.name} className="flex flex-col">
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`Visit ${client.name} website`}
              >
                <div className="flex items-center justify-center h-20 px-4 py-3 rounded-xl bg-surface border border-border group-hover:border-primary/25 group-hover:bg-primary-light/30 transition-all">
                  <img
                    src={client.logo}
                    alt={client.logoAlt}
                    className="max-h-12 max-w-[180px] w-auto object-contain"
                  />
                </div>
              </a>

              <div className="flex items-center justify-between mt-5">
                <h3 className="text-xl font-bold text-heading tracking-tight">
                  {client.name}
                </h3>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-white text-muted hover:text-primary hover:border-primary/25 transition-all"
                  aria-label={`Visit ${client.name}`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="text-sm text-primary font-medium mt-1">{client.role}</p>
              <p className="mt-4 text-body text-sm leading-relaxed flex-1">
                {client.description}
              </p>

              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Visit website
                <ExternalLink size={14} />
              </a>

              <div className="mt-4 flex flex-wrap gap-2">
                {client.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2.5 py-1 text-xs rounded-md bg-accent-light text-accent font-medium"
                  >
                    {h}
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
