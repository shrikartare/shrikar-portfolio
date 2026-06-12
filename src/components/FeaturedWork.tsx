import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { GithubIcon } from './icons';
import { caseStudies, type CaseStudy } from '../data/portfolio';

function CaseStudyCard({ study }: { study: CaseStudy }): React.JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard className="flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-heading">{study.title}</h3>
          <p className="text-sm text-primary font-medium mt-1">{study.role}</p>
        </div>
        <div className="flex gap-2">
          {study.websiteUrl && (
            <a
              href={study.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass glass-hover text-body hover:text-heading"
              aria-label={`Visit ${study.title}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
          {study.githubUrl && (
            <a
              href={study.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass glass-hover text-body hover:text-heading"
              aria-label={`View ${study.title} on GitHub`}
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {study.metrics.map((m) => (
          <span
            key={m}
            className="px-2.5 py-1 text-xs rounded-md bg-primary-light text-primary font-medium"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-4 text-sm">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
            Problem
          </h4>
          <p className="text-body leading-relaxed">{study.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
            Solution
          </h4>
          <p className="text-body leading-relaxed">{study.solution}</p>
        </div>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-5 flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
        aria-expanded={expanded}
      >
        {expanded ? 'Show less' : 'View architecture & engineering details'}
        <ChevronDown
          size={16}
          className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <div className="mt-5 pt-5 border-t border-border space-y-5 text-sm">
          <DetailBlock title="Architecture" content={study.architecture} />
          <DetailBlock title="Business Impact" content={study.impact} />
          <TagBlock title="Technologies" items={study.technologies} />
          <TagBlock title="Challenges" items={study.challenges} />
          <TagBlock title="Engineering Decisions" items={study.decisions} />
          <TagBlock title="Results" items={study.results} />
        </div>
      )}
    </GlassCard>
  );
}

function DetailBlock({
  title,
  content,
}: {
  title: string;
  content: string;
}): React.JSX.Element {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
        {title}
      </h4>
      <p className="text-body leading-relaxed">{content}</p>
    </div>
  );
}

function TagBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}): React.JSX.Element {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
        {title}
      </h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-body">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeaturedWorkSection(): React.JSX.Element {
  const featured = caseStudies.filter((s) => s.featured);

  return (
    <section id="work" className="py-24 px-6 section-muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Case Studies"
          title="Featured Work"
          subtitle="Production systems with measurable impact — problem, architecture, engineering decisions, and business outcomes."
        />

        <div className="mt-14 space-y-6">
          {featured.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdditionalProjectsSection(): React.JSX.Element {
  const other = caseStudies.filter((s) => !s.featured);

  if (other.length === 0) return <></>;

  return (
    <section id="additional-projects" className="py-24 px-6 section-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Additional Projects"
          subtitle="Side projects and client work — full-stack builds deployed to production."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {other.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
