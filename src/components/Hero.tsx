import { ArrowDown, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { RESUME_URL } from '../data/portfolio';
import profileProfessional from '../assets/profile-professional.png';

const socialLinks = [
  { icon: <GithubIcon size={18} />, href: 'https://github.com/shrikartare', label: 'GitHub' },
  { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/shrikar-tare/', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:shrikar.tare@gmail.com', label: 'Email' },
];

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark text-white"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="shrink-0">
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-accent/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl ring-2 ring-primary/30">
                <img
                  src={profileProfessional}
                  alt="Shrikar Tare — Lead Software Engineer"
                  width={224}
                  height={224}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 text-sm text-blue-100">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Lead Engineer · Pune, India · 8+ Years
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] font-bold leading-[1.15] tracking-tight text-white">
              Lead Software Engineer Building{' '}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Scalable Commerce, AI & Cloud-Native
              </span>{' '}
              Platforms
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              8+ years delivering high-scale engineering solutions across{' '}
              <span className="text-white font-medium">Retail</span>,{' '}
              <span className="text-white font-medium">Banking</span>,{' '}
              <span className="text-white font-medium">Healthcare</span>, and{' '}
              <span className="text-white font-medium">AI products</span> for
              H&M, Discover Bank, and enterprise platforms.
            </p>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <a
                href="#work"
                className="px-6 py-3 rounded-xl bg-white text-primary-dark font-semibold hover:bg-blue-50 transition-all shadow-lg"
              >
                View Work
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-medium transition-all shadow-lg"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 font-medium transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-slate-200 hover:text-white hover:bg-white/20 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#clients"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to clients"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
