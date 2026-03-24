import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

interface SocialLink {
  icon: React.JSX.Element;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <GithubIcon size={20} />,
    href: 'https://github.com/shrikartare',
    label: 'GitHub',
  },
  {
    icon: <LinkedinIcon size={20} />,
    href: 'https://www.linkedin.com/in/shrikar-tare/',
    label: 'LinkedIn',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:shrikar.tare@gmail.com',
    label: 'Email',
  },
];

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-light to-surface"
    >
      {/* Subtle decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile photo */}
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-full blur-lg" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-border">
                <img
                  src="/profile.png"
                  alt="Shrikar Tare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/80 mb-6 text-sm text-body shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-heading leading-tight tracking-tight">
              Hi, I'm{' '}
              <span className="text-primary">
                Shrikar Tare
              </span>
            </h1>

            <p className="mt-5 text-xl md:text-2xl text-body max-w-2xl leading-relaxed">
              Senior Software Engineer specializing in{' '}
              <span className="text-heading font-semibold">React.js</span>,{' '}
              <span className="text-heading font-semibold">Node.js</span> &{' '}
              <span className="text-heading font-semibold">AI-driven solutions</span>,
              building performant web applications and intelligent workflows.
            </p>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 flex-wrap">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="px-8 py-3.5 rounded-xl border border-border text-heading hover:bg-surface font-medium transition-all duration-200"
              >
                View My Work
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl border border-border bg-white text-body hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
