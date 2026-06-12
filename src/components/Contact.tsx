import { Download, Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import SectionHeading from './ui/SectionHeading';
import { RESUME_URL } from '../data/portfolio';

const contactLinks = [
  {
    icon: <LinkedinIcon size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shrikar-tare',
    href: 'https://www.linkedin.com/in/shrikar-tare/',
  },
  {
    icon: <GithubIcon size={22} />,
    label: 'GitHub',
    value: 'github.com/shrikartare',
    href: 'https://github.com/shrikartare',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'shrikar.tare@gmail.com',
    href: 'mailto:shrikar.tare@gmail.com',
  },
];

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="py-24 px-6 section-band">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          variant="light"
          label="Get in Touch"
          title="Let's Build Something Impactful"
          subtitle="Open to Senior Software Engineer, Lead Engineer, Staff Engineer, and AI Engineer roles at product-led companies."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 text-center h-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="inline-flex p-3 rounded-xl bg-primary-light text-primary mb-4">
                  {link.icon}
                </div>
                <h3 className="text-heading font-medium">{link.label}</h3>
                <p className="text-sm text-muted mt-1 group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 flex items-center justify-center gap-3 text-center backdrop-blur-sm">
            <MapPin size={18} className="text-blue-200" />
            <span className="text-slate-200">
              Pune, India · Open to remote & hybrid
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:shrikar.tare@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-dark font-semibold hover:bg-blue-50 transition-all shadow-lg"
          >
            <Send size={18} />
            Contact Me
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 transition-all"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
